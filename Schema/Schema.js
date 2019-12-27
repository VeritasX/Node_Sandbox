const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const mainSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a name'
  },
  slug: Sting,
  Description:{
      type:String,
      trim:true,
      required:'You must give a description';
  }
});
