import{BrowserRouter,Route,Switch} from 'react-router-dom'
import Sidebar from './sideBar'
 
import DashBoard from './DashBoard'
import Profile from './Profile'
import './index.css'
import AllTransactions from './AllTransactions'




const User = ()=>(

   <div className='userContainer'>
    
     <BrowserRouter>
        <Sidebar/>
        <Switch>
          <Route exact path ="/dashBoard" component={DashBoard}/>
          <Route exact path ="/allTransactions" component={AllTransactions}/>
          <Route exact path ="/profile" component={Profile}/>
        </Switch>
    </BrowserRouter>
   </div>    
)
    
    

export default User