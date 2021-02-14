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
}
