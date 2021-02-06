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
        <mimo-search class="m-2" @play="playTrack"></mimo-search>
        <div class="container-fluid flex-grow-1"><router-view></router-view></div>
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
        }
    }
}