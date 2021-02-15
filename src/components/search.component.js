import RadioService from '../services/radio.service.js'
import TrackInfo from './track-info.component.js'

export default {
  name: 'mimo-search',
  components: {
    'mimo-track-info': TrackInfo,
  },
  template: `
        <div class="dropdown p-relative">
            <input v-model=query class="form-control" v-model="query" v-bind:placeholder="$t('core.search')" id="track-search" data-bs-toggle="dropdown">
            <ul v-show="results || loading" class="dropdown-menu w-100" role="menu" aria-labelledby="track-search">
              <li v-if="!loading" v-for="r in results" :key="r.id"><mimo-track-info class="dropdown-item"  :track="r" :showAlbumInfo="true" :showCover="true"  @play="playTrack"></mimo-track-info> </li>
              <li v-if="!loading && results && !results.length" class="dropdown-header">{{ $t('core.no_results') }}</li>
              <li v-if="loading" class="dropdown-header">{{ $t('core.searching') }}</li>
            </ul>
        </div>
    `,
  data() {
    return {
      results: undefined,
      loading: false,
      query: '',
    }
  },
  created() {
    this.api = new RadioService()
  },
  methods: {
    performSearch: async function (query) {
      try {
        this.loading = true
        this.results = await this.api.search(query)
      } catch (error) {
        this.results = undefined
      } finally {
        this.loading = false
      }
      this.results = await this.api.search(query)
    },
    playTrack: function (track) {
      this.$emit('play', track)
    },
  },
  watch: {
    query: function (val, oldVal) {
      clearTimeout(this._timerId)
      this._timerId = setTimeout(() => this.performSearch(val), 500)
    },
  },
}
