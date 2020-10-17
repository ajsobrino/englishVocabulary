import mongoose, {Model } from 'mongoose';
import Word from '../model/word';
import WordSchema from './schemas/word-schema';

interface IWordModel extends Model<Word> {
}


export default mongoose.model<Word,IWordModel>('WordRepository', WordSchema);