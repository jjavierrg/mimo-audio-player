export default {
    name: 'mimo-track-info',
    props: ["track"],
    template: `
        <div class="d-flex align-items-center c-pointer">
            <img v-bind:src="track.image" class="me-2 img-album-thumb" @click="play" /> 
            <span class="me-2 flex-grow-1 align-self-stretch d-flex flex-column">
                <span class="no-selection" @click="play">{{track.name}}</span>
                <span @click="viewArtist" class="text-primary c-pointer">{{track.artist_name}}</span>
            </span>
            <div v-if="track.audiodownload_allowed" class="me-2 c-pointer" title="Download track" @click="download"><i class="fas fa-download"></i></div>
            <div class="me-2 c-pointer" title="View album information" @click="viewAlbum"><i class="fas fa-compact-disc"></i></div>
            <div class="me-2 c-pointer" title="Play track" @click="play"><i class="fas fa-play"></i></div>
        </div>
    `,
    methods: {
        play() {
            this.$emit("play", this.track);
        },
        download() {
            window.open(this.track.audiodownload);
        },
        viewAlbum() {
            this.$router.push(`/album/${this.track.album_id}`);
        },
        viewArtist() {
            this.$router.push(`/artist/${this.track.artist_id}`);
        }
    }
}