import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/homepage/Home';
import ProductCategory from './pages/products-category/ProductsCategory';
import Checkout from './pages/checkout/Checkout';
import ProductDetails from './pages/product-details/ProductDetails';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
// import RootContainer from './ui/RootContainer';
import { getProductsByCategory, getProductById } from './services/apiProducts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
    },
    {
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: 'category/:categoryName',
                element: <ProductCategory />,
                loader: ({ params }) => {
                    return getProductsByCategory(params.categoryName);
                },
                errorElement: <Error />,
            },
            {
                path: 'category/:categoryName/:productSlug',
                element: <ProductDetails />,
                loader: ({ params }) => {
                    return getProductById(params.productSlug);
                },
                errorElement: <Error />,
            },
        ],
    },
    {
        path: '/checkout',
        element: <Checkout />,
        errorElement: <Error />,
    },
]);
export default function App() {
    return <RouterProvider router={router} />;
}
