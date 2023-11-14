import React from 'react';
import ItemCard from "./ItemCard";
import ItemPage from "./ItemPage";

const ItemsList = ({items, onShowItem}) => {

    return (
        <div>
            <div className="items_list">
            {items.map((item) => (
                <ItemCard
                    description={item.title}
                    key={item.id}
                    url={item.url}
                    price={item.price}
                    onShowItem={onShowItem}
                    item={item}
                />))}
            </div>

        </div>
    );
};

export default ItemsList;