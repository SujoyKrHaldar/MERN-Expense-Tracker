import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <form
        style={{
          background: "#e9e9e9",
          padding: "40px 27px",
          marginTop: "35px",
        }}
        onSubmit={onSubmit}
      >
        <h3 style={{ margin: "0", marginBottom: "14px" }}>
          {" "}
          Add new Transaction
        </h3>
        <div className="form-control">
          <label htmlFor="text">Add Item</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required={true}
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required={true}
          />
          <span style={{ color: "#afafaf", fontSize: "12px" }}>
            (negative - expense, positive - income)
          </span>
        </div>

        <button className="btn">
          <h4>Add transaction</h4>
        </button>

        <style jsx="true">
          {`
            .error_msg p {
              color: #ca0808;
              font-family: "Nunito Sans", sans-serif;
              font-size: 0.9rem;
            }
          `}
        </style>
      </form>
    </>
  );
};
