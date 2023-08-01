import { Component } from "react";
import LastTransactionListItem from "./LasttransactionItem";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    ResponsiveContainer,
  } from "recharts"
import './index.css'


class DashBoard extends Component{

    state = {debit:'',credit:'',lastThreeTransactions:[],lastSevenCreditSum:'',lastSevenDebitSum:'',lastSevenTransactions:[]}

    componentDidMount(){
        this.getTotalDeebitAndCreditData()
        this.getLastThreeTransactions()
        this.getLastSevenTransactions()

    }

    getTotalDeebitAndCreditData = async()=>{
        const apiUrl = "https://bursting-gelding-24.hasura.app/api/rest/transaction-totals-admin"
        const options = {
            headers:{
                'content-type': "application/json",
                
                "x-hasura-admin-secret":"g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
                "x-hasura-role": "admin",
                
               
            
            },
            method:'GET'
        }

        const response = await fetch(apiUrl,options)
        const data = await response.json()
       

        const debitSum = data.transaction_totals_admin.find(item => item.type === "debit")?.sum || 0;
        const creditSum = data.transaction_totals_admin.find(item => item.type === "credit")?.sum || 0;

        this.setState({
        debit: debitSum,
        credit: creditSum
        });

    }

    getLastThreeTransactions = async()=>{
        
        const apiUrl = "https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=3&&offset=2"
        const options = {
            headers:{
                'content-type': "application/json",
                
                "x-hasura-admin-secret":"g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
                "x-hasura-role": "admin"
                
                
            
            },
            method:'GET'
        }

        const response = await fetch(apiUrl,options)
        const data = await response.json()
        console.log(data)
        
        const updatedData = data.transactions.map(each=>({
            id:each.id,
            amount:each.amount,
            category:each.category,
            transactionName:each.transaction_name,
            type:each.type,
            userId:each.user_id

        }))

        this.setState({ lastThreeTransactions: updatedData });
        

        

    }

    getLastSevenTransactions = async()=>{
        const apiUrl = " https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-last-7-days-admin"
        const options = {
            headers:{
                'content-type': "application/json",
                
                "x-hasura-admin-secret":"g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
                "x-hasura-role": "admin"
                
               
            
            },
            method:'GET'
        }

        const response = await fetch(apiUrl,options)
        const data = await response.json()

        console.log(data) 
        

        const lastSevenDebitSum = data.last_7_days_transactions_totals_admin.filter(item => item.type === "debit").reduce((acc, item) => acc + item.sum, 0);
        const lastSevenCreditSum = data.last_7_days_transactions_totals_admin.filter(item => item.type === "credit").reduce((acc, item) => acc + item.sum, 0);

        this.setState({
        lastSevenDebitSum: lastSevenDebitSum,
        lastSevenCreditSum: lastSevenCreditSum,
        lastSevenTransactions:data.last_7_days_transactions_totals_admin
        });

    }
    
    DataFormatter = (sum) => {
        
        return sum.toString()
      }
    

    render(){
        const {debit,credit,lastThreeTransactions,lastSevenCreditSum,lastSevenDebitSum,lastSevenTransactions} = this.state
        console.log(lastSevenTransactions)
        return(
            <div className="dashboardContainer">
               <div className="UserTopContainer">
                 <h1 className="topHeading">
                    Accounts
                 </h1>
                 <button className="topButton">+ Add Transaction</button>
               </div>
               <hr className="horizontalLine"/>
               <div className="bottomContainer">
                    <div className="creditAndDebitContainer">
                        <div className="creditContainer">
                            <div className="creditCard">
                                <h1 className="creditHeading">
                                    ${credit}
                                </h1> 
                                <p className="creditPara">credit</p>
                            </div>
                            <img src="https://res.cloudinary.com/dsnbihsqy/image/upload/v1690697506/Group_1_kwifns.png" alt="credit" className="bottomImage1"/>
                        </div>
                        <div className="creditContainer">
                            <div className="creditCard">
                                <h1 className="debitHeading">
                                    ${debit}
                                </h1> 
                                <p className="debitPara">Debit</p>
                            </div>
                            <img src="https://res.cloudinary.com/dsnbihsqy/image/upload/v1690698570/Group_2_e42x8p.png" alt="debit" className="bottomImage2"/>
                        </div>
                    </div>
                    <div className="lastTransactions">
                        <h1 className="lastTrasactionHeading">Last Transactions</h1>
                        <ul>{lastThreeTransactions.map((each, index) => (
                                <LastTransactionListItem key={index} transactionDetials={each} />
                            ))}
                            
                        </ul>
                    </div>
                    <div className="lastTransactions">
                        <h1 className="lastTrasactionHeading">Debit & Credit Overview</h1>
                        <div className="debitAndCreditCard">
                            <p style={{fontSize:"16px"}}> ${lastSevenDebitSum} <span style={{color: "#718EBF"}}>Debited &</span> ${lastSevenCreditSum} <span style={{color: "#718EBF"}}>Credited in this Week</span></p>
                            <img src="https://res.cloudinary.com/dsnbihsqy/image/upload/v1690700549/Group_141_mfvmj5.png" alt="debitandcredit"/>
                        </div>
                        <div>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart
                            data={lastSevenTransactions}
                            margin={{
                                top: 5,
                            }}
                            >
                            <XAxis
                                dataKey="newDate"
                                tick={{
                                stroke: "gray",
                                strokeWidth: 1,
                                }}
                            />
                            <YAxis
                                tickFormatter={this.DataFormatter}
                                tick={{
                                stroke: "gray",
                                strokeWidth: 0,
                                }}
                            />
                            
                            
                            <Bar dataKey="sum" fill="#FE5C73" />
                            </BarChart>
                        </ResponsiveContainer>
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}

export default DashBoard