import { Outlet, Link } from "react-router-dom";
import '../styles/main.scss'


const Layout = () => {
  return (
      <div className="app2-wrapper">

        <div className="menu-wrapper">
          <Link className='menu-element' to="/">Home</Link>
          <Link className='menu-element' to="/blogs">DataGrid</Link>
          <Link className='menu-element' to="/contact">Contact</Link>

        </div>

        <div className="outlet">
          <Outlet className='outlet' />
        </div>
      </div>
  )
};

export default Layout;
