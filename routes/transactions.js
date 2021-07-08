const express = require("express");
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require("../controllers/transactions");

// router.get("/", (req, res) => {
//   res.send("<h1>hellow</h1>");
// });

//add and get req route are same -->
router.route("/").get(getTransactions).post(addTransaction);

// delete route -->
router.route("/:id").delete(deleteTransaction);

module.exports = router;
