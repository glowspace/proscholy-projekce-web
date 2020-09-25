export default {
  // This client data
  client: {
    id: null,
    name: null,
    type: 0
  },

  // Session object
  current_session: {
    id: 0,
    code: 4538,

    name: 'název promítání',

    current_song_id: null,
    song_part_id: null,

    // Selected songs
    songs: [],

    devices: []
  },

  // Only this client data
  current_preview: {
    song: {},
    section_id: 1
  },
}
