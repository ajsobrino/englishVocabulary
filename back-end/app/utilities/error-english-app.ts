export default class ErrorEnglishApp extends Error {
    name: string;
    message: string;
    stack?: string;

    constructor(message :string){
        super(message);
    }
    
}