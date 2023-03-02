import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layout";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";

export default function Income() {
  const { addIncome, getIncomes, incomes } = useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <div className="income-content">
          <div className="form-container">
            <Form></Form>
          </div>
          <div className="incomes-hello">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description } =
                income;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  category={category}
                  indicatorColor="var(--color-green)"
                ></IncomeItem>
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
}

const IncomeStyled = styled.div``;
