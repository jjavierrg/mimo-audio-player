const messages = {
  album: {
    release_date: 'Release date: {date}',
    artist: 'Artist: {name}',
    tracks: 'Tracks'
  },
  core: {
    home: 'Home',
    dashboard: `
    <h1>Jamendo music player</h1>
    <p>Vue spa web-application that uses <a href="https://www.jamendo.com/">Jamendo</a> api to play music tracks</p>
    <p>Use search box to find a track and play or view album or artist information</p>
    `,
    search: 'Search',
    no_results: 'No results'
  },
  artist: {
    member_sice: 'Member since: {date}',
    website: 'Website: {website}',
    albums: 'Albums'
  },
  player: {
    play: 'Play',
    pause: 'Pçause',
    mute: 'Click to mute',
    unmute: 'Click to unmute',
    download: 'Click to download'
  },
  track: {
    download: 'Download track',
    view: 'View album information',
    play: 'Play track',
  }
}

export default messages