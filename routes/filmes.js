import e from "express";

const r = e.Router();
import { api_getByAge } from "../controllers/filmes.js";

r.get('/api/', api_getByAge);

export default r;