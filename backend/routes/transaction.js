const { addIncome, getIncome, deleteIncome } = require("../controllers/income");
const {
  addExpense,
  getExpense,
  deleteExpnese,
} = require("../controllers/expense");

const router = require("express").Router();

router
  .post("/addIncome", addIncome)
  .get("/getIncome", getIncome)
  .delete("/delete/:id", deleteIncome)
  .post("/add-expense", addExpense)
  .get("/get-expenses", getExpense)
  .delete("/delete-expense/:id", deleteExpnese);

module.exports = router;
