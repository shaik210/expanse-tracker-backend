import expense from "../schema/schema.js";

export const addExpense = async (req, res) => {
  const expenses = req.body;
  console.log(expenses);
  const newExpense = new expense(expenses);
  try {
    await newExpense.save();
    res.status(200).json(newExpense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = [
      "Food",
      "Groceries",
      "Miscellaneous",
      "Fixed",
      "Shopping",
    ];

    const data = [];

    await Promise.all(
      categories.map(async (item) => {
        const expenses = await expense.find({ categorie: item });

        const items = expenses.map((exp) => {
          return {
            item: exp.expense,
            price: exp.amount,
          };
        });

        let amt = 0;
        const totoalAmount = items.map((itm) => {
          amt = amt + parseInt(itm.price);
        });

        data.push({
          categorie: item,
          expenses:items,
          amount: amt,
        });
      })
    );

    res.status(200).json(data);
    /**
     * data=[
     * {
     *    categori: "food",
     *    items: [{item:"biryani",price:100},{item:"mandi",price:500}]
     *    total: 600
     * },
     * {
     *    categori: "shopping",
     *    items: [{item:"biryani",price:100},{item:"mandi",price:500}]
     *    total: 600
     * },
     * ]
     */
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
