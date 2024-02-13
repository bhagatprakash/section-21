import { Link } from "react-router-dom";
function Productspage() {
  const Products = [
    { id: "p5", title: "Product-1" },
    { id: "p2", title: "Product-2" },
    { id: "p3", title: "Product-3" },
  ];
  return (
    <>
      <h1>The product page</h1>
      <ul>
        {Products.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Productspage;
