import React, {useEffect} from 'react';

const ItemCard = ({description, url, price, item, onShowItem, onBuyClick, basket}) => {
    const [bought, setBought] = React.useState(basket.some(function (e) {
        return e.url === url
    }))

    const showMore = (item) => {
        onShowItem(item)
    }

    const addToBasket = (item) => {
        const newItem = {...item, count: 1}
        onBuyClick(newItem)
        setBought(true)

    }

    const itemsInBasket = basket.find(el => el.url === url)

    return (
        <div className="item_card">
            <h3>{description}</h3>
            <img src={url} alt={description} height='150px' width='110px'/>
            <p>Price: {price} €</p>
            {bought ?
                <>
                    <p>{itemsInBasket.count} {itemsInBasket.count === 1 ? 'Item in Basket' : 'Items in Basket'}</p>
                    <button
                        onClick={() => addToBasket(item)}
                        type="button"
                    >
                        add more
                    </button>
                </>
                : <button
                    onClick={() => addToBasket(item)}
                    type="button"
                >
                    add to basket
                </button>
            }

            <button onClick={() => showMore(item)} type="button">view more</button>
        </div>
    );
};

export default ItemCard;