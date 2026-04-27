export class Baydetails {
    id: number;
    bayId: number;
    protectedId: number;
    amount: number;

    constructor(id: number, bayId: number, protectedId: number, amount: number) {
        this.id = id;
        this.amount = amount;
        this.bayId = bayId;
        this.protectedId = protectedId;
    }
}
