import express from 'express';
import catController from "../controllers/cat.js";

const { getCats, getCat, postCat, updateCat, deleteCat } = catController;

const router = express.Router()

router.route('/').get(getCats).post(postCat)
router.route('/:id').get(getCat).put(updateCat).delete(deleteCat)

export default router;