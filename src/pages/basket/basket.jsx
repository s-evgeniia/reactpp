import React from 'react';
import ItemInBasket from "../../entities/item-in-basket/item-in-basket";

const Basket = ({basket, onRemove, updateCounter}) => {
    if (!basket.length) {
        return (
            <h2 style={{textAlign: 'center'}}>
                Your basket is empty!
            </h2>
        )
    }
    const totalPrice = () => {
        let totalCost = 0
        for (let i = 0; i < basket.length; i ++) {
            totalCost = totalCost + basket[i].price*basket[i].count
        }
        return (totalCost)
    }

    return (
        <div className="basket">
            <h2>My Basket</h2>
            <div className="basket_container">
                <div>
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
                            updateCounter={(newValue) => updateCounter(item, newValue)}
                        />
                    ))}
                </div>
                <p className="total_price"><b>Total price:</b> {totalPrice()} €</p>
            </div>
        </div>
    );
};

export default Basket;