import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <div className="section">
      <GlobalProvider>
        <Header />
        <div className="container">
          <div className="left">
            <Balance />
            <AddTransaction />
          </div>
          <div className="right">
            <IncomeExpenses />
            <TransactionList />
          </div>
        </div>
      </GlobalProvider>

      <style jsx="true">{`
        .section {
          width: 100%;
          height: auto;
          padding: 4rem;
        }
        .container {
          margin: 30px auto;
          width: 100%;
          justify-content: center;
          display: flex;
        }
        .left,
        .right {
          width: 400px;
        }
        .right {
          margin-left: 35px;
        }
      `}</style>
    </div>
  );
}

export default App;
