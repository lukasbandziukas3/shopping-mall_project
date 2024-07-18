import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Dasboard from "../components/shared/Dasboard";
import MainPage from "../pages/MainPage/MainPage";
import CategoriesPage from "../pages/CategoiesPage/CategoriesPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import OrdersPage from "../pages/OrdersPage/OrdersPage";
import CartPage from "../pages/CartPage/CartPage";
import UsersPage from "../pages/UserPage/UsersPage";
import LoginPage from "../pages/Login/LoginPage";
import LogoutPage from "../pages/Logout/LogoutPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import { RequireAuth } from "../components/auth/RequireAuth";
import React from "react";

interface Route {
    caseSensitive?: boolean;
    children?: Route[];
    errorElement?: React.ReactElement;
    element?: React.ReactElement;
    index?: false;
    path?: string;
}


export const MainRoutes: Route[] =   [
    {
        path: "/",
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Dasboard/>,
                children: [
                    {
                        path: '/',
                        element: <RequireAuth allowedRoles = {['customer','manager', 'admin']}/>,
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
                                path: '/cart',
                                element: <CartPage/>
                            },
                            {
                                path: '/logout',
                                element: <LogoutPage/>
                            },
                        ]
                    },
                    {
                        path: '/',
                        element: <RequireAuth allowedRoles = {['manager']}/>,
                        children: [
                            {
                                path: '/orders',
                                element: <OrdersPage/>
                            }
                        ]
                    },
                    {
                        path: '/',
                        element: <RequireAuth allowedRoles = {['admin']}/>,
                        children: [
                            {
                                path: '/users',
                                element: <UsersPage/>
                            },
                        ]
                    }
                ]
            },
            {
                path: '/authorization',
                element: <LoginPage/>
            },
            {
                path: '/singUp',
                element: <SignUpPage/>
            }
        ]
    }
]

