import React, {useEffect} from 'react';
import {TIMEOUT} from "../settings";

const ItemPage = ({showItem, visible, setVisible, onAddToBasket, basket}) => {
    const [count, setCount] = React.useState(1)

    const [bought, setBought] = React.useState(basket.some(function (e) {
        return e.url === showItem.url
    }))

    const addToBasket = (showItem, count) => {
        const newItemsInBasket = {...showItem, count: count}
        onAddToBasket(newItemsInBasket)
        setBought(true)
        setCount(1)
        /*setTimeout(() => {setVisible(false)}, TIMEOUT)*/
    }
    const itemsInBasket = basket.find(el => el.url === showItem.url)

    return (
        <div className={`modal ${visible ? 'active' : ''}`} onClick={() => setVisible(false) & setCount(1)}>
            <div  className="modalContent" onClick={(e) => e.stopPropagation()}>
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
                        <p>{itemsInBasket.count} {itemsInBasket.count === 1 ? 'Item in Basket' : 'Items in Basket'}</p>
                        <button
                            type="button"
                            onClick={() => addToBasket(showItem, count)}
                            style={{'height': '25px', 'width': '130px'}}
                        >
                            add more
                        </button>
                    </>
                    :<button
                            type="button"
                            onClick={() => addToBasket(showItem, count)}
                            style={{'height': '25px', 'width': '130px'}}
                    >
                        add to basket
                    </button>
                }

            </div>
        </div>
    );
};

export default ItemPage;