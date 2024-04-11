import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setCart, setRemoveCart } from "../redux/slice/cartSlice";

const ItemList = ({ dishes }) => {
    const [itemCounts, setItemCounts] = useState(0);

    const dispatch = useDispatch();
    const cartCount = useSelector((state) => state.cart.cartQuantity);
    const decrementCount = (item) => {
        if (item) {
            const updatedCounts = {
                ...itemCounts,
                [item.dish_id]: Math.max((itemCounts[item.dish_id] || 0) - 1, 0), // Ensure count doesn't go below 0
            };
            setItemCounts(updatedCounts);
            if (updatedCounts[item.dish_id] === 0 && cartCount > 0) {
                dispatch(setRemoveCart(item));
            }
        }
    };

    const incrementCount = (item) => {
        if (item) {
            const updatedCounts = {
                ...itemCounts,
                [item.dish_id]: (itemCounts[item.dish_id] || 0) + 1,
            };
            setItemCounts(updatedCounts);

            dispatch(setCart(item));
        }
    };
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-gray-100">
                {dishes.map((item, index) => (
                    <div key={index} className="border-b  border-gray-200 py-4 flex items-center justify-between ">
                        <div className=" flex flex-col px-8 justify-center items-start flex-wrap">
                            <div className="text-lg flex font-semibold">
                                {/* <span className="inline-block mr-2 h-4 w-4 border-4 border-green-400 rounded-full"></span> */}
                                <div
                                    className={
                                        item?.addonCat.length !== 0
                                            ? "w-6 h-6 border-2 border-green-200 flex justify-center items-center"
                                            : "w-6 h-6 border-2 border-red-200 flex justify-center items-center"
                                    }
                                >
                                    <span
                                        className={
                                            item?.addonCat.length !== 0
                                                ? "inline-block h-2 w-2 bg-green-500 rounded-full"
                                                : "inline-block h-2 w-2 bg-red-500 rounded-full"
                                        }
                                    ></span>
                                </div>
                                {item?.dish_name}
                            </div>
                            <p className="text-black flex-wrap">
                                {item?.dish_currency} {item?.dish_price}
                            </p>
                            <div>
                                <p className="text-gray-600">{item?.dish_description}</p>
                            </div>

                            <div className="flex ml-5 items-center justify-center h-10">
                                <button
                                    className="bg-green-500 h-10  px-4 py-2 rounded-l-2xl hover:bg-green-500 focus:outline-none"
                                    onClick={() => decrementCount(item)}
                                >
                                    -
                                </button>
                                <div className="bg-green-500  px-4 py-2">{itemCounts[item.dish_id] || 0}</div>
                                <button
                                    className="bg-green-500  px-4 py-2 rounded-r-2xl hover:bg-green-500 focus:outline-none"
                                    onClick={() => incrementCount(item)}
                                >
                                    +
                                </button>
                            </div>

                            <div>
                                {item?.addonCat.length !== 0 ? (
                                    <p className="capitalize text-red-600 py-4">customization available </p>
                                ) : (
                                    <p className="capitalize text-red-600 py-4">not available </p>
                                )}
                            </div>
                        </div>
                        <div className=" flex gap-5  md:gap-32 md:px-20 items-center text-right">
                            <p className="font-semibold flex gap-1 text-sm md:text-base lg:text-lg xl:text-xl">
                                <span> {item?.dish_calories}</span> <span>calories</span>
                            </p>

                            {/* You can add a remove button here if needed */}
                            <div>
                                <img className="h-auto max-w-full md:w-40 md:h-40" src={item?.dish_image} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                {/* <h2 className="text-lg font-semibold">Total Price: ${totalPrice.toFixed(2)}</h2> */}
                {/* Add checkout button or continue shopping button */}
            </div>
        </div>
    );
};

export default ItemList;
