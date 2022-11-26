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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
                path: '*',
                element: <Error></Error>
              }
        ]
    }
])

export default router;