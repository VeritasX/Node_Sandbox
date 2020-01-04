const mongoose = require('mongoose');
const Entry = mongoose.model('Entry');

const findEntryAndReturn = async () => {
  let data = await Entry.find();
  data = data.sort((a, b) => (a.created < b.created ? 1 : -1));
  return data;
};
exports.mainPage = async (req, res) => {
  const data = await findEntryAndReturn();
  res.render('mpContent', {
    title: 'Enter A Game or movie',
    sentence: 'Enter in your title and description (we will add more data to this as we build our site)',
    data
  });
};

exports.mainPageSubmit = async (req, res) => {
  req.body.browser = req.headers['user-agent'];
  req.body.created = new Date().getTime();
  const store = await new Entry(req.body).save();
  res.redirect(`/success/${req.body.name}`);
};

exports.success = async (req, res) => {
  const data = await findEntryAndReturn();
  res.render('mpContent', {
    title: `Success! You have submitted "${req.params.name}"`,
    sentence: 'if you would like to add another movie or game please make another submission',
    data
  });
};

exports.redirectSuccess = (req, res) => {
  res.redirect('/');
};

exports.entryPage = async (req, res) => {
  const entry = await Entry.findOne({ _id: req.params.id });
  res.render('entryPage', { data: entry });
};

exports.deleteItem = async (req, res) => {
  const data = await Entry.remove({ _id: req.params.id });
  //add flashes later that will tell the user that the item was deleted or gives an error when they do not own the item
  res.redirect('/');
};

/// Also need to create a 404 middle ware
