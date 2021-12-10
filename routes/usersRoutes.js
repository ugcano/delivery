const UsersController = require('../controllers/usersController');
const passport = require('passport');

module.exports = (app, upload) => {

    // TRAER DATOS
    app.get('/api/users/getAll', UsersController.getAll);
    app.get('/api/users/findById/:id', passport.authenticate('jwt', {session: false}), UsersController.findById);
    app.get('/api/users/findDeliveryMen', passport.authenticate('jwt', {session: false}), UsersController.findDeliveryMen);
    app.get('/api/users/getAdminsNotificationTokens', passport.authenticate('jwt', {session: false}), UsersController.getAdminsNotificationTokens);

    // GUARDAR DATOS
    app.post('/api/users/create', upload.array('image', 1), UsersController.registerWithImage);
    app.post('/api/users/create_restaurant', upload.array('image', 1), UsersController.register_restaurant);
    app.post('/api/users/create_delivery', upload.array('image', 1), UsersController.register_delivery);

    app.post('/api/users/login', UsersController.login);
    app.post('/api/users/logout', UsersController.logout);

    // ACTUALIZAR DATOS
    app.put('/api/users/update', passport.authenticate('jwt', {session: false}), upload.array('image', 1), UsersController.update)
    app.put('/api/users/updateNotificationToken', UsersController.updateNotificationToken)
}