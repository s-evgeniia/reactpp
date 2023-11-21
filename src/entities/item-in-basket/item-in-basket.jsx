import React from 'react';

const ItemInBasket = ({item, title, description, url, count, price, onRemove, updateCounter}) => {
    return (
        <div className="basketItem">
            <img src={url} width="90px" height="110px" alt={description}/>
            <div style={{'width':'150px'}}>
                <p>{title}</p>
                <p>Price: {price} €</p>

            </div>
            <div className="counter">
                <button
                    type="button"
                    onClick={() => updateCounter(count - 1)}
                    disabled={count === 1}
                > - </button>
                <p>{count}</p>
                <button
                    type="button"
                    onClick={() => updateCounter(count + 1)}
                > + </button>
            </div>
            <div className="price_counter">
                <button type="button" onClick={() => onRemove(item)}>delete</button>
                <p>Total Price: <b>{price*count} €</b></p>
            </div>
        </div>
    );
};

export default ItemInBasket;