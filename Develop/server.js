const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')

const PORT = process.env.PORT || 3000

const app = express()

app.use(logger('dev'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/workout-tracker',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	}
)

// Routes
require('./routes/htmlRoutes.js')(app)
// require('./routes/apiRoutes')

app.listen(PORT, () => {
	console.log(`App is running on port ${PORT}!`)
})
