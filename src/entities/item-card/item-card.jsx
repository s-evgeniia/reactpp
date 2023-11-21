import React from 'react';

const ItemCard = ({description, url, price, item, onShowItem, basket}) => {
    const bought = basket.some(function (e) {
        return e.url === url
    })

    const itemsInBasket = basket.find(el => el.url === url)

    return (
        <div className="item_card">
            <h3>{description}</h3>
            <img src={url} alt={description} height='150px' width='110px'/>
            <p>Price: {price} €</p>
            {bought ?
                <>
                    <p className="notification_b">{itemsInBasket.count} in basket</p>
                </>
                : ''
            }

            <button onClick={() => onShowItem(item)} type="button">view more</button>
        </div>
    );
};

export default ItemCard;