import { Router } from 'express';
import { store, index, show, update, destroy } from '../controllers/Workshop-controllers.js';
import via_cep from '../middleware/via_cep.js';

const router = Router();



router.post("/",via_cep, store);

router.get("/", index);

router.get("/:id", show);

router.put("/:id",via_cep, update);

router.delete("/:id", destroy);

export default router;