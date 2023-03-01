import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const GlobalContext = createContext();

const BASE_URL = "http://localhost:5000/api/v1/";

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expense, setExpense] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}addIncome`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  const getIncomes = async () => {
    const response = await axios
      .get(`${BASE_URL}getIncome`)
      .catch((err) => setError(err.response.data.message));
    setIncomes(response.data);
    console.log(response.data);
  };

  return (
    <GlobalContext.Provider value={{ addIncome, getIncomes, incomes }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
