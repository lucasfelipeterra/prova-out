import db from "../config/db.js";

const maintenanceSchema = new db.Schema({
    workshop_id: {
        type: db.Schema.Types.ObjectId,
        ref: "workshop",
        required: true,
    },
    vehicle_id: {
        type: db.Schema.Types.ObjectId,
        ref: "vehicle",
        required: true,
    },
        services: {
        type: String,
        required: true,
        },
    date: {
        type: Date,
        required: true,
    },
    totalCost: {
        type: Number,
        required: true,
    },
});

const maintenance = db.model("maintenance", maintenanceSchema);

export default maintenance;
