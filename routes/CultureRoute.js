import express from "express";
import {
    getBudaya,
    getBudayaById,
    createBudaya,
    updateBudaya,
    deleteBudaya,
    
} from '../controller/Culture.js';

const router = express.Router();

router.get('/budaya', getBudaya);
router.get('/budaya/:id', getBudayaById);
router.post('/budaya', createBudaya);
router.patch('/budaya/:id', updateBudaya);
router.delete('/budaya/:id', deleteBudaya);

export default router;