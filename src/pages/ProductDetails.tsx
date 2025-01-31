import React from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Product Details</h1>
      <br />
      Product id: {id}
    </div>
  );
};

export default ProductDetails;
