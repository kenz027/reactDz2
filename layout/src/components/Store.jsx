import { useState } from "react";
import CardsView from "./CardsView";
import IconSwitch from "./IconSwitch";
import ListView from "./ListView";

const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];
const Store = () => {
    const [icon_type, setIconType] = useState('view_list')
    const iconTypeHandler = () => {
        if (icon_type === 'view_list') setIconType('view_module')
        else if (icon_type === 'view_module') setIconType('view_list');
    }
    return (
        <>
            <IconSwitch icon={icon_type} onSwitch={() => iconTypeHandler()}/>
            {icon_type === 'view_list' ? <CardsView cards={products} /> : <ListView cards={products} />}
        </>
    )
}
export default Store;