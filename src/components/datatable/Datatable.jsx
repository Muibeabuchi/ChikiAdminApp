import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import {userRows, userColumns} from '../../dataTableSource';
import {Link} from 'react-router-dom';
import { useState } from 'react';


const Datatable = () => {

    const [data,setData] = useState(userRows);

    const handleDelete=(id)=>{
        const newData= data.filter((item)=> item.id !== id);
        setData(newData);
    }

    const actionColumn =[
        {field:'action',headerName:'ACTION',width:200,
    renderCell:(params)=>{
        return(
            <div className="cellaction">
                <Link to='/users/test' style={{textDecoration:'none'}} >
                <div className="viewbutton">View</div>

                </Link>
                <div className="deletebutton" onClick={()=> handleDelete(params.row.id)}>Delete</div>
            </div>
        )
    }
    }
    ]

return (
    <div style={{ height: 500}} className='datatable'>
        <div className="dataTableTitle">
         <span>Add New User</span>
            <Link to='/users/new' className='link' >Add New</Link>
        </div>
        <DataGrid
        className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        />
  </div>  )
}

export default Datatable;