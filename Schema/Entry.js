const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const entrySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a name'
  },
  slug: String,
  description: {
    type: String,
    trim: true,
    required: 'You must give a description'
  },
  browser: String,
  created: {
    type: Number,
    required: 'You must create a date'
  }
});

entrySchema.pre('save', async function(next) {
  if (!this.isModified('name')) {
    next();
    return;
  }
  this.slug = slug(this.name);
  //find other stores that have duplicate slugs
  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');
  const storesWithSlug = await this.constructor.find({ slug: slugRegEx });
  if (storesWithSlug.length) {
    this.slug = `${this.slug}-${storesWithSlug.length + 1}`;
  }
  next();
  //TODO make more resiliant so slugs are unique
});

module.exports = mongoose.model('Entry', entrySchema);
