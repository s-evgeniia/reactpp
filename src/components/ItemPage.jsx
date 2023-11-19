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
        <div className="modal">
            <div  className="modalContent">
                   <h2>{showItem.title}</h2>
                   <img src={showItem.url} alt={showItem.description} height='300px' width='auto' />
                   <p>{showItem.description}</p>
                   <p>Price: {showItem.price} €</p>
                   <div>
                       <button
                           type="button"
                           onClick={() => setCount(count - 1)}
                           disabled={count === 1}
                       > - </button>
                       <form>{count} </form>
                       <button
                           type="button"
                           onClick={() => setCount(count + 1)}
                       > + </button>
                   </div>
                {bought ?
                    <>
                        <button
                            type="button"
                            onClick={() => addToBasket(showItem, count)}
                        >
                            add more
                        </button>
                        <p className="notification_b"> {itemsInBasket.count} in basket</p>
                        <button
                            type="button"
                            onClick={() => changePage('Basket')}
                        >
                            go to basket
                        </button>

                    </>
                    : <button
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