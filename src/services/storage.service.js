export default class StorageService {
    saveUserConf(conf) {
        localStorage.setItem('conf', JSON.stringify(conf));
    }
    getUserConf() {
        const value = localStorage.getItem('conf');
        if (!value) {
            return undefined;
        }

        return JSON.parse(value);
    }
}
