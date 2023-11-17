import Navigation from "./components/Navigation";
import ItemsList from "./components/ItemsList";
import React, {useEffect} from "react";
import {items} from "./data";
import ItemPage from "./components/ItemPage";
import Basket from "./components/Basket";
import {AppRoute} from "./settings";

function App() {
    const [showItem, setShowItem] = React.useState([]);
    const [modal, setModal] = React.useState(false);
    const [basket, setBasket] = React.useState([]);
    const [page, setPage] = React.useState(AppRoute.All_Items)

    const mItems = [...items].filter((i) => i.gender !== 'female')
    const wItems = [...items].filter((i) => i.gender !== 'male')

   /* useEffect(() => {
        setBasket(basket)
    const showMore = (item) => {
        setShowItem(item)
        setModal(true)
    }
    const addToBasket = (item) => {
        const {title, count} = item;

        let cond = basket.some(function (e){
            return e.title === title
        })
        if (cond){
            const findItem = basket.find(el => el.title === title)
            findItem.count = findItem.count + count
        }else {
            setBasket([...basket, item])
        }
    }
    const changePage = (id) => {
        switch (id) {
            case 'Basket':
                return setPage(AppRoute.Basket)
            case 'Main':
                return setPage(AppRoute.All_Items)
            case 'Women':
                return setPage(AppRoute.Women)
            case 'Men':
                return setPage(AppRoute.Men)
            default:
                return setPage(AppRoute.All_Items)
        }
    }

    const removeItem = (item) => {
        setBasket(basket.filter(i => i.id !== item.id))
    }

    function updateCounter(item, newCounterValue) {
        item.count = newCounterValue
        let basketCopy = [...basket] // doesn't work if using same instance
        setBasket(basketCopy)
    }

    const getPage = (route) => {
        switch (route) {
            case AppRoute.All_Items:
                return <>
                    <ItemsList
                        items={items}
                        onShowItem={showMore}
                        onBuyClick={addToBasket}
                        basket={basket}
                    />
                    <ItemPage
                        showItem={showItem}
                        visible={modal}
                        setVisible={setModal}
                        onAddToBasket={addToBasket}
                        basket={basket}
                    />
                    </>
            case AppRoute.Basket:
                return <>
                        <Basket basket={basket} onRemove={removeItem} updateCounter={updateCounter}/>
                    </>
            case AppRoute.Women:
                return <>
                    <ItemsList
                        items={wItems}
                        onShowItem={showMore}
                        onBuyClick={addToBasket}
                        basket={basket}
                    />
                    <ItemPage
                        showItem={showItem}
                        visible={modal}
                        setVisible={setModal}
                        onAddToBasket={addToBasket}
                        basket={basket}
                    />
                </>
            case AppRoute.Men:
                return <>
                    <ItemsList
                        items={mItems}
                        onShowItem={showMore}
                        onBuyClick={addToBasket}
                        basket={basket}
                    />
                    <ItemPage
                        showItem={showItem}
                        visible={modal}
                        setVisible={setModal}
                        onAddToBasket={addToBasket}
                        basket={basket}
                    />
                </>
            default:
                return null;
        }
    };

    return (
      <div>
        <Navigation onChangePage={changePage}/>
          {getPage(page)}
      </div>
  );
}

export default App
