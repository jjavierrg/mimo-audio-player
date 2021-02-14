import RadioService from "../services/radio.service.js";
import TrackInfo from "./track-info.component.js";

export default {
    name: 'mimo-album',
    components: {
        'mimo-track-info': TrackInfo,
    },
    template: `
    <div v-if="!!albumInfo" class="d-flex flex-column">
        <fieldset class="d-flex mb-2">
            <img  v-bind:src="albumInfo.image" class="rounded img-album" /> 
            <fieldset class="ms-3 d-flex flex-column">
                <h2>{{ albumInfo.name }}</h2>
                <label>Artist: {{ albumInfo.artist_name }}</label>
                <label>Release date: {{ albumInfo.releasedate }}</label>
            </fieldset>
        </fieldset>
        <div v-if="!!albumInfo.tracks && !!albumInfo.tracks.length" class="flex-grow-1 overflow-auto m-3">
            <h4>Tracks</h4>
            <mimo-track-info v-for="track in albumInfo.tracks" :key="track.id" :track="track" :showDuration="true" :showPosition="true" @play="play" class="album-track"></mimo-track-info>
        </div>
    </div>
    `,
    created() {
        this.api = new RadioService();
        this.getAlbum(this.$router.currentRoute.params.album_id);
        this.loading = false;
    },
    data: () => {
        return {
            loading: false,
            albumInfo: undefined
        }
    },
    watch: {
        $route(to, from) {
            this.getAlbum(to.params.album_id);
        }
    },
    methods: {
        getAlbum: async function (albumId) {
            this.loading = true;
            this.albumInfo = await this.api.getAlbumInfo(albumId);
            this.loading = false;
        },
        play(track) {
            const trackToPlay = { ...track, artist_name: this.albumInfo.artist_name, album_name: this.albumInfo.name };
            this.$emit("play", trackToPlay);
        },
    },
}