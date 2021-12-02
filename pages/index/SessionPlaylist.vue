<template>
  <div>
    <ul class="list-group mb-3"
        v-if="state.current_session.songs.length">
      <li class="list-group-item"
          v-for="(song, key) in state.current_session.songs"
          @click="loadSongAsPreview(key)">{{ song.name }}

        <div class="badge badge-primary float-right mt-1"
             v-if="state.current_session.song_id === key">promítá se
        </div>
        <div class="badge badge-secondary float-right mt-1"
             v-if="state.current_session.preview_song_id === key && state.current_session.song_id !== key">náhled
        </div>
      </li>
    </ul>

    <div class="card">
      <div class="card-body">
        <p>Přidat píseň ze Zpěvníku ProScholy.cz</p>

        <div class="row">
          <div class="col-7">
            <input v-model="song_id"
                   class="form-control"
                   placeholder="zadejte číslo"
                   type="number">
          </div>
          <div class="col-5">
            <a class="btn btn-secondary"
               @click="addSong">Přidat píseň</a>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>

import state from "../state";
import gql from 'graphql-tag'

const FETCH_SONG_LYRIC = gql`
    query($id: ID!) {
        song_lyric(id: $id) {
             id,
             name,
             lyrics_no_chords
        }
    }
`;

export default {
  name: "SessionPlaylist",

  data: () => {
    return {
      state: state,
      song_id: null
    }
  },

  mounted() {
    this.addSong()
  },

  methods: {
    async addSong() {
      console.debug("Trying to pull song from ProScholy GQL API server.")

      try {
        const res = await this.$apollo.query({
          query: FETCH_SONG_LYRIC,
          variables: {
            id: this.song_id,
          },
        });

        if (res) {
          this.loading = false;

          let song = res.data.song_lyric
          let lyrics = song.lyrics_no_chords

          // Normalize song lyric new lines
          lyrics = lyrics.replace(/\r\n/g, "\n")
          lyrics = lyrics.replace(/\n \n/g, "\n\n")
          lyrics = lyrics.replace(/\n {2}\n/g, "\n\n")

          // Explode lyrics to sections
          song.sections = lyrics.split("\n\n")

          this.state.current_session.songs.push(song)

          if (this.state.current_session.preview_song_id === null) {
            this.loadSongAsPreview(0)
          }
        }
      } catch (err) {
        this.loading = false;
        this.searchResults = [];
      }
    },

    loadSongAsPreview(id) {
      this.state.current_preview.preview_song = this.state.current_session.songs[id]
      this.state.current_session.preview_song_id = id

      console.debug("Switching song to #" + id + " " + this.state.current_preview.song.name)
    },

    projectSectionOfCurrentSong(song_id, section) {
      console.debug("Go to section " + section)
      //console.debug("Section debug:", this.state.current_preview.song.sections[section])

      this.state.current_preview.section_id = section
      this.state.current_preview.section_phrase = this.state.current_preview.song.sections[section]
    },
  }
}
</script>

<style scoped>
.badge {
  transition: 1s;
}
</style>
