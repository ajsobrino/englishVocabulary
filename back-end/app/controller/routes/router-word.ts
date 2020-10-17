import { Router } from "express";

const wordController = require("../controller-word");

const bodyParser = require("body-parser");

const router = Router();

router.use(bodyParser.json());
router.get('/word', wordController.searchByCriteria);
router.delete('/word/:id', wordController.deleteWord)
router.patch('/word/:id',wordController.update);

export default router;
