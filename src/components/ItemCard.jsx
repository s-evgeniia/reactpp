import React from 'react';

const ItemCard = ({description, url, price, item, onShowItem, onBuyClick}) => {

    const showMore = (item) => {
        onShowItem(item)
    }

    const addToBasket = (item) => {
        const newItem = {...item, count: 1}
        onBuyClick(newItem)
    }

    return (
        <div className="item_card">
            <h3>{description}</h3>
            <img src={url} alt={description} height='150px' width='110px'/>
            <p>Price: {price} €</p>
            <button onClick={() => addToBasket(item)} type="button">add to basket</button>
            <button onClick={() => showMore(item)} type="button">view more</button>
        </div>
    );
};

export default ItemCard;