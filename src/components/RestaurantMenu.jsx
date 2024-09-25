import { IMG_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  if (resInfo === null) {
    return <h2>Loading...</h2>;
  }

  const { text } = resInfo?.cards[0]?.card?.card;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="my-5">
      <h1 className="text-3xl font-bold mb-6 text-center">{text}</h1>

      <div className="flex flex-col gap-9">
        {itemCards &&
          itemCards.map((item) => {
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
                  <button
                    className="border border-[#999] text-[#666] py-2 px-4 rounded-md mt-4 hover:border-[#000]"
                    onClick={() => handleAddItem(item)}
                  >
                    Add to Cart
                  </button>
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
    </div>
  );
};

export default RestaurantMenu;
