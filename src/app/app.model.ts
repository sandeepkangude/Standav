export class ContactModel {
    constructor(
        public id: number,
        public image: string,
        public name: string,
        public address: string,
        public phone: string,
        public email: string,
    ) { }
}