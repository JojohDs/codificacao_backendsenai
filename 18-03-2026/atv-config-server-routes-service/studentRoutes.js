import express from 'express';  
import { studentServices} from '../services/studentServices.js';

const router = express.Router();

router.get("/", (req, res) => {
    res.json(studentServices.getAll())
})


export default router 