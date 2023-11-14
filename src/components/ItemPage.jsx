import React from 'react';

const ItemPage = ({showItem, visible, setVisible}) => {
    const [count, setCount] = React.useState(1)
    return (
        <div className={`modal ${visible ? 'active' : ''}`} onClick={() => setVisible(false) & setCount(1)}>
            <div  className="modalContent" onClick={(e) => e.stopPropagation()}>
                   <h2>{showItem.title}</h2>
                   <img src={showItem.url} alt={showItem.description} height='300px' width='220px' />
                   <p>{showItem.description}</p>
                   <p>Price: {showItem.price} €</p>
                   <div>
                       <button type="button" onClick={() => setCount(count - 1)} disabled={count === 1}> - </button>
                       <form onInput="null">{count} </form>
                       <button type="button" onClick={() => setCount(count + 1)}> + </button>
                   </div>
                   <button type="submit" >add to basket</button>
            </div>
        </div>
    );
};

export default ItemPage;