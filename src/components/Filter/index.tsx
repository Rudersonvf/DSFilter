import Button from "../Button";
import "./styles.css";

export default function Filter() {
    return(
      <div className="df-card-container">
        <input type="text" placeholder="Preço mínimo" />
        <input type="text" placeholder="Preço máximo" />
        <Button/>
      </div>
    );
}