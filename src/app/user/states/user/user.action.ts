export class GetUsers {
    static readonly type = '[Users] Fetch';
}

export class AddUsers {
    static readonly type = '[Users] Add';
    constructor(public userData: any) { }
}

export class UpdateUsers {
    static readonly type = '[Users] Update';
    constructor(public userData: any, public userId: number) { }
}

export class DeleteUsers {
    static readonly type = '[Users] Delete';
    constructor(public userId: number) { }
}