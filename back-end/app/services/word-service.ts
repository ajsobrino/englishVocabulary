import Word from "../model/word";
import WordCriteria from "../controller/criteria/word-criteria";
import WordRepository from "../repository/word-repository";
import Page from "../model/page";

export default class WordService {
  private static instance: WordService;

  constructor() {}

  static getInstance() {
    if (!WordService.instance) {
      WordService.instance = new WordService();
    }
    return WordService.instance;
  }

  async searchByCriteria(wordCriteria: WordCriteria) {
    let words = await WordRepository.find({}, (err, words) => {
      if (err) {
        throw new Error();
      }
      return words;
    })
      .skip(wordCriteria.numberPerPage * (wordCriteria.page - 1))
      .limit(wordCriteria.numberPerPage);
    let pageCurrent = new Page<Word>(words);
    pageCurrent.page = wordCriteria.page;
    pageCurrent.elementPerPage = wordCriteria.numberPerPage;
    pageCurrent.totalElement = await WordRepository.countDocuments({});

    console.log(pageCurrent);
    return pageCurrent;
  }

  async delete(id : string){
      WordRepository.findByIdAndUpdate(id,{active:false});
  }

}
