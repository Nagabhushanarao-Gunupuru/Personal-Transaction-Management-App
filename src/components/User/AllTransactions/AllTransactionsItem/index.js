import {FiArrowUpCircle} from 'react-icons/fi'
import{FiArrowDownCircle} from 'react-icons/fi'
import{MdOutlineModeEditOutline} from 'react-icons/md'
import{RiDeleteBin6Line} from 'react-icons/ri'
import React from 'react';
import './index.css'

const AllTransactionsItem = (props) => {
  const { allTransactionDetails } = props;
  const { category,type,transactionName,date,amount } = allTransactionDetails;

  return (
    <li className='listContainer' >
        <div className='listItem'>
            <div className='nameContainer'>
            {type === "debit" ? <FiArrowDownCircle style={{ color: '#718EBF', height:'30px', width:'30px' }}/> : <FiArrowUpCircle style={{ color: '#718EBF', height:'30px', width:'30px'}} />}
            <p>{transactionName}</p> 
            </div>

        </div>
        
        <div className='listItem'> 
            <p >{category}</p>
        </div>
        <div className='listItem'> 
            <p className=''>{date}</p>
        </div>
        <div className='listItem'> 
            {type==='debit'?<p style={{color:"#FE5C73"}}>${amount}</p>:<p style={{color:"#16DBAA"}}>${amount}</p>}
        </div>
        <MdOutlineModeEditOutline className='edit'/>
        <RiDeleteBin6Line className='delete'/>
    </li>
  );
};

export default AllTransactionsItem;