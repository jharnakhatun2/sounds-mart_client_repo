import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";
import useBuyer from "../hooks/useBuyer";


const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                   
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li><Link to="/dashboard">My Orders</Link></li>
            
                            
            {isAdmin && (
              <>
                <li><Link to="/dashboard/alluser">All Users</Link></li>
                <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                <li><Link to="/dashboard/reporteditems">Reported Items</Link></li>
                <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                <li><Link to="/dashboard/myproducts">My Products</Link></li>
                <li><Link to="/dashboard/mybuyers">My Buyers</Link></li>
              </>
            )
            }

          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
