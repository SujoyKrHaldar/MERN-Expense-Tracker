import React, { useContext, useEffect } from "react";
import { Transaction } from "./Transaction";

import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ marginTop: "35px" }}>
      <h3
        style={{
          background: "#e9e9e9",
          padding: "40px 27px",
          margin: 0,
        }}
      >
        History
      </h3>
      {transactions?.length === 0 && (
        <div className="emptyList">
          <p>
            <span style={{ color: "#afafaf", fontSize: "12px" }}>
              You have no records.
            </span>
          </p>
        </div>
      )}

      {transactions?.length > 0 && (
        <ul className="list">
          {transactions?.map((transaction) => (
            <Transaction key={transaction._id} transaction={transaction} />
          ))}
        </ul>
      )}

      <style jsx="true">
        {`
          .emptyList {
            width: 100%;
            height: 100%;
            background: white;
            border: 1px solid gainsboro;
            padding: 10px 27px;
            margin: 0;
          }
        `}
      </style>
    </div>
  );
};
