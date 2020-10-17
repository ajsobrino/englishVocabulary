import { Document, } from 'mongoose';
 
 export default interface Word extends Document {
    
    id : string;
    display : string;
    type : string;
    topic : string;
    translations : string [];
    creationDate : Date;
    modificationDate: Date;
    success: number;
    fails : number;
 }