import React from "react";

import Profile from "./components/profile/Profile";
import Statistics from "./components/statistics/Statistics.jsx";
import FriendList from "./components/friendList/FriendList";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

const App = () => (
  <>
    <Profile {...user} />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
