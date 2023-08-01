import { Component } from 'react'
import AllTransactionsItem from '../AllTransactionItem'
import './index.css'


class AllTransactions extends Component{

    state = {allTransactionsData:[]}

    componentDidMount(){
        this.getAllTransactions()
    }

    getAllTransactions = async()=>{
        const apiUrl = "https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=20&&offset=1" 
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
        const updateData = data.transactions.map(each=>({
            amount: each.amount,
            category: each.category,
            date: each.date,
            transactionName: each.transaction_name,
            type: each.type,
            userId: each.user_id,

        }))
       

        this.setState({allTransactionsData:updateData})
        
    }


    render(){
        const {allTransactionsData} = this.state
        

        return(
            <div className='allTransactionsContainer'>
            <div className='topContainer'>
                    <div className='transactionContaier'>
                    <h1 className='topHeading'>Transactions</h1>
                    
                    </div>
                    
                    <div className='transactionsCard'>
                        
                        <h1 className='transactions'>All Transactions</h1>
                        <h1 className='transactions'>Debit</h1>
                        <h1 className='transactions'>Credit</h1>
                    </div>
                    
            </div>
            
            <div className='bottomContainer'>
                <ul className='listItemsContainer'>

                   <div className='listContainerEl' >
                        <h1 className='transactionListHeading'>Transaction Name</h1>
                        <h1 className='transactionListHeading'>Category</h1>
                        <h1 className='transactionListHeading'>Date</h1>
                        <h1 className='transactionListHeading'>Amount</h1>
                    </div>
                    
                {allTransactionsData.map((each, index) => (
            <AllTransactionsItem key={index} allTransactionDetails={each} />
          ))}
                    
                </ul>
            </div>
            </div>
        )
    }
}

export default AllTransactions

