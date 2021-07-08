require("colors");

//connect schema -->
const Transaction = require("../models/Transaction");

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public

exports.getTransactions = async (req, res, next) => {
  // res.send("<h1>GET transaction</h1>");
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Add transaction
// @route   POST /api/v1/transactions
// @access  Public

exports.addTransaction = async (req, res, next) => {
  //res.send("<h1>ADD/POST transaction</h1>");
  try {
    const { text, amount } = req.body;

    const transaction = await Transaction.create(req.body);

    // show succ msg in console -->
    console.log("Data added to database successfully".bgWhite.black.bold);
    console.log(`data: ${transaction}`);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    // if client forget to fill the required fields ---> (client side error)
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      res.status(400).json({
        success: false,
        error: messages,
      });

      // show error msg in console -->
      console.log(messages[0].red.bold);
    }

    // server side error --->
    else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public

exports.deleteTransaction = async (req, res, next) => {
  //res.send("<h1>DELETE transaction</h1>");

  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      // show error msg in console -->
      console.log("No transaction found".red.bold);

      return res.status(404).json({
        success: false,
        error: "No transaction found",
      });
    }
    await transaction.remove();

    // show succ msg in console -->
    console.log("Data deleted successfully".bgWhite.black.bold);
    console.log(`data: ${transaction}`);

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
