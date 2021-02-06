export default {
    name: 'mimo-player',
    props: ["track"],
    template: `
        <div class="d-flex align-items-center c-pointer bg-dark text-light py-2 px-3">
            <div v-if ="!playing" title="play" @click="unpause" class="me-3"><i class="fas fa-2x fa-play"></i></div>
            <div v-if ="playing" title="pause" @click="pause" class="me-3"><i class="fas fa-2x fa-pause"></i></div>
            <div v-if ="!muted" title="click to mute" @click="mute" class="me-3"><i class="fas fa-2x fa-volume-up"></i></div>
            <div v-if ="muted" title="click to unmute" @click="unmute" class="me-3"><i class="fas fa-2x fa-volume-mute"></i></div>
            <img  v-if="track && track.image" v-bind:src="track.image" class="me-2 img-album-thumb" /> 
            <div v-if="track" class="d-flex flex-grow-1 no-selection flex-column">
                <span >{{track.artist_name}} - {{track.name}}</span>
                <span >{{track.album_name}}</span>
            </div>
            <div v-if="track && track.audiodownload_allowed" title="Click to download"><i class="fas fa-2x fa-download"></div>
        </div>
    `,
    created() {
        this.audio = new Audio();
    },
    data() {
        return {
            playing: false,
            muted: false,
        };
    },
    methods: {
        unpause() {
            this.playing = true;
            this.audio.play();
        },
        pause() {
            this.playing = false;
            this.audio.pause();
        },
        mute() {
            this.muted = true;
            this.audio.muted = true;
        },
        unmute() {
            this.muted = false;
            this.audio.muted = false;
        },
    },
    watch: {
        track: function (track, oldTrack) {
            if (!track || !track.audio) {
                return;
            }

            this.audio.pause();
            const url = track.audio;
            this.audio.src = url;
            this.audio.play();
            this.playing = true;
        }
    }
}