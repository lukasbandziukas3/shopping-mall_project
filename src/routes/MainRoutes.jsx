import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Dasboard from "../components/shared/Dasboard";
import MainPage from "../pages/MainPage/MainPage";
import CategoriesPage from "../pages/CategoiesPage/CategoriesPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import OrdersPage from "../pages/OrdersPage/OrdersPage";
import CartPage from "../pages/CartPage/CartPage";



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

