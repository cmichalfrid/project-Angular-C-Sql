export class Bay {
    id: number;
    clientId: number;
    date: Date;
    sumPrice: number;
    note: string;
    constructor(id: number, clientId: number, date: Date, sumPrice: number, note: string) {
        this.id = id;
        this.clientId = clientId;
        this.date = date;
        this.note = note;
        this.sumPrice = sumPrice
    }
}

