import React, {useState} from "react";
import {ImMenu3  } from 'react-icons/im'
import "./Dashboard.css"
import {FaTimes} from 'react-icons/fa'
import Dashsidemenu from "./Dashsidemenu"
import { useNavigate } from "react-router-dom";
import Subhead from "../Subhead/Subhead"
import {useEffect} from "react"


function Dashboard({props}) {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate()

  const handlechange = () => { 
    setToggle(!toggle) 
  }

  useEffect(() => {
    props()
  }, [props])
  

  return (
    <>
    <Subhead />
    <div className="Dashboard_origin">
      <div className="dashboard_head">
        <h3 className="wc">welcome</h3> 
        <div className="dash_icon">
        {toggle ? <FaTimes fontSize={"30px"} color="#0C764C" onClick={handlechange}/>:
         <ImMenu3 fontSize={"30px"} color="#0C764C" onClick={handlechange}/>} </div>
         {toggle ? <Dashsidemenu props={handlechange}/>: null}

        <h4>Log out</h4>
      </div>
      <div className="main_dash">
        <div className="dash_sidebar">
          <h3 >Dashboard</h3>
          {/* <h4 className="dasth3">HOME</h4> */}
          <h4 className="dasth3" onClick={() => navigate('/MarketPlace')}>Market Place</h4>
          <h4 className="dasth3"> Settings</h4>
          <h4 className="dasth3"> About</h4>
          <h4 className="dasth3"> Contact us</h4>
          <h4 className="dasth3" onClick={() => navigate('/Addpage')}>Upload</h4>
          <h4 className="dasth3" onClick={() => navigate('/Password')}>Change password</h4>
          <h4 className="dasth3">LOG OUT</h4>
        </div>
        <div className="dash_maincont">
          <div className="dash_mainCont_inside">

          </div>
        </div>

      </div>

    </div>
    </>

  );
}

export default Dashboard;