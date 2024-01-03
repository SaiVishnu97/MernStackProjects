import React from 'react'
import { useSelector } from 'react-redux'
import CartModal from './CartModal'
import { useState } from 'react'
import Sidebar from './SideBar'
function Navbar() {
  const cartproducts = useSelector((output) => output.product.cart);
  const [show, setShow] = useState(false);

  const countitems = () => cartproducts.reduce((acc, val) => acc + val.count, 0);

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className='NavBarClass'>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor: 'rgb(19,25,33)'}}>
          {/* <button
            className="navbar-toggler"
            type="button"
            onClick={toggleSidebar}
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <div className={`collapse navbar-collapse`}>
     <div style={{display:"flex",flexDirection:"row", justifyContent:"space-between",alignItems:"flex-start"}}> 
      
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{display:"flex",flexDirection:"row"}}>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          

          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
    <div style={{marginTop:"20px"}}>
            <i
              className="fa fa-shopping-cart"
              style={{ fontSize: '30px', cursor: 'pointer',marginLeft:"120px" }}
              onClick={() => setShow(true)}
            ></i>
            <span className="badge badge-warning" style={{ marginLeft: "-5px"}} id="lblCartCount">
              {' '}
              {countitems()}{' '}
            </span>
          </div>
    </div>
    </div>
    
  </nav>
  
  </div>

<CartModal show={show} setShow={setShow} />
</div>
  )
}

export default Navbar