import { RouterProvider ,createBrowserRouter } from "react-router-dom"
import Home from "./pages/homepage/Home"
import ProductCategory, {loader as productsLoader} from "./pages/products-category/ProductsCategory"
import Checkout from './pages/checkout/Checkout'
// import ProductDetails from './pages/product-details/ProductDetails'
import AppLayout from "./ui/AppLayout"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    element: <AppLayout/>,
    children: [

      {
        path: '/category/:categoryName',
        element: <ProductCategory/>,
        loader: productsLoader,
        // children: [
        //   {
        //     path: "/category/:categoryName/:productId",
        //     element: <ProductDetails/>,
        //   },
        // ],
      },
      {
        path: '/checkout',
        element: <Checkout />
      }
    ]
  },
])
export default function App() {
  return <RouterProvider router={router} />
}
