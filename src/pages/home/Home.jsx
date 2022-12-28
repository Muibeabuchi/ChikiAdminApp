import '../../scss/home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../widget/Widget';
import Featured from '../../components/chart/featured/featured/Featured';
import Chart from '../../components/chart/featured/Chart';
import Zhuozi from '../../components/table/Table';

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="widgets">
          <Widget />
          {/* <Widget type='order'/>
          <Widget type='earning'/>
          <Widget type='balance'/> */}
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2/1} title='Last 6 Months (Revenue)'/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Last Transactions</div>
          <Zhuozi />
        </div>
      </div>
    </div>
  )
}

export default Home;