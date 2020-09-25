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

    name: 'Chvály',

    current_song_id: 1,
    song_part_id: 1,

    // Selected songs
    songs: [
      {
        id: 11,
        name: 'Hospodine, kdo je podobný Tobě',
        lyrics: 'Ať srdce mé Tebe vídá, ať srdce mé tebe zná.'
      }
    ],

    devices: [
      {
        id: 15,
        type: 1,
        name: 'Michael notebook'
      },
    ]
  },

  // Only this client data
  current_preview: {
    song: {},
    section_id: 1
  },
}
