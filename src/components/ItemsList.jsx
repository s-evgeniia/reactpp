import React, {useEffect} from 'react';
import ItemCard from "./ItemCard";
import {types} from "../data";

const ItemsList = ({items, onShowItem, basket, onChange}) => {
    const [filtered, setFiltered] = React.useState(items)

    useEffect(() => {
        setFiltered(items)
    }, [items]);
    function filterItems(type) {
        if (type === 'all') {
            setFiltered(items)
        }
        else (setFiltered([...items].filter(i => i.type === type)))
    }
    return (
        <div>
            <div className="filter_btns">
                {types.map(({id, title}) => (<button className="filter_btn" key={id} type="button" onClick={() => filterItems(id)}>{title}</button> ))}
            </div>


            <div className="items_list">
            {filtered.map((item) => (
                <ItemCard
                    description={item.title}
                    key={item.id}
                    url={item.url}
                    price={item.price}
                    onShowItem={onShowItem}
                    item={item}
                    basket={basket}
                    changePage={onChange}
                />))}
            </div>

        </div>
    );
};

export default ItemsList;


