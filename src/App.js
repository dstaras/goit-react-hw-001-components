import React from "react";

import Profile from "./components/profile/Profile";
import Statistics from "./components/statistics/Statistics.jsx";
import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";

const App = () => (
  <>
    <Profile {...user} />
    <Statistics title="Upload stats" stats={statisticalData} />
  </>
);

export default App;
