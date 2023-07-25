import { useState } from "react";
import Button from "../Button";
import "./styles.css";

type FormData = {
  minPrice?: number;
  maxPrice?: number;
};

type Props = {
  onFilter: Function;
};

export default function CardFilter({ onFilter }: Props) {
  const [formData, setFormData] = useState<FormData>({});

  function handleChange(event: any) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    setFormData(formData);
    console.log("saida do formulario");
    console.log(formData);
    onFilter(formData.minPrice, formData.maxPrice);
  }

  return (
    <form onSubmit={handleSubmit} className="df-card-container">
      <input
        name="minPrice"
        value={formData.minPrice || ""}
        type="text"
        placeholder="Preço mínimo"
        onChange={handleChange}
      />
      <input
        name="maxPrice"
        value={formData.maxPrice || ""}
        type="text"
        placeholder="Preço máximo"
        onChange={handleChange}
      />
      <Button />
    </form>
  );
}
