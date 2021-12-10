const RatingController = require('../controllers/ratingController');
const passport = require('passport');

module.exports = (app) => {
    
    //TRAER DATOS
    app.get('/api/rating/getAll', RatingController.getAll);
    
    // GUARDAR DATOS
    app.post('/api/rating/create', RatingController.create);
    //    app.post('/api/rating/create', passport.authenticate('jwt', {session: false}), RatingController.create);

    // ACTUALIZAR DATOS
    app.put('/api/rating/update', RatingController.update);
    //    app.post('/api/rating/update', passport.authenticate('jwt', {session: false}), RatingController.update);

}