import Search from './search.component.js';
import Player from './player.component.js';

export default {
    name: 'mimo-app',
    components: {
        'mimo-search': Search,
        'mimo-player': Player
    },
    template: `
    <div class="d-flex flex-column w-100 h-100">
        <div class="my-2 d-flex align-items-center">
            <i class="ms-3 c-pointer fas fa-home text-white fa-2x" @click="goHome"></i>
            <mimo-search  @play="playTrack" class="mx-2 flex-grow-1"></mimo-search>
        </div>
        <div class="container-fluid flex-grow-1 mb-3 overflow-auto"><router-view  @play="playTrack" class="bg-white w-100 h-100 rounded p-2"></router-view></div>
        <mimo-player :track="track"></mimo-player>
    </div>
    `,
    data() {
        return {
            track: undefined
        };
    },
    methods: {
        playTrack(track) {
            this.track = track;
        },
        goHome() {
            this.$router.push(`/dashboard`);
        }
    }
}