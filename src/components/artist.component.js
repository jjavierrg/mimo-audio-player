import RadioService from "../services/radio.service.js";
import AlbumInfo from "./album-info.component.js";

export default {
    name: 'mimo-artist',
    components: {
        'mimo-album-info': AlbumInfo,
    },
    template: `
    <div v-if="!!artistInfo" class="w-100 h-100 pb-3">
        <div class="bg-white w-100 h-100 rounded d-flex flex-column">
            <fieldset class="d-flex">
                <img  v-bind:src="artistInfo.image" class="m-3 rounded img-album" /> 
                <fieldset class="mt-3 d-flex flex-column">
                    <h2>{{ artistInfo.name }}</h2>
                    <label>Member since: {{ artistInfo.joindate }}</label>
                    <label v-if="!!artistInfo.website">WebSite: {{ artistInfo.website }}</label>
                </fieldset>
            </fieldset>
            <div v-if="!!artistInfo.albums && !!artistInfo.albums.length" class="flex-grow-1 overflow-auto">
                <h4 class="mt-3 ms-3">Albums</h4>
                <mimo-album-info v-for="album in artistInfo.albums" :key="album.id" :album="album"></mimo-album-info>
            </div>
        </div>
    </div>
    `,
    created() {
        this.api = new RadioService();
        this.getArtist(this.$router.currentRoute.params.artist_id);
        this.loading = false;
    },
    data: () => {
        return {
            loading: false,
            artistInfo: undefined
        }
    },
    watch: {
        $route(to, from) {
            this.getArtist(to.params.artist_id);
        }
    },
    methods: {
        getArtist: async function (artistId) {
            this.loading = true;
            this.artistInfo = await this.api.getArtistInfo(artistId);
            this.loading = false;
        }
    },
}