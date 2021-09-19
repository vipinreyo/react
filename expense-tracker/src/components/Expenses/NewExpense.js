import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (newExpenseData) => {
    const expenseData = { ...newExpenseData, id: Math.random().toString() };
    props.onAddNewExpense(expenseData);
    setIsEditing(false);
  };

  const buttonClickHandler = () => {
    setIsEditing(true);
  };

  const formCancelHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={buttonClickHandler}>Add new Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={formCancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
