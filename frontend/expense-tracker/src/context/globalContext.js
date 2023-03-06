import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const GlobalContext = createContext();

const BASE_URL = "http://localhost:5000/api/v1/";

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expense, setExpense] = useState([]);
  const [error, setError] = useState(null);

  // Calculate Income
  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}addIncome`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getIncomes();
  };

  const getIncomes = async () => {
    const response = await axios
      .get(`${BASE_URL}getIncome`)
      .catch((err) => setError(err.response.data.message));
    setIncomes(response.data);
  };

  const deleteIncome = async (id) => {
    const res = await axios.delete(`${BASE_URL}/delete/${id}`);
    getIncomes();
  };

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome += income.amount;
    });
    return totalIncome;
  };

  // Calculate Expense

  const addExpenses = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-expense`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getExpenses();
  };

  const getExpenses = async () => {
    const response = await axios
      .get(`${BASE_URL}get-expenses`)
      .catch((err) => setError(err.response.data.message));
    setExpense(response.data);
  };

  const deleteExpenses = async (id) => {
    const res = await axios.delete(`${BASE_URL}/delete-expense/${id}`);
    getExpenses();
  };

  const totalExpenses = () => {
    let totalExpense = 0;
    expense.forEach((expense) => {
      totalExpense += expense.amount;
    });
    return totalExpense;
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        totalIncome,
        addExpenses,
        getExpenses,
        deleteExpenses,
        totalExpenses,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
