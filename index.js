const express = require('express');

const app = express();

app.use(express.json());

app.use('/string-task', require('./routes/string-routes.js'));
app.use('/array-task', require('./routes/array-routes.js'));
app.use('/js-task', require('./routes/js-routes'));

app.get('/', (req, res) =>{
    res.send('Hello');
});

app.listen(8742, () => {
    console.log('Server listening');
});