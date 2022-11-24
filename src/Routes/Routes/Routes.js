import {createBrowserRouter} from 'react-router-dom';
import Login from '../../Authentication/Login/Login';
import Signup from '../../Authentication/Signup/Signup';
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home/Home';

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
            }
        ]
    }
])

export default router;