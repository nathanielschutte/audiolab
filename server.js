const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

require('dotenv').config({ path: '/config/.env' });

const _debug = process.env.NODE_ENV === 'dev';
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'application')));
app.set('view engine', 'ejs');

app.use('/db', require('./routes/db'));

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});