import React from 'react';
import ItemCard from "./ItemCard";

const ItemsList = ({items, onShowItem, onBuyClick}) => {

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
                    onBuyClick={onBuyClick}
                />))}
            </div>

        </div>
    );
};

export default ItemsList;