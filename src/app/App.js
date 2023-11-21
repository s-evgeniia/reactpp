<<<<<<< Updated upstream
import Navigation from "../widgets/navigation/navigation";
import ItemsList from "../pages/items-list/items-list";
import React from "react";
import {items} from "../data";
import ItemPage from "../pages/item/item-page";
import Basket from "../pages/basket/basket";
import {AppRoute} from "../settings";
import "./style.css"

=======
import Navigation from "../components/Navigation";
import ItemsList from "../components/ItemsList";
import React from "react";
import {items} from "../data";
import ItemPage from "../components/ItemPage";
import Basket from "../components/Basket";
import {AppRoute} from "../settings";
import "./style.css"
>>>>>>> Stashed changes

function App() {

    const [showItem, setShowItem] = React.useState([]);

    const [basket, setBasket] = React.useState([]);

    const [page, setPage] = React.useState(AppRoute.All_Items)

    const mItems = [...items].filter((i) => i.gender !== 'female')
    const wItems = [...items].filter((i) => i.gender !== 'male')

    const showMore = (item) => {
        changePage('Item_Page')
        setShowItem(item)
    }
    const addToBasket = (item) => {
        const {title, count} = item;

        let cond = basket.some(function (e){
            return e.title === title
        })
        if (cond){
            const findItem = basket.find(el => el.title === title)
            findItem.count = findItem.count + count
            setBasket([...basket])
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
            case 'Item_Page':
                return setPage(AppRoute.Item_Page)
            default:
                return setPage(AppRoute.All_Items)
        }
    }

    const removeItem = (item) => {
        setBasket(basket.filter(i => i.id !== item.id))
    }

    function updateCounter(item, newCounterValue) {
        item.count = newCounterValue
        setBasket([...basket])
    }

    const getPage = (route) => {
        switch (route) {
            case AppRoute.All_Items:
                return <>
                    <ItemsList
                        items={items}
                        onShowItem={showMore}
                        basket={basket}
                        onChange={changePage}
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
                        basket={basket}
                        onChange={changePage}
                    />
                </>
            case AppRoute.Men:
                return <>
                    <ItemsList
                        items={mItems}
                        onShowItem={showMore}
                        basket={basket}
                        onChange={changePage}
                    />
                </>
            case AppRoute.Item_Page:
                return <>
                    <ItemPage
                        showItem={showItem}
                        onAddToBasket={addToBasket}
                        basket={basket}
                        changePage={changePage}
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
