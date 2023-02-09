export default function ShopCard(props){
    return <li className="shop-card">
    <h2 className='shop-card__title product__title'>{props.title}</h2>
    <p className='shop-card__color product__color'>{props.color}</p>
    <img src={props.img}  className='shop-card_img product__img'/>
    <p className='shop-card__price product__price'>${props.price}</p>
    <button className='shop-card__button product__btn'>Add to Cart</button>
</li>
}