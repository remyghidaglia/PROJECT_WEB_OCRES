const router = require('express').Router();
let Exercice = require('../models/exercice.model');

router.route('/').get((req, res) => {
    Exercice.find()
        .then(exercices => res.json(exercices))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const calories = Number(req.body.calories);
    const date = Date(req.body.date);

    const newExercice = new Exercice({
        username,
        description,
        duration,
        calories,
        date,
    });

    newExercice.save()
        .then(() => res.json('Exercice ajouté !'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Exercice.findById(req.params.id)
        .then(exercices => res.json(exercices))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Exercice.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercice supprimé.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Exercice.findById(req.params.id)
        .then(exercices => {
            exercices.username = req.body.username;
            exercices.description = req.body.description;
            exercices.duration = Number(req.body.duration);
            exercices.calories = Number(req.body.calories);
            exercices.date = Date.parse(req.body.date);

            exercices.save()
                .then(() => res.json('Exercice mis à jour !'))
                .catch(err => res.status(400).json('Error: ' + err));

        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;