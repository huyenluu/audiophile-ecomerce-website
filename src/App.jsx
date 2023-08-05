import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/homepage/Home"
import ProductCategory from "./pages/products-category/ProductsCategory"
import Checkout from './pages/checkout/Checkout'
import ProductDetails from './pages/product-details/ProductDetails'
import AppLayout from "./ui/AppLayout"
import { getCategoryProducts, getProductData } from './services/apiEshop'

//to-do: handle error: Layout was forced before the page was fully loaded. If stylesheets are not yet loaded this may cause a flash of unstyled content.
//to-do: handle error pages
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    element: <AppLayout/>,
    children: [

      {
        path: 'category/:categoryName',
        element: <ProductCategory/>,
        loader: ({params}) => {
          return getCategoryProducts(params.categoryName)
        },
      },
      {
        path: "category/:categoryName/:productId",
        element: <ProductDetails/>,
        loader:({params})=> {
          return getProductData(params.productId)
        }
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
