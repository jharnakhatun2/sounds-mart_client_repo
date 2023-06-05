import {createBrowserRouter} from 'react-router-dom';
import Login from '../../Authentication/Login/Login';
import Signup from '../../Authentication/Signup/Signup';
import Main from '../../Layout/Main';
import Error from '../../Pages/Error/Error';
import Home from '../../Pages/Home/Home/Home';
import Category from '../../Pages/Products/Category';
import Products from '../../Pages/Products/Products';
import ProductModal from '../../Pages/Products/ProductModal';
import PrivateRoute from '../PrivateRoute';
import DashboardLayout from '../DashboardLayout';
import MyOrders from '../../Dashboard/Buyers/MyOrders';
import AdminRoutes from '../AdminRoutes';
import AllUser from '../../Dashboard/Admin/AllUser';
import AddProduct from '../../Dashboard/Seller/AddProduct';
import MyProducts from '../../Dashboard/Seller/MyProducts';
import Blog from '../../Pages/Blog/Blog';
import Blogs from '../../Pages/Blog/Blogs';
import Checkout from '../../Pages/CheckOut/Checkout';
import DisplayError from '../../Shared/DisplayError/DisplayError';
import Advertise from '../../Pages/Advertise/Advertise';
import MyBuyers from '../../Dashboard/Seller/MyBuyers';
import ReportedItems from '../../Dashboard/Admin/ReportedItems';
import SellerRoutes from '../SellerRoutes';
import BuyerRoutes from '../BuyerRoutes';
import AllBuyers from '../../Dashboard/Admin/AllBuyers';
import AllSellers from '../../Dashboard/Admin/AllSellers';
import { Wishlist } from '../../Pages/Wishlist/Wishlist';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/advertise',
                element: <Advertise></Advertise>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/category',
                element: <Category></Category>,
            },
            {
                path: '/products',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
            },
            {
                path: '/products/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({params})=>fetch(`https://sounds-mart-server-jharna203.vercel.app/products/${params.id}`)
            },
            {
                path: '/modal/:id',
                element: <ProductModal></ProductModal>,
                loader: ({params})=>fetch(`https://sounds-mart-server-jharna203.vercel.app/products/${params.id}`)
            },
            {
                path: "/blogs",
                element: <Blogs />
                
            },
              {
                path: "/blogs/:id",
                element: <Blog />,
                loader: async ({params})=>{
                  return fetch(`https://sounds-mart-server-jharna203.vercel.app/blogs/${params.id}`)
                }
            },
            {
                path: "/wishlist",
                element: <Wishlist />
                
            },
              {
                path: '*',
                element: <Error></Error>
              }
        ]
    },
    {
        path:'/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path:'/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path:'/dashboard/alluser',
                element: <AdminRoutes><AllUser></AllUser></AdminRoutes>
            },
            {
                path:'/dashboard/allbuyers',
                element: <AdminRoutes><AllBuyers></AllBuyers></AdminRoutes>
            },
            {
                path:'/dashboard/allsellers',
                element: <AdminRoutes><AllSellers></AllSellers></AdminRoutes>
            },
            {
                path:'/dashboard/addproduct',
                element: <AdminRoutes><AddProduct></AddProduct></AdminRoutes>
            },
            {
                path:'/dashboard/myproducts',
                element: <AdminRoutes><MyProducts></MyProducts></AdminRoutes>
            },
            {
                path:'/dashboard/mybuyers',
                element: <AdminRoutes><MyBuyers></MyBuyers></AdminRoutes>
            }, 
            {
                path:'/dashboard/reporteditems',
                element: <AdminRoutes><ReportedItems></ReportedItems></AdminRoutes>
            },
            {
                path: '/dashboard/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({params})=>fetch(`https://sounds-mart-server-jharna203.vercel.app/bookings/${params.id}`)
              }
            
        ]
    }
])

export default router;