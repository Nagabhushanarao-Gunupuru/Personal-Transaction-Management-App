import { Component} from "react";

import './index.css'

class Profile extends Component{

    state = {
    name: "",
    email: "",
    city: "",
    country: "",
    dateOfBirth: "",
    presentAddress: "",
    permanentAddress: "",
    postalCode: ""
  };

    componentDidMount(){
        this.getProfile()
    }
    
    getProfile = async()=>{
       const apiUrl = "https://bursting-gelding-24.hasura.app/api/rest/profile"
       const options = {
        headers:{
            'content-type': "application/json",
            
            "x-hasura-admin-secret":"g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
            "x-hasura-role": "user",
            
            "x-hasura-user-id": "1"
        
        },
        method:'GET'
       }
       const response = await fetch(apiUrl,options) 
       const data = await response.json()
       
       const updateData = data.users.map(each=>({
           
           city: each.city,
           country: each.country,
           dateOfBirth:each.date_of_birth,
           email:each.email,
           name:each.name,
           permanentAddress: each.permanent_address,
           postalCode:each.postal_code,
           presentAddress:each.present_address


    }))

    console.log(updateData)
    const {name,email,city,country,dateOfBirth,presentAddress,permanentAddress,postalCode} = updateData
    console.log(updateData)
        
    this.setState({
        name:updateData[0].name,   
        email: updateData[0].email,
        city: updateData[0].city,
        country: updateData[0].country,
        dateOfBirth:updateData[0].dateOfBirth,
        presentAddress: updateData[0].presentAddress,
        permanentAddress:updateData[0].permanentAddress,
        postalCode: updateData[0].postalCode
      })
    
    }

    



    render(){

        
        const {name,email,city,country,dateOfBirth,presentAddress,permanentAddress,postalCode} = this.state
        
        return(
            <div className="dashboardContainer">
            <div className="UserTopContainer">
              <h1 className="topHeading">
                 Profile
              </h1>
              <button className="topButton">+ Add Transaction</button>
            </div>
            <hr className="horizontalLine"/>
            <div className="profileBottomContainer">
                <div className="profileContainer">
                    <img src="https://res.cloudinary.com/dsnbihsqy/image/upload/v1690732243/pexels-christina-morillo-1181690_1_y5i8cd.png" alt="profileImage" className="profileImg"/>
                </div>
                <div className="ProfileContainer">
                    <div className="formContainer">
                        <form className="form">
                            <label htmlFor="yourName" className="label"> 
                                    Your Name
                            </label>
                            <br/>
                                <input
                                id="yourName"
                                className="input"
                                type="text"
                                placeholder={`${name}`}
                                />

                        </form>
                        <form className="form">
                            <label htmlFor="UserName" className="label"> 
                                    User Name
                            </label>
                            <br/>
                            <input id="UserName" className="input" type="text" placeholder={`${name}`}/>
                        </form>
                    </div>
                    <div className="formContainer">
                        <form className="form">
                            <label htmlFor="Email" className="label"> 
                                    Email
                            </label>
                            <br/>
                            <input id="Email" className="input" type="email" placeholder={`${email}`}/>
                        </form>
                        <form className="form">
                            <label htmlFor="Password" className="label"> 
                                    Password
                            </label>
                            <br/>
                            <input id="Password" className="input" type="password" placeholder="**********"/>
                        </form>
                    </div>
                    <div className="formContainer">
                        <form className="form">
                            <label htmlFor="Date" className="label"> 
                                    Date of Birth
                            </label>
                            <br/>
                            <input id="Date" className="input" type="date" placeholder={`${dateOfBirth}`}/>
                        </form>
                        <form className="form">
                            <label htmlFor="presentAddress" className="label"> 
                                    Present Address
                            </label>
                            <br/>
                            <input id="presentAddress" className="input" type="text" placeholder={`${presentAddress}`}/>
                        </form>
                    </div>
                    <div className="formContainer">
                        <form className="form">
                            <label htmlFor="permanentAddress" className="label"> 
                                    Permanent Address
                            </label>
                            <br/>
                            <input id="permanentAddress" className="input" type="text" placeholder={`${permanentAddress}`}/>
                        </form>
                        <form className="form">
                            <label htmlFor="city" className="label"> 
                                    City
                            </label>
                            <br/>
                            <input id="city" className="input" type="text" placeholder={`${city}`}/>
                        </form>
                    </div>
                    <div className="formContainer">
                        <form className="form">
                            <label htmlFor="postalCode" className="label"> 
                                    Postal Code
                            </label>
                            <br/>
                            <input id="postalCode" className="input" type="text" placeholder={`${postalCode}`}/>
                        </form>
                        <form className="form">
                            <label htmlFor="Country" className="label"> 
                                    Country
                            </label>
                            <br/>
                            <input id="Country" className="input" type="text" placeholder={`${country}`}/>
                        </form>
                    </div>
                </div>
            </div>
         </div>
        )
    }
}

export default Profile 