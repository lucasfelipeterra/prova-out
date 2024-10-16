import e from 'express';
import Maintenance_router from './routes/Maintenance-routes.js';
import Vehicle_router from './routes/Vehicle-routes.js';
import Workshop_router from './routes/Workshop-routes.js';

const app = e();

app.use(e.json());

app.use('/maintenance', Maintenance_router);
app.use('/vehicle', Vehicle_router);
app.use('/workshop', Workshop_router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
