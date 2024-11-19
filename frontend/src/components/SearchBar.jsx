import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    // Destructuring the context values
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();


    useEffect(() => {
        if (location.pathname.includes('collection') && showSearch) {
            setVisible(true);
        }
        else {
            setVisible(false);
        }

    }, [location])

    return showSearch && visible ? (
        <div className="border-t border-b bg-gray-50 text-center">
            {/* Search Input Container */}
            <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
                {/* Search Input */}
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search"
                    className="flex-1 outline-none bg-inherit text-sm"
                />
                {/* Search Icon */}
                <img
                    className="w-4 cursor-pointer"
                    src={assets.search_icon}
                    alt="Search Icon"
                />
            </div>
            {/* Close Button */}
            <img
                onClick={() => setShowSearch(false)}
                className="inline w-3 cursor-pointer"
                src={assets.cross_icon}
                alt="Close Icon"
            />
        </div>
    ) : null;
};

export default SearchBar;