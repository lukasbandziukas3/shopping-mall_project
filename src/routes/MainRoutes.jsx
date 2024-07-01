import {Loadable} from "../components/shared/Loadable";
import {lazy} from "react";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Dasboard from "../components/shared/Dasboard";
const MainPage = Loadable(lazy(() => import( "../pages/MainPage/MainPage") ));
const CategoriesPage = Loadable(lazy(()=> import ( "../pages/CategoiesPage/CategoriesPage")));
const ProductsPage =  Loadable( lazy(()=> import( "../pages/ProductsPage/ProductsPage")));
const OrdersPage = Loadable (lazy (()=>   import ("../pages/OrdersPage/OrdersPage")));
const CartPage =  Loadable(lazy(()=> import( "../pages/CartPage/CartPage")));


export const MainRoutes =   [
    {
        path: "/",
        element: <Dasboard/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <MainPage/>
            },
            {
                path: '/categories',
                element: <CategoriesPage/>
            },
            {
                path: '/products',
                element: <ProductsPage/>
            },
            {
                path: '/orders',
                element: <OrdersPage/>
            },
            {
                path: '/cart',
                element: <CartPage/>
            },
        ]
    }
]

