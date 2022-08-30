/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const ProductItem = ({ product, addToCartHandler }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.image}
            className="rounded shadow"
          />
        </a>
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p>{product.brand}</p>
        <p>${product.price}</p>
        <button
          onClick={() => addToCartHandler(product)}
          type="button"
          className="primary-button"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
