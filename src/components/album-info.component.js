export default {
    name: 'mimo-album-info',
    props: ["album"],
    template: `
    <fieldset v-if="!!album" class="d-flex mb-2 c-pointer" @click="viewAlbum(album.id)">
        <img  v-bind:src="album.image" class="mx-3 rounded img-album-thumb" /> 
        <fieldset class="d-flex flex-column">
            <h6>{{ album.name }}</h6>
            <label class="c-pointer">Release date: {{ album.releasedate }}</label>
        </fieldset>
    </fieldset>    
    `,
    methods: {
        viewAlbum(album_id) {
            this.$router.push(`/album/${album_id}`);
        }
    },
}