export class User {
    name: string;
    private _id?: number;
    avatar: string;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    constructor(name , avatar) {
        this.name = name;
        this.avatar = avatar;
    }
}
