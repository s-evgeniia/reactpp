import Navigation from "./components/Navigation";
import ItemsList from "./components/ItemsList";
import React from "react";
import {items} from "./data";
import ItemPage from "./components/ItemPage";

function App() {
    const [showItem, setShowItem] = React.useState([])
    const [modal, setModal] = React.useState(false)

    const showMore = (item) => {
        setShowItem(item)
        setModal(true)
    }

    return (
      <div>
        <Navigation />
        <ItemsList items={items} onShowItem={showMore}/>
        <ItemPage showItem={showItem} visible={modal} setVisible={setModal}/>
      </div>
  );
}

export default App;
