import React from "react";

import "./Dashboard.css"

function Dashboard() {
  

  return (
    <div className="Dashboard_origin">
      <div className="dashboard_head">
        <h4>welcome</h4>
        <h4>Log out</h4>
      </div>
      <div className="main_dash">
        <div className="dash_sidebar">
          <h3>Dashboard</h3>
          <p>HOME</p>
          <p>Market Place</p>
          <p> Settings</p>
          <p>Upload</p>
          <p>Change password</p>
          <p>LOG OUT</p>
        </div>
        <div className="dash_maincont"></div>

      </div>

    </div>

  );
}

export default Dashboard;