import { ProductDTO } from "../../models/ProductDTO";
import "./style.css";

type Props = {
  product: ProductDTO;
};

export default function CardListing({ product }: Props) {
  return (
    <div className="df-list-card">
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  );
}
