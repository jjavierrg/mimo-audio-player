export default {
  name: 'mimo-player',
  props: ['track'],
  template: `
        <div class="d-flex align-items-center c-pointer bg-dark text-light py-2 px-3">
            <div v-if ="!playing" v-bind:title="$t('player.play')" @click="play" class="me-3"><i class="fas fa-2x fa-play"></i></div>
            <div v-if ="playing" v-bind:title="$t('player.pause')" @click="pause" class="me-3"><i class="fas fa-2x fa-pause"></i></div>
            <div v-if ="!muted" v-bind:title="$t('player.mute')" @click="mute" class="me-3"><i class="fas fa-2x fa-volume-up"></i></div>
            <div v-if ="muted" v-bind:title="$t('player.unmute')" @click="unmute" class="me-3"><i class="fas fa-2x fa-volume-mute"></i></div>
            <img  v-if="track && track.image" v-bind:src="track.image" class="me-2 img-album-thumb" /> 
            <div v-if="track" class="d-flex flex-grow-1 no-selection flex-column me-2">
                <span >{{track.artist_name}} - {{track.name}} ({{track.album_name}})</span>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" v-bind:style="{ width: progess + '%' }" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            <div v-if="track && track.audiodownload_allowed" v-bind:title="$t('player.download')" @click="download"><i class="fas fa-2x fa-download"></div>
        </div>
    `,
  created() {
    this.audio = new Audio()
    this.audio.ontimeupdate = () => {
      const progress = (this.audio.currentTime * 100) / this.audio.duration
      this.progess = Math.min(100, progress)
    }
    this.audio.onended = () => {
      this.reset()
      this.track = null
    }
  },
  data() {
    return {
      playing: false,
      muted: false,
      progess: 0,
    }
  },
  methods: {
    play() {
      if (!this.track) {
        return
      }

      this.playing = true
      this.audio.play()
    },
    pause() {
      this.playing = false
      this.audio.pause()
    },
    mute() {
      this.muted = true
      this.audio.muted = true
    },
    unmute() {
      this.muted = false
      this.audio.muted = false
    },
    reset() {
      this.audio.pause()
      this.progess = 0
      this.playing = false
    },
    download() {
      window.open(this.track.audiodownload)
    },
  },
  watch: {
    track: function (track, oldTrack) {
      if (!track || !track.audio) {
        return
      }

      this.reset()
      this.audio.src = track.audio
      this.play()
    },
  },
}
