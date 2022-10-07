export class User {
    constructor(public email: string,
        public id: string,
        private _token: string,
        private _tokenExpiratonDate: Date) { }

    get token() {
        if (!this._tokenExpiratonDate || new Date() > this._tokenExpiratonDate) {
            return null;
        }
        return this._token;
    }

}