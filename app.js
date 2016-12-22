const app = require('./config/express.js')();
require('./config/database')('uri');

const porta = process.env.PORT || 3000;

app.listen(porta, () => console.log('Server running on port ' + porta));
