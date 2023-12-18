import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/homepage/Home';
import ProductCategory from './pages/products-category/ProductsCategory';
import Checkout from './pages/checkout/Checkout';
import ProductDetails from './pages/product-details/ProductDetails';
import AppLayout from './ui/AppLayout';
import ErrorPage from './ui/Error';
import { getProductsByCategory, getProductById } from './services/apiProducts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'category/:categoryName',
                element: <ProductCategory />,
                loader: ({ params }) => {
                    return getProductsByCategory(params.categoryName);
                },
                errorElement: <ErrorPage />,
            },
            {
                path: 'category/:categoryName/:productSlug',
                element: <ProductDetails />,
                loader: ({ params }) => {
                    return getProductById(params.productSlug);
                },
                errorElement: <ErrorPage />,
            },
        ],
    },
    {
        path: '/checkout',
        element: <Checkout />,
        errorElement: <ErrorPage />,
    },
]);
export default function App() {
    return <RouterProvider router={router} />;
}
