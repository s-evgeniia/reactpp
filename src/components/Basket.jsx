import React from 'react';
import ItemInBasket from "./ItemInBasket";

const Basket = ({basket, onRemove}) => {
    if (!basket.length) {
        return (
            <h2 style={{textAlign: 'center', marginTop: '10px'}}>
                Your basket is empty!
            </h2>
        )
    }
    return (
        <div className="basket">
            <h2>My Basket</h2>
            {basket.map((item) => (
                <ItemInBasket
                    item={item}
                    key={item.id-Math.random()}
                    title={item.title}
                    url={item.url}
                    description={item.description}
                    price={item.price}
                    count={item.count}
                    onRemove={onRemove}
                />
            ))}
        </div>
    );
};

export default Basket;