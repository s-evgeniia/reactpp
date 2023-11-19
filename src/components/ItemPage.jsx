import React from 'react';

const ItemPage = ({showItem, onAddToBasket, basket, changePage}) => {
    const [count, setCount] = React.useState(1)

    const [bought, setBought] = React.useState(basket.some(function (e) {
        return e.url === showItem.url
    }))

    const addToBasket = (showItem, count) => {
        const newItemsInBasket = {...showItem, count: count}
        onAddToBasket(newItemsInBasket)
        setCount(1)
        setBought(true)
    }

    const itemsInBasket = basket.find(el => el.url === showItem.url)

    return (
        <div className="item_page">
            <div className="item_page_flex">
                <h2>{showItem.title}</h2>
                <img src={showItem.url} alt={showItem.description} height='300px' width='auto' />
                <p>{showItem.description}</p>
                <p>Price: {showItem.price} €</p>
                <p>Colour: {showItem.color}</p>
            </div>
            <div className="item_page_flex item_page_btns">
                <div className="item_page_counter">
                    <button
                        style={{height: '25px', width: '25px'}}
                        type="button"
                        onClick={() => setCount(count - 1)}
                        disabled={count === 1}
                    > - </button>
                    <form style={{fontSize: '20px'}}>{count} </form>
                    <button
                        style={{height: '25px', width: '25px'}}
                        type="button"
                        onClick={() => setCount(count + 1)}
                    > + </button>
                </div>
                {bought ?
                    <>
                        <button
                            className="page_cont_btn"
                            type="button"
                            onClick={() => addToBasket(showItem, count)}
                        >
                            add more
                        </button>
                        <p className="notification_b"> {itemsInBasket.count} in basket</p>
                        <button
                            className="page_cont_btn"
                            type="button"
                            onClick={() => changePage('Basket')}
                        >
                            go to basket
                        </button>

                    </>
                    : <button
                        className="page_cont_btn"
                        type="button"
                        onClick={() => addToBasket(showItem, count)}
                    >
                        add to basket
                    </button>
                }
            </div>

        </div>
    );
};

export default ItemPage;