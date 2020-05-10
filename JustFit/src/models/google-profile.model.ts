export class GoogleProfileModel {
    given_name: string;
    family_name: string;
    picture: string;

    constructor(name: string, surname: string, picture: string) {
        this.given_name = name;
        this.family_name = surname;
        this.picture = picture;
    }
}