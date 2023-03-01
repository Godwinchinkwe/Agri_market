import React, {useState} from "react";
import {ImMenu3  } from 'react-icons/im'
import "./Dashboard.css"
import {FaTimes} from 'react-icons/fa'
import Dashsidemenu from "./Dashsidemenu"
import { useNavigate } from "react-router-dom";
import Subhead from "../Subhead/Subhead"
import {useEffect} from "react"
import Dashfooter from "./Dashfooter";
import {FaUpload} from 'react-icons/fa';
import Time from "../Time/Time";
import {CgProfile} from 'react-icons/cg'
import { BsCart4 } from "react-icons/bs";
import { SiSalesforce } from "react-icons/si";
import { IoMdSettings } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi";
import { MdPassword } from "react-icons/md";
import pic from "../DashBoard/godwin.jpg"


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

        <h4> </h4>
      </div>
      <div className="main_dash">
        <div className="dash_sidebar">
         <div className="dish_dish_name">  <h3 >Dashboard</h3> </div>
          
         <div className="dasth3" onClick={() => navigate('/Addpage')}> <FaUpload font-size="25px"/> <h4 > Upload </h4> </div>
         <div className="dasth3"> <IoMdSettings font-size="25px"/> <h4 > Settings</h4> </div>
         <div className="dasth3"> <IoMdSettings font-size="25px"/> <h4 > About</h4> </div>
         <div className="dasth3"> <IoMdSettings font-size="25px"/> <h4 > Contact us</h4> </div>          
         <div className="dasth3" onClick={() => navigate('/Resetpassword/1')}>  < MdPassword font-size="25px"/>  <h4 >Security</h4> </div> 
         <div  className="dasth3" onClick={() =>{}} > <BiLogOutCircle font-size="25px"/> <h4>Logout</h4> </div>

          <div className="timeshow">
            <Time />
          </div>

        </div>

        <div className="dash_maincont">
         <div className="dash_elements">
            <div className="ddt"> <h4>Customers</h4>
            <CgProfile font-size="25px"/> <h4>9,324</h4> </div>
            <div className="ddt"><h4>Average sales</h4>
            <  SiSalesforce font-size="25px"/> <h4>1,924</h4></div>
            <div className="ddt"> <h4>Average order</h4>
            < BsCart4 font-size="25px"/> <h4>2,824</h4></div>
            <div className="ddt"> <h4>Daily visitors</h4>
            <CgProfile font-size="25px"/> <h4>3,728</h4></div>
           </div>
          <div className="dash_mainCont_inside">

            <div className="faupload"> <FaUpload onClick={() => navigate('/Addpage')} className="dashupload"/> <br/> upload </div>
            <div className="today_order">
              <h4>Today's Order</h4>
              <div className="order_content">
                <div className="order_name">
                  <p>Esther Howard</p><br/>
                  <p>Esther Howard</p><br/>
                  <p>Esther Howard</p><br/>
                  <p>Esther Howard</p><br/>
                  <p>Esther Howard</p>
                </div>

                <div className="order_condo">
                <p>Poultry</p><br/>
                  <p>Poultry</p><br/>
                  <p>Poultry</p><br/>
                  <p>Poultry</p><br/>
                  <p>Poultry</p><br/>
                </div>

              </div>

            </div>
            <div></div>
          </div>

          <div className="todays_order">
          <h4>Last top Orders</h4>
          <div className="todays_order2">
            <p>Name</p>
            <p>Date</p>
            <p>Amount</p>
            <p>Received</p>
          </div>
          <div className="todays_order2update">
            <div className="update1">
              <div className="update1name">
                <img className="godwin" src={pic} alt=" " />
                <p>Godwin Chinkwe</p>
              </div>
              <div className="update2name">
              <img className="godwin" src={pic} alt=" " />
              <p>Godwin Chinkwe</p>
              </div>
            </div>
            <div className="update2">
            <div className="update1date">
               <p>01/03/2023</p>
              </div>
              <div className="update2date">
              <p>01/03/2023</p>
              </div>
            </div>
            <div className="update3">
            <div className="update1amt">
               <p>₦25,000</p>
              </div>
              <div className="update2amt">
              <p>₦30,000</p>
              </div>
            </div>
            <div className="update4">
            <div className="update1receive">
               <button className="cmpt1">Completed</button>
              </div>
              <div className="update2receive">
              <button className="cmpt1">Completed</button>
              </div>
            </div>
           
          </div>

        </div>

        </div>

        

      </div>

    </div>
    <Dashfooter />
    </>

  );
}

export default Dashboard;