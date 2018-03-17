export class User {

    constructor(
        public username: String,
        public password: String
    ) { }

    static CreateDefault(): User {
        return new User('', '');
    }
}
