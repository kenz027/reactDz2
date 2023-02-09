import ShopCard from "./ShopCard"

export default function CardsView(props){
    return (
        <ul className="cards-view">
            {props.cards.map((card, i)=>{
                return <ShopCard img={card.img} title={card.name} color={card.color} price={card.price} key={`shopCard${i}`} />
            })}
        </ul>
    )
}