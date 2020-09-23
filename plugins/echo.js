import Echo from "laravel-echo"


window.Pusher = require('pusher-js')

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: 'projekce-api',
  enabledTransports: ['ws', 'wss'],
  wsHost: 'localhost:6001',
  wsPort: 6001,
  disableStats: true,
});
