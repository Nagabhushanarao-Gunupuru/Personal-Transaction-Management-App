import { Component } from "react";
import {Link} from 'react-router-dom'
import{BiSolidHome} from 'react-icons/bi'
import{LuLogOut} from 'react-icons/lu'


import './index.css'


class  Sidebar extends Component{
    state = {isClicked:false} 

    render(){
        return(
            <div className="sidebarContainer">
                <div>
                    <div className="logoContainer">
                        <img src="https://res.cloudinary.com/dsnbihsqy/image/upload/v1690635249/Group_lhtryv.jpg" alt="dollar" className="logoImage"/>
                        <h1 className="logoHeading">Money <span className="logoSpan">Matters</span></h1>
                    </div>
                    <div className="linkContainer">
                    <Link to = "/dashBoard">
                    <div className="iconContainer">
                    <BiSolidHome className="icon"/>
                    
                    <h1 className="iconHeading">Dashboard</h1>
                        
                    </div>
                    </Link>
                    <Link to="/allTransactions">
                    <div className="iconContainer">
                        <img src="https://res.cloudinary.com/dsnbihsqy/image/upload/v1690688368/17-transfer_snnk6s.png" alt="all trasactions" className="icon"/>
                        <h1 className="iconHeading">All Transactions</h1>
                    </div>
                    </Link>
                    <Link to="/profile">
                    <div className="iconContainer">
                        <img src="https://res.cloudinary.com/dsnbihsqy/image/upload/v1690688368/user_3_1_athqfj.png" alt="profile" className="icon"/>
                        <h1 className="iconHeading">Profile</h1> 
                    </div>
                    </Link>
                    </div>
                </div>
                <div>
                    <div className="footerContainer">
                        <img src="https://res.cloudinary.com/dsnbihsqy/image/upload/v1690689442/Avatar_d2k71s.png" alt="avatar" className="footerImage"/>
                        <div className="footerContent">
                            <h1 className="footerHeading">
                                Rhye
                            </h1>
                            <p className="footerPara"> 
                            olivia@untitledui.com
                            </p>
                        </div>
                        <LuLogOut className="footerIcon"/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Sidebar