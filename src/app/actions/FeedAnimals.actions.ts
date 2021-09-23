export class FeedAnimals {
    static readonly type = '[Zoo] feed animals';
}

export interface ZebraFood {
    name: string;
    hay: number;
    carrots: number;
}
export class FeedZebra {
    static readonly type = '[Zoo] Feed Zebra';
    constructor(public zebraToFeed: ZebraFood) { }
}

