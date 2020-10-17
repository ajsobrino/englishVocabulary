import Mongoose = require('mongoose')
import config = require('./config');
export default class ConfigDB {

    private  static instance : ConfigDB ;

    constructor(){
        Mongoose.connect(config.urlDB,config.configDBObject, (err) => {
            if (err) throw err;
            console.log('Start connect to mongodb');
        });
    }

    static getInstance(){
        if (!this.instance){
            this.instance = new ConfigDB();
        }
        return this.instance;
    }

}