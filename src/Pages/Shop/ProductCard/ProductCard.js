import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const ProductCard = ({ productInfo, setproductData }) => {
  const {
    productImg,
    productName,
    productBrand,
    productPrice,
    description,
    stock,
    promo,
    discount,
  } = productInfo;
  return (
    <div className="card card-compact w-96 bg-base-100 h-3/4 shadow-xl">
      <figure>
        <img src={productImg} alt="product" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{productName}</h2>
          {stock > 0 ? (
            <div className="flex items-center gap-2 ">
              <FaShoppingBag className="text-green-800"></FaShoppingBag>
              <span className="text-green-600 font-bold">{stock}</span>
            </div>
          ) : (
            <div className="badge bg-red-800 text-white">out of stock</div>
          )}
        </div>
        <div className="badge bg-green-800 text-white">{productBrand}</div>
        <div className="flex items-center justify-between">
          <div className="flex items-center  ">
            <span className="text-2xl font-bold text-green-600">৳</span>
            <h1 className="text-2xl text-green-800 font-bold">
              {productPrice}
            </h1>
          </div>
          {discount ? (
            <div className="flex gap-1">
              <h1 className="text-orange-500 text-md font-bold">promo:</h1>
              <div className="badge bg-red-500 text-white">{promo}</div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <label
            disabled={stock === "0"}
            className="btn   bg-red-800 text-white hover:bg-green-500"
            onClick={() => setproductData(productInfo)}
            htmlFor="custom-modal"
          >
            Custom Order
          </label>
          <label
            disabled={stock === "0"}
            className="btn btn-square w-1/2  bg-green-800 text-white hover:bg-green-500"
            onClick={() => setproductData(productInfo)}
            htmlFor="buy-modal"
          >
            Buy Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
