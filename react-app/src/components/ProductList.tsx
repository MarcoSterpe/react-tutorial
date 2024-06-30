import { useEffect, useState } from 'react';

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log('Fetching products in this', category);
    setProducts(['Clothing', 'Household']);
  }, [category]);

  return (
    <div>
      <ul>ProductList</ul>
      {products.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </div>
  );
};

export default ProductList;
