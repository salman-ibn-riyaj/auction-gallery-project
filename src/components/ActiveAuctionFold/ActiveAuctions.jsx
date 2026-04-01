import React, { use, useState } from "react";
import Item from "./Item";
import { Heart } from "lucide-react";
import FavouriteItems from "./FavouriteItems";

const ActiveAuctions = ({ auctionDataPromise }) => {
  const items = use(auctionDataPromise);
  console.log(items);

  const [getFavouriteItems, setGetFavouriteItems] = useState([]);
  const hanldeGetFavouriteItems = (item) => {
    const findedArray = getFavouriteItems.find(
      (finditem) => item.name === finditem.name,
    );
    if (findedArray) {
      alert(`${item.name} already in favourites`);
      return;
    }
    setGetFavouriteItems([...getFavouriteItems, item]);
  };

  const handleDelete = (favouriteItem) => {
    const filteredArray = getFavouriteItems.filter(
      (item) => item.name !== favouriteItem.name,
    );
    setGetFavouriteItems(filteredArray);
  };
  console.log(getFavouriteItems);

  const totalAmount = getFavouriteItems.reduce(
    (sum, item) => sum + item.currentBid,
    0,
  );
  console.log(totalAmount);

  return (
    <div className="bg-slate-200 pb-12">
      <div className="py-4">
        <h2 className="text-[#0E2954]">Avtive Auctions</h2>

        <p className="text-gray-500 mt-3">
          Discover and bid on extraordinary items
        </p>
      </div>

      {/* table and fovourite items section  */}

      <div className="flex gap-3">
        <div className="bg-slate-200 px-10 rounded-xl py-2">
          <table className="w-full">
            <thead className="">
              <tr className="p-4">
                <th className="p-4 bg-violet-400">Items</th>
                <th className="p-4 bg-violet-400">Current Bid</th>
                <th className="p-4 bg-violet-400">Time Left</th>
                <th className="p-4 bg-violet-400">Bid Now</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item) => (
                <Item
                  item={item}
                  hanldeGetFavouriteItems={hanldeGetFavouriteItems}
                ></Item>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-indigo-400 rounded-md h-[40%] px-3">
          <div className="border-b-2 px-10 flex flex-col items-center justify-center py-2">
            <h2 className="text-white font-bold text-center flex items-center gap-2">
              {" "}
              <span>
                <Heart color="#e40749" />
              </span>
              <p>Favorite Items</p>
            </h2>
          </div>

          {
            (getFavouriteItems.length === 0 ? (
              <div className="text-center px-10">
                <h3 className="text-red-600 font-bold">No favorites yet</h3>
                <p className="text-lime-900">
                  Click the heart icon on any item <br /> to add it to your
                  favorites
                </p>
              </div>
            ) : (
              <FavouriteItems
                getFavouriteItems={getFavouriteItems}
                handleDelete={handleDelete}
              ></FavouriteItems>
            ))
          }

          {/* no favourites yet  */}

          <div className="flex items-center justify-between border-t">
            <h2 className="font-semibold text-xl">Total Bids Amount:</h2>
            <span className="font-semibold">{totalAmount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveAuctions;
