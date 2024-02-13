import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/product");
  }
  return (
    <>
      <h1>MY HOME </h1>
      <p>
        Go To <Link to="/product"> The list of products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}
export default HomePage;
