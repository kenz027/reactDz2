import ShopItem from "./ShopItem"

export default function ListView(props){
    return (
        <ul className="list-view">
            {props.cards.map((card, i)=>{
                return <ShopItem img={card.img} title={card.name} color={card.color} price={card.price}  key={`shopItem${i}`} />
            })}
        </ul>
    )
}