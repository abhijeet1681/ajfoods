import App from '../App';
import {createBrowserRouter} from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import Cart from './Cart';
import Body from './Body';
import ErrorPage from './ErrorPage';
import Menu from './Menu';

const appRouter = createBrowserRouter([
    {
       path:"/",
       element:<App/>,
       errorElement : <ErrorPage/>,
       children : [
      {
        path: "",
        element : <Body/>
       },
       {
        path : "about",
        element : <About/>
       },
       {
        path : "contact",
        element : <Contact/>
       },
       {
        path : "cart",
        element : <Cart/>
       },
       {
        path : "menu/:id",
        element : <Menu/>
       }
       ]
    }
  ]);

export default appRouter;