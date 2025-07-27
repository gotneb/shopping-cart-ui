import ProductCard from "./ProductCard";

const ProductsList = ({ products }) => {
  return (
    // Very useful. It uses grid from Tailwind. Logic behind:
    // grid-cols-1: for mobile devices
    // sm:grid-cols-2: for small screens, has 2 columns
    // md:grid-cols-3: for medium screens, has 3 columns
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductsList;
