import { useContext, useEffect, useState } from "react";
import * as productService from "../../services/product-service";
import CardFilter from "../CardFilter";
import CardListing from "../CardListing/Index";
import "./styles.css";
import { ProductDTO } from "../../models/ProductDTO";
import { ContextHeaderCount } from "../../utils/context-count";

type QueryParams = {
  minPrice: number;
  maxPrice: number;
};

export default function ListingBody() {
  const [queryParams, setQueryParams] = useState<QueryParams>({
    minPrice: 0,
    maxPrice: Number.MAX_VALUE,
  });

  const [products, setProducts] = useState<ProductDTO[]>([]);
  const { setContextHeaderCount } = useContext(ContextHeaderCount);

  useEffect(() => {
    const onFilter = productService.findByPrice(
      queryParams.minPrice,
      queryParams.maxPrice
    );
    setProducts(onFilter);
    console.log("valor do queryparams");
    console.log(queryParams);
    setContextHeaderCount(onFilter.length);
  }, [queryParams]);

  function handleFilter(minValue: number, maxValue: number) {
    setQueryParams({
      minPrice: minValue || 0,
      maxPrice: maxValue || Number.MAX_VALUE,
    });
  }

  return (
    <main>
      <CardFilter onFilter={handleFilter} />
      <div className="df-list-container">
        {products.map((product) => (
          <CardListing key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
