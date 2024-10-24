const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const bookRoutes = require('./routes/books');
const userRoutes = require('./routes/user');
const fruitRoutes = require('./routes/books');
const demoRouter = require('./routes/demo')

app.use('/api/books', bookRoutes);
app.use('/api/user', userRoutes);
app.use('/api/fruit', fruitRoutes);
app.use('/demo', demoRouter)
app.use('/public', express.static(__dirname + '/public'))

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});