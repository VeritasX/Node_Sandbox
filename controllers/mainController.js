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

//Give the option to delete the selected entry in its Description Page
//I will finish this later as i need to create the poge that allows you to select specific stores
exports.deleteItem = async (req, res) => {
  const data = await Entry.find(req.params.id);
};

/// Also need to create a 404 middle ware
