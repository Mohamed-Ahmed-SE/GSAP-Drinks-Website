import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";

import { Navigate, useParams } from "react-router-dom";
import { products } from "./constants/products";

const LegacyRedirect = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  if (product) {
    return <Navigate to={`/products/${product.slug}`} replace />;
  }
  return <Navigate to="/product" replace />;
};

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="products/:slug" element={<ProductDetails />} />
          {/* Legacy Redirect for old links like /product/3 */}
          <Route path="product/:id" element={<LegacyRedirect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
