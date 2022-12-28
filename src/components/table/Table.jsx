import '../../scss/table.scss';
import { tableData as data} from '../../data/data';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Zhuozi = () => {


  return (
<TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tablecell'>Tracking Id</TableCell>
            <TableCell className='tablecell'>Product</TableCell>
            <TableCell className='tablecell'>Customer</TableCell>
            <TableCell className='tablecell'>Date</TableCell>
            <TableCell className='tablecell'>Amount</TableCell>
            <TableCell className='tablecell'>Payment Method</TableCell>
            <TableCell className='tablecell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id} >
              <TableCell className='tablecell'>#{item.id}</TableCell>
              <TableCell className='tablecell'>
                <div className="cellWrapper">
                    <img src={item.img} alt="image" className='image' />
                    <span>{item.product}</span>
                </div>
                </TableCell>
              <TableCell className='tablecell'>{item.customer}</TableCell>
              <TableCell className='tablecell'>{item.date}</TableCell>
              <TableCell className='tablecell'>${item.amount}</TableCell>
              <TableCell className='tablecell'>{item.method}</TableCell>
              <TableCell className='tablecell' ><span className={`status ${item.status}`}>{item.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>    
  )


}

export default Zhuozi;