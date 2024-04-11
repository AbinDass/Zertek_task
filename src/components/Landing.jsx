import React, { useEffect, useState } from "react";
import Header from "./Header";
import CategoryTab from "./CategoryTab";
import { getDishes } from "../api/dishCollection";

const Landing = () => {
    const [menulist, setMenulist] = useState([]);
    useEffect(() => {
        getDishes().then((res) => {
            if (res) {
                setMenulist(res.data.data[0].table_menu_list);
            } else {
                console.log(`sorry something went wrong!`);
            }
        });
    }, []);
    return (
        <div>
            <Header />
            <CategoryTab tabs={menulist} />
        </div>
    );
};

export default Landing;
