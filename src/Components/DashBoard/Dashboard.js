import React from "react";
import "./Dashboard.css"

function Dashboard() {
    return(
        <div className="dashboard_main">
        <main className="Main_main">
            <div className="dashmenu">
                <h4>Dashboard</h4>
                <div className="dashroll">
                    <p>Category</p><br/>
                    <p>Profile</p><br/>
                    <p>Settings</p><br/><br/>
                    <p>Log Out</p>
                </div>

            </div>
            <div className="dashcontent">

            </div>

        </main>

        </div>
    )
}

export default Dashboard
