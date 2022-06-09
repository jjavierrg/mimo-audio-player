const messages = {
  album: {
    release_date: 'Fecha de publicación: {date}',
    artist: 'Artista: {name}',
    tracks: 'Canciones',
  },
  core: {
    home: 'Inicio',
    dashboard: `
    <h1>Reproductor de música de Jamendo mejorado</h1>
    <p>Aplicación SPA basada en vue que permite la reproducción de canciones a través del api de <a href="https://www.jamendo.com/" target="blank">Jamendo</a></p>
    <p>Utilice el buscador para encontrar una canción y poder reproducirla u obtener información del disco o del artista</p>
    `,
    search: 'Buscar',
    searching: 'Buscando...',
    no_results: 'Sin resultados',
  },
  artist: {
    member_sice: 'Miembro desde: {date}',
    website: 'Sitio Web: {website}',
    albums: 'Discos',
  },
  player: {
    play: 'Reproducir',
    pause: 'Pausar',
    mute: 'Click para silenciar',
    unmute: 'Click para activar volumen',
    download: 'Click para descargar',
    playing: 'Reproduciendo {track}',
  },
  track: {
    download: 'Descargar canción',
    view: 'Ver información del disco',
    play: 'Reproducir canción',
  },
}

export default messages
