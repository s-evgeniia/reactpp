import Navigation from "./components/Navigation";
import ItemsList from "./components/ItemsList";
import React from "react";
import {items} from "./data";
import ItemPage from "./components/ItemPage";
import Basket from "./components/Basket";
import {AppRoute} from "./settings";

function App() {
    const [showItem, setShowItem] = React.useState([]);
    const [modal, setModal] = React.useState(false);
    const [basket, setBasket] = React.useState([]);
    const [page, setPage] = React.useState(AppRoute.Main)
    const showMore = (item) => {
        setShowItem(item)
        setModal(true)
    }
    const addToBasket = (item) => {
        const {title, count} = item;
        let cond = basket.some(function (e){
            return e.title == title
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
                return setPage(AppRoute.Main)
            default:
                return setPage(AppRoute.Main)
        }
    }

    const removeItem = (item) => {
        setBasket(basket.filter(i => i.id !== item.id))
        console.log(basket)
    }

    const getPage = (route) => {
        switch (route) {
            case AppRoute.Main:
                return <>
                    <ItemsList
                        items={items}
                        onShowItem={showMore}
                        onBuyClick={addToBasket}
                    />
                    <ItemPage
                        showItem={showItem}
                        visible={modal}
                        setVisible={setModal}
                        onAddToBasket={addToBasket}
                    />
                    </>
            case AppRoute.Basket:
                return <>
                        <Basket basket={basket} onRemove={removeItem}/>
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
