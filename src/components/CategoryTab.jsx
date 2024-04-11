import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const CategoryTab = ({ tabs }) => {
    const [dishes, setDishes] = useState([]);
    useEffect(() => {
        if (tabs.length > 0) {
            selectedMenuList(tabs[0].menu_category); // Call selectedMenuList with default menu_category
        }
    }, [tabs]);

    const selectedMenuList = (category) => {
        const selectedCategory = tabs.find((tab) => tab.menu_category === category);
        if (selectedCategory) {
            const categoryDishes = selectedCategory.category_dishes;
            setDishes(categoryDishes);
        }
    };
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <div className="flex gap-3 md:gap-0 md:justify-between w-full" style={{ width: `${tabs.length * 300}px` }}>
                    {tabs.map((tab, index) => (
                        <button
                            onClick={() => selectedMenuList(tab.menu_category)}
                            key={index}
                            className="px-6 py-3 mr-4 font-semibold text-gray-800 border-b-2 border-transparent hover:border-gray-500 focus:outline-none"
                        >
                            {tab.menu_category}
                        </button>
                    ))}
                </div>
                <hr className="w-full border-2 border-black/80" style={{ width: `${tabs.length * 300}px` }} />
            </div>

            <ItemList dishes={dishes} />
        </div>
    );
};

export default CategoryTab;
