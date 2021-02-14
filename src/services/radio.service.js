import ApiService from "./api.service.js";

export default class RadioService {
    apiService;

    constructor() {
        this.apiService = new ApiService();
    }

    async getRadiosAsync() {
        const result = await this.apiService.getAsync("radios");
        return result.results;
    }

    async playFile(fileId) {
        const result = await this.apiService.getAsync("tracks/file", `action=stream&id=${fileId}`);
        return result.results;
    }

    async downloadFile(fileId) {
        const result = await this.apiService.getAsync("tracks/file", `action=download&id=${fileId}`);
        return result.results;
    }

    async search(query) {
        if (!query || query.length < 2) {
            return;
        }

        const result = await this.apiService.getAsync("tracks", `format=jsonpretty&search=${query}`);
        return result.results;
    }

    async getArtistInfo(artistId) {
        if (!artistId) {
            return;
        }

        const result = await await this.apiService.getAsync("artists/albums", `id=${artistId}`);
        return !!result.results && !!result.results.length ? result.results[0] : undefined;
    }

    async getAlbumInfo(albumId) {
        if (!albumId) {
            return;
        }

        const result = await await this.apiService.getAsync("albums/tracks", `id=${albumId}`);
        const album = !!result.results && !!result.results.length ? result.results[0] : undefined;

        if (!!album && !!album.tracks && album.tracks.length) {
            album.tracks.forEach(t => t.position = parseInt(!t.position ? 0 : t.position, 10));
            album.tracks = album.tracks.sort((a, b) => a.position - b.position);
        }

        return album;
    }
}
