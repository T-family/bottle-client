export class Room {
    name: string;
    queue: any[];
    talker?: string;
    users?: any[];
    constructor(name: string ) {
        this.name = name;
        this.queue = [];
        this.talker = '';
    }
}

export interface ServerMessage {
    type: MessageTypes;
    AssignedID?: any;
    Queue?: any;
    userID?: any;
    username?: any;
}

export enum MessageTypes {
    userStoppedSpeaking =  'userStoppedSpeaking',
    userStartedSpeaking = 'userStartedSpeaking',
    userJoinsQueue = 'userJoinsQueue',
    userLeavesQueue = 'userLeavesQueue',
    userStopTalking = 'userStopTalking',
}
