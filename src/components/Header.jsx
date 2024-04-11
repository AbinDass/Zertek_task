import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
    const cartCount = useSelector((state) => state.cart.cartQuantity);
    return (
        <div className="flex justify-between p-5">
            <div className="text-lg font-medium">
                <span className="capitalize">UNI Resto</span> cafe
            </div>
            <div className="flex gap-5">
                <div className="capitalize">my-orders</div>
                <div className="relative">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16.5" cy="18.5" r="1.5" />
                        <circle cx="9.5" cy="18.5" r="1.5" />
                        <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z" />
                    </svg>

                    {1 > 0 && (
                        <span className="bg-red-500 text-white rounded-full px-2 py-1 absolute -top-4 -right-3">
                            {cartCount}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
