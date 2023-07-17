export class CustomErrorClass extends Error {
    constructor(message : string, code: number) {
        super(message);
        this.code = code;
    }
    response?: {
       data: any;
       status: number;
       headers: string;
    };
    code
 }