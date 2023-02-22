const IncomeSchema = require("../models/incomeModel");

exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const income = IncomeSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    if (!title || !category || !description || !date) {
      return res.status(400).json({
        message: "All Fields are required",
      });
    }
    if (amount <= 0 || !amount === "number") {
      return res.status(400).json({
        message: "Amount must be a positive Number",
      });
    }
    await income.save();
    res.status(200).json({
      message: "Income Added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

exports.getIncome = async (req, res) => {
  console.log("Inside getIncome");
  try {
    const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  IncomeSchema.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ message: "Deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error" });
    });
};
