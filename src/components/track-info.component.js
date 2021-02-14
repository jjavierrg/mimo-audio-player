export default {
  name: 'mimo-track-info',
  props: ['track', 'showDuration', 'showAlbumInfo', 'showPosition', 'showCover'],
  template: `
        <div class="d-flex align-items-center c-pointer">
            <img v-if="showCover" v-bind:src="track.image" class="me-2 img-album-thumb" @click="play" />
            <span v-if="showPosition" class="no-selection me-3">{{ track.position }}</span>
            <span class="me-2 flex-grow-1 align-self-center d-flex flex-column">
                <span class="no-selection" @click="play">{{track.name}}</span>
                <span v-if="track.artist_name" @click="viewArtist" class="text-primary c-pointer">{{track.artist_name}}</span>
            </span>
            <span v-if="showDuration" class="no-selection me-3">{{ getTrackDuration(track.duration) }}</span>
            <div v-if="track.audiodownload_allowed" class="me-2 c-pointer" v-bind:title="$t('track.download')" @click="download"><i class="fas fa-download"></i></div>
            <div v-if="showAlbumInfo" class="me-2 c-pointer" v-bind:title="$t('track.view')" @click="viewAlbum"><i class="fas fa-compact-disc"></i></div>
            <div class="me-2 c-pointer" v-bind:title="$t('track.play')" @click="play"><i class="fas fa-play"></i></div>
        </div>
    `,
  methods: {
    play() {
      this.$emit('play', this.track)
    },
    download() {
      window.open(this.track.audiodownload)
    },
    viewAlbum() {
      this.$router.push(`/album/${this.track.album_id}`)
    },
    viewArtist() {
      this.$router.push(`/artist/${this.track.artist_id}`)
    },
    getTrackDuration(totalSeconds) {
      const sec_num = parseInt(totalSeconds, 10)
      const hours = Math.floor(sec_num / 3600)
      const minutes = Math.floor((sec_num - hours * 3600) / 60)
      const seconds = sec_num - hours * 3600 - minutes * 60

      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    },
  },
}
