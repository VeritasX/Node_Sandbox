const app = require('./app');

//requiring the dot env environment
require('dotenv').config({ path: 'variables.env' });
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express is running on port ${server.address().port}`);
});
