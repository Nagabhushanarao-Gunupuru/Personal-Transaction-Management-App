import{BrowserRouter,Route,Switch} from 'react-router-dom'
import Sidebar from '../User/sideBar'
import AllTransactions from './AllTransactions'
import DashBoard from './DashBoard'

import './index.css'



const Admin = ()=>(
    <div className='adminContainer'>
       <BrowserRouter>
          <Sidebar/>
          <Switch>
            <Route exact path ="/dashBoard" component={DashBoard}/>
            <Route exact path ="/allTransactions" component={AllTransactions}/> 
          </Switch>
      </BrowserRouter> 
    </div>
    
     
    
)

export default Admin