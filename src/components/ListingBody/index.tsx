/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { ProductDTO } from "../../models/productDTO";
import Filter from "../Filter";
import Listing from "../Listing/Index";
import "./styles.css";

export default function ListingBody() {
  return (
    <main>
      <Filter />
      <Listing products={products} />
    </main>
  );
}
