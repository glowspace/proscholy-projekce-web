export default {
  // This client data
  client: {
    id: 15,
    name: 'Michael notebook'
  },

  // Session object
  current_session: {
    id: 1,
    code: 4538,

    name: 'Chvály',
    place: 'Dolany u Olomouce',
    date: '25.8.2020 19:00',

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
    id: 15,
    name: 'Ať srdce mé Tebe vídá',
    lyrics: 'Ať srdce mé Tebe vídá, ať srdce mé tebe zná.'
  },

  // Temporary song database
  songs: [
    {
      name: 'Ať srdce mé Tebe vídá',
      lyrics: 'Ať srdce mé Tebe vídá, ať srdce mé tebe zná.'
    }
  ]
}
