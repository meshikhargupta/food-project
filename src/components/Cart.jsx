import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <h1 className="text-2xl mb-0.5">Cart is Empty</h1>
          <p className="text-lg opacity-60">Add items to the cart!</p>
        </div>
      ) : (
        <>
          <h1 className="text-center text-3xl mb-2">Cart</h1>
          <div className="text-center mb-5">
            <button
              className="border border-[#999] text-[#666] py-2 px-4 rounded-md mt-4 hover:border-[#000]"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>

          <div className="flex flex-col gap-9">
            {cartItems.map((item) => {
              return (
                <div
                  key={item.card.info.id}
                  className="flex justify-between items-center border-b pb-9 border-[#cccccc64] last-of-type:border-none"
                >
                  <div>
                    <p className="font-bold text-lg">{item.card.info.name}</p>
                    <p className="opacity-60 my-2 max-w-[70%] text-sm">
                      {item.card.info.description}
                    </p>
                    <p className="font-medium">
                      ₹
                      {(item.card.info.defaultPrice || item.card.info.price) /
                        100}
                    </p>
                  </div>

                  <img
                    src={IMG_URL + item.card.info.imageId}
                    alt=""
                    className="w-[180px] h-[180px] object-cover rounded-xl"
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
