export class Room {
    name: string;
    queue: any[];
    talker?: string;
    constructor(name: string ) {
        this.name = name;
        this.queue = [];
        this.talker = '';
    }
}

