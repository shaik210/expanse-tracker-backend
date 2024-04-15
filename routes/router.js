import express from "express";
import bodyParser from "body-parser";

import { addExpense, getAllCategories } from "../controller/controller.js";

const app = express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = express.Router();

router.post ("/add-expense",addExpense);
router.get ("/get-all-category",getAllCategories);

app.use("/",router);

export default app;