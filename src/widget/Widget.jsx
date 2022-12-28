import './widget.scss';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';



const Widget = () => {

// let data;

// switch(type){
//     case'user':
//     data={
//         title:'USER',
//         isMoney:false,
//         link:'view all users',
//         icon: <PersonOutlineIcon className='icon' 
//         style={{color:'crimson', backgroundColor: 'rgba(255,0,0,0.2)'}}
//         />
//     }
//     break;
//     case'order':
//     data={
//         title:'ORDERS',
//         isMoney:false,
//         link:'view all orders',
//         icon: <ShoppingCartOutlinedIcon className='icon' 
//         style={{color:'green', backgroundColor: 'rgba(0,128,0,0.2)'}}
//         />
//     }
//     break;
//     case'earning':
//     data={
//         title:'EARNING',
//         isMoney:true,
//         link:'view all earning',
//         icon: <AccountBalanceWalletOutlinedIcon className='icon' 
//         style={{color:'crimson', backgroundColor: 'rgba(255,0,0,0.2)'}}
//         />
//     }
//     break;
//     case'balance':
//     data={
//         title:'BALANCE',
//         isMoney:true,
//         link:'view all balance',
//         icon: <MonetizationOnOutlinedIcon className='icon' 
//         style={{color:'purple', backgroundColor: 'rgba(128,0,128,0.2)'}}
//         />
//     }
//     break;
// }

// //temporary
// const amount=100;
// const diff =20;

const dataLog=[
    {
        title:'USERS',
        amount:'100',
        link:"view all users",
        difference:'20',
        icon: <PersonOutlineIcon className='icon' 
        style={{color:'crimson', backgroundColor: 'rgba(255,0,0,0.2)'}}
        />
    },
    {
        title:'ORDERS',
        amount:'100',
        link:"view all users",
        difference:'20',
        icon: <ShoppingCartOutlinedIcon className='icon' 
        style={{color:'green', backgroundColor: 'rgba(0,128,0,0.2)'}}
        />
    },
    {
        title:'EARNING',
        amount:'100',
        link:"view all earning",
        difference:'20',
        icon: <AccountBalanceWalletOutlinedIcon className='icon' 
        style={{color:'crimson', backgroundColor: 'rgba(255,0,0,0.2)'}}
        />
    },
    {
        title:'BALANCE',
        amount:'100',
        link:"view all balance",
        difference:'20',
        icon: <MonetizationOnOutlinedIcon className='icon' 
        style={{color:'purple', backgroundColor: 'rgba(128,0,128,0.2)'}}
        />
    },
]

  return (<>
  {
dataLog.map((log, index)=> {
    return(
        <div className='widget' key={index}>
            <div className="left">
                <span className="title">{log?.title}</span>
                <span className="counter">{log?.amount}</span>
                <span className="link">{log?.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ArrowDropUpOutlinedIcon />
                    {log?.difference}%
                </div>
                {log?.icon}
            </div>
        </div>
    )
})
  }
  </>
   
  )
}

export default Widget;