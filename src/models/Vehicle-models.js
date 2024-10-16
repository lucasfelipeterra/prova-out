import db from '../config/db.js';

const vehicleSchema = new db.Schema({
    plate: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },  
    owner: {
        type: String,
        required: true,
    },

});

const vehicle = db.model('vehicle', vehicleSchema);

export default vehicle;

