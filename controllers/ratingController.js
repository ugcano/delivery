const Rating = require('../models/rating');

module.exports = {

    async getAll(req, res, next) {
        try {
            const data = await Rating.getAll();    
            console.log(`Usuarios: ${data}`);
            // return res.status(201).json(data);
            return res.status(201).json({
                success: true,
                message: 'Datos obtenidos con exito',
                data: data
            });
        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Error al obtener los usuarios'
            });
        }
    },

    async create(req, res, next){
        try{
            const rating = req.body;
            const data = await Rating.create(rating);
            return res.status(201).json({
                success: true,
                message: 'Calificacion creada correctamente',
                data: data.id
            });
        } 
        catch (error){
            console.log(`Error ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Hubo un error al crear la calificacion',
                error: error
            });
        }
    },    
    
    async update(req, res, next) {
        try {
            
            const body = req.body;
            console.log('Datos enviados del usuario: ', body);

            await Rating.update(body.id_user, body.rating);

            return res.status(201).json({
                success: true,
                message: 'La calificacion fue actualizada correctamente'
            });

        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Hubo un error con la actualizacion de la calificacion',
                error: error
            });
        }
    },

}