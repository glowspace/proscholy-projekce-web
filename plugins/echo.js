import Echo from "laravel-echo"


window.Pusher = require('pusher-js')

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: 'projekce-api',
  enabledTransports: ['ws'],
  wsHost: 'localhost',

  wsPort: 6001,
  wssPort: 6001,
  // disableStats: true,

  forceTLS: false,
  encrypted: false,
});



