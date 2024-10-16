import db from '../config/db.js';

const workshopSchema = new db.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: Object,
        minLength: 8,
        maxLength: 8,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    specialties: {   
        type: String,
        enum: ['motor', 'freio', 'suspensao', "eletrica" ],
    },
});

const workshop = db.model('workshop', workshopSchema);

export default workshop;
