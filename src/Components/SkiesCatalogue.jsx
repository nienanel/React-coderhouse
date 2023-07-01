import React from "react";

const SkiItemList = () => {
    const skiItems = [
        { id: 1, name: `Ski set 1`, price: 500 },
        { id: 2, name: `Ski set 2`, price: 600 },
        { id: 3, name: `Ski set 3`, price: 550 },
        { id: 4, name: `Ski set 4`, price: 200 },
        { id: 5, name: `Ski set 5`, price: 100 },
    ];

    return (
        <div>
            <h2>Season 2023!</h2>
            <ul>
                {skiItems.map((item) => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SkiItemList;