import React from 'react';

const ItemInBasket = ({item, title, description, url, count, price, onRemove}) => {
    const [counter, setCounter] = React.useState(count)

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
                    onClick={() => setCounter(counter - 1)}
                    disabled={counter === 1}
                > - </button>
                <p>{counter}</p>
                <button
                    type="button"
                    onClick={() => setCounter(counter + 1)}
                > + </button>
            </div>
            <div className="price_counter">
                <button type="button" onClick={() => onRemove(item)}>delete</button>
                <p>Total Price: <b>{price*counter} €</b></p>
            </div>
        </div>
    );
};

export default ItemInBasket;