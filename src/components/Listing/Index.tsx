import { ProductDTO } from "../../models/productDTO";
import "./style.css";

type Props = {
  products: ProductDTO[];
};

export default function Listing({ products }: Props) {
  return (
    <div className="df-list-container">
      {products.map((product) => (
        <div className="df-list-card">
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
