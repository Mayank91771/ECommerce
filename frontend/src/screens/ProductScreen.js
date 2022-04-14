import { useParams } from "react-router-dom";

function ProductScreen() {
  const params = useParams(); //react hook useParams() from react router dom
  const { slug } = params; //getting data.slug from param

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}

export default ProductScreen;
