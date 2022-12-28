import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/featured/Chart';
import Zhouzi from '../../components/table/Table';

const Single = () => {
  return (
    <div className='single'>
    <Sidebar />
    <div className="singlecontainer">
      <Navbar />
      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img src="https://images.pexels.com/photos/10769588/pexels-photo-10769588.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="item image" className="itemImg" />
            <div className="details">
              <h1 className="itemTitle">Jane Doe</h1>
              <div className="detailItems">
                <span className="itemKey">Email:</span>
                <span className="itemValue">janedoe@gmail.com</span>
              </div>
              <div className="detailItems">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+1 2345 67 89</span>
              </div>
              <div className="detailItems">
                <span className="itemKey">Address:</span>
                <span className="itemValue">Elton st. 234 Gaerden yd. NewYork</span>
              </div>
              <div className="detailItems">
                <span className="itemKey">Country:</span>
                <span className="itemValue">USA</span>
              </div>
             
            </div>
          </div>
        </div>
        <div className="right">
          <Chart aspect={3/1} title='User Spending (Last 6 months)'/>
        </div>
      </div>
      <div className="bottom">
      <h1 className="title">Last Transactions</h1>
        <Zhouzi />
      </div>
    </div>
  </div>  )
}

export default Single;