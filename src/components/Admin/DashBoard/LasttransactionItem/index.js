import {FiArrowUpCircle} from 'react-icons/fi'
import{FiArrowDownCircle} from 'react-icons/fi'
import{MdOutlineModeEditOutline} from 'react-icons/md'
import{RiDeleteBin6Line} from 'react-icons/ri'
import React from 'react';
import './index.css'

const LastTransactionListItem = (props) => {
  const { transactionDetials } = props;
  const { category,transactionName,type,amount } = transactionDetials;

  return (
    <li className='listContainer' >
        <div className='listItem'>
            <div className='nameContainer'>
            {type === "debit" ? <FiArrowDownCircle style={{ color: '#FE5C73', height:'30px', width:'30px' }}/> : <FiArrowUpCircle style={{ color: '#16DBAA', height:'30px', width:'30px'}} />}
            <p>{transactionName}</p> 
            </div>

        </div>
        
        <div className='listItem'> 
            <p >{category}</p>
        </div>
        <div className='listItem'> 
        {type==='debit'?<p style={{color:"#FE5C73"}}>{type}</p>:<p style={{color:"#16DBAA"}}>{type}</p>}
        </div>
        <div className='listItem'> 
            {type==='debit'?<p style={{color:"#FE5C73"}}>${amount}</p>:<p style={{color:"#16DBAA"}}>${amount}</p>}
        </div>
        <MdOutlineModeEditOutline className='edit'/>
        <RiDeleteBin6Line className='delete'/>
    </li>
  );
};



export default LastTransactionListItem