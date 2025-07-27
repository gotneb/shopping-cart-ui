import ProductCard from "./ProductCard";
import { useProducts } from "../context/ProductContext";

const ProductsList = () => {
  // Approach without using custom hook 'useProducts'
  // const { products, loading, error } = useContext(ProductContext);
  const { products, loading, error } = useProducts();

  return (
    // Very useful. It uses grid from Tailwind. Logic behind:
    // grid-cols-1: for mobile devices
    // sm:grid-cols-2: for small screens, has 2 columns
    // md:grid-cols-3: for medium screens, has 3 columns
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {loading && <p>Loading...</p>}
      {error && <div className="error">{error}</div>}
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductsList;
