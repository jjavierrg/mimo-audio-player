import ApiService from "./api.service.js";

export default class RadioService {
    apiService;

    constructor() {
        this.apiService = new ApiService();
    }

    async getRadiosAsync() {
        var result = await this.apiService.getAsync("radios");
        return result.results;
    }

    async playFile(fileId) {
        var result = await this.apiService.getAsync("tracks/file", `action=stream&id=${fileId}`);
        return result.results;
    }

    async downloadFile(fileId) {
        var result = await this.apiService.getAsync("tracks/file", `action=download&id=${fileId}`);
        return result.results;
    }

    async search(query) {
        if (!query || query.length < 2) {
            return;
        }

        var result = await this.apiService.getAsync("tracks", `format=jsonpretty&search=${query}`);
        return result.results;
    }
}
