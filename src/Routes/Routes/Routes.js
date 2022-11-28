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
                element: <Products></Products>,
            },
            {
                path: '/products/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/modal/:id',
                element: <ProductModal></ProductModal>,
                loader: ({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: "/blogs",
                element: <Blogs />
                
            },
              {
                path: "/blogs/:id",
                element: <Blog />,
                loader: async ({params})=>{
                  return fetch(`http://localhost:5000/blogs/${params.id}`)
                }
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
                path:'/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path:'/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({params})=>fetch(`http://localhost:5000/bookings/${params.id}`)
              }
            
        ]
    }
])

export default router;