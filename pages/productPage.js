import React from "react";

const productPage = () => {
  const data = fetch("/api/products/")
    .then((res) => res.json())
    .then((data) => data);

  console.log(data);
  return <div>productPage</div>;
};

export default productPage;
