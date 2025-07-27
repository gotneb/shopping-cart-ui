import Header from "./components/Header";
import ProductsList from "./components/ProductList";

const App = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">Products Catalog</h1>
        <ProductsList />
      </div>
    </>
  );
};

export default App;
