/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Button from "../Button";
import * as productService from "../../services/product-service";
import "./styles.css";

export default function Filter() {
  return (
    <form onSubmit={handleFormSubmit} className="df-card-container">
      <input
        name="minPrice"
        value={""}
        type="text"
        placeholder="Preço mínimo"
        onChange={handleInputChange}
      />
      <input
        name="maxPrice"
        value={""}
        type="text"
        placeholder="Preço máximo"
        onChange={handleInputChange}
      />
      <Button />
    </form>
  );
}
