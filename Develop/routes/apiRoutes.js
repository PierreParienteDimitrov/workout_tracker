const db = require('../models')

module.exports = function (app) {
	app.get('/api/workouts', (req, res) => {
		db.Workout.find({})
			.then((dbWorkout) => {
				res.json(dbWorkout)
			})
			.catch((err) => {
				res.status(400).json(err)
			})
	})

	app.post('/api/workouts', ({ body }, res) => {
		db.Workout.create(body)
			.then((dbWorkout) => {
				res.json(dbWorkout)
			})
			.catch((err) => {
				res.status(400).json(err)
			})
	})

	app.get('/api/workouts/range', (req, res) => {
		db.Workout.find({})
			.then((dbWorkout) => {
				res.json(dbWorkout)
			})
			.catch((err) => {
				res.status(400).json(err)
			})
	})

	app.put('/api/workouts/:id', ({ body, params }, res) => {
		db.Workout.findByIdAndUpdate(
			params.id,
			{
				$push: {
					exercises: body,
				},
			},
			{
				new: true,
				runValidators: true,
			}
		)
			.then((dbWorkout) => {
				res.json(dbWorkout)
			})
			.catch((err) => {
				res.json(err)
			})
	})
}
