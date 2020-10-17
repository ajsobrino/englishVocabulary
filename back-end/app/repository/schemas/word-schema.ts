import { Schema}  from 'mongoose';


const WordSchema = new Schema({
    id:{
        type : String     
    },
    display : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    topic:{
        type: String
    },
    translations :{
        type : [String],
        required : true
    },
    active :{
        type : Boolean,
        required : true
    },
    creationDate :{
        type : Date
    },
    creationModification : {
        type : String
    },
    fails :{
        type : Number,
        required :true
    },
    success:{
        type:Number,
        required: true
    }
});

export default WordSchema;