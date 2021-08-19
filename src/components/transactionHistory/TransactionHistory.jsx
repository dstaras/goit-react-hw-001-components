import React from "react";
import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";
import TransactionHistoryItem from "./transactionHistory/TransactionHistoryItem";

const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map((item) => (
        <TransactionHistoryItem {...item} key={item.id} />
      ))}
    </tbody>
  </table>
);
TransactionHistory.propTypes = {
  id: PropTypes.string,
  item: PropTypes.array,
};

export default TransactionHistory;
