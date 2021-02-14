import Search from './search.component.js';
import Player from './player.component.js';
import StorageService from '../services/storage.service.js';

export default {
    name: 'mimo-app',
    components: {
        'mimo-search': Search,
        'mimo-player': Player
    },
    template: `
    <div class="d-flex flex-column w-100 h-100">
        <div class="my-2 d-flex align-items-center">
            <i class="ms-3 c-pointer fas fa-home text-white fa-2x" @click="goHome" v-bind:title="$t('core.home')"></i>
            <mimo-search  @play="playTrack" class="mx-2 flex-grow-1"></mimo-search>
            <div class="locale-changer me-2">
                <select v-model="$i18n.locale" class="form-select" @change="save">
                    <option v-for="(lang, i) in Object.keys($i18n.messages)" :key="i" :value="lang">{{ lang }}</option>
                </select>
            </div>
        </div>
        <div class="container-fluid flex-grow-1 mb-3 overflow-auto"><router-view  @play="playTrack" class="bg-white w-100 h-100 rounded p-2"></router-view></div>
        <mimo-player :track="track"></mimo-player>
    </div>
    `,
    created() {
        this.storage = new StorageService();
        const userConf = this.storage.getUserConf();
        this.userConf = userConf || { locale: 'en' };

        this.$i18n.locale = this.userConf.locale;
    },
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
        },
        save() {
            this.userConf.locale = this.$i18n.locale;
            this.storage.saveUserConf(this.userConf);
        }
    }
}