import React from "react";
import Dashtop from "./dash-top";
import Trello from "./trello";

const Dashboard = () => {
  return (
    <div className="w-full py-4 px-2 flex flex-col gap-4">
      <Dashtop />
      <Trello />
    </div>
  );
};

export default Dashboard;
