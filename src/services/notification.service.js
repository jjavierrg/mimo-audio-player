export default class NotificationService {
  requestPermission() {
    if (!('Notification' in window)) {
      return
    }

    return Notification.requestPermission()
  }

  notifyTrack(track, message) {
    if (!('Notification' in window)) {
      return
    }

    if (Notification.permission === 'granted') {
      this.showNotification(message, track.image, track.name)
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        if (permission === 'granted') {
          this.showNotification(message, track.image, track.name)
        }
      })
    }
  }

  showNotification(body, icon, title) {
    var options = { body, icon, image: icon }
    var n = new Notification(title, options)
    setTimeout(n.close.bind(n), 3000)
  }
}
