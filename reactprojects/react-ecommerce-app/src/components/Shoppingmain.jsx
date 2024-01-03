import React from 'react'
import Navbar from './Navbar';
import Shoppingbody from './Shoppingbody';
import Sidebar from './SideBar';
function Shoppingmain() {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className={`GridClass ${isSidebarOpen ? 'open' : ''}`}>
          <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen}></Sidebar>
      <Navbar></Navbar>
    <Shoppingbody></Shoppingbody></div>
  )
}

export default Shoppingmain