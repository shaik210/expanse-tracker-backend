import mongoose from "mongoose";

import autoIncrement from "mongoose-auto-increment";
  

const Schema = mongoose.Schema({
    id:String,
    expense:String,
    categorie:String,
    amount:String,

})

autoIncrement.initialize(mongoose.connection);




const  expense = mongoose.model('expense',Schema);

export default expense;
