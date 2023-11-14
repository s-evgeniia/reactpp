import React from 'react';

const ItemCard = ({description, url, price, item, onShowItem}) => {

    const showMore = (item) => {
        onShowItem(item)
    }
    return (
        <div className="item_card">
            <h3>{description}</h3>
            <img src={url} alt={description} height='150px' width='110px'/>
            <p>Price: {price} €</p>
            <button type="button">buy</button>
            <button onClick={() => showMore(item)} type="button">view more</button>
        </div>
    );
};

export default ItemCard;