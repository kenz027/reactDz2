export default function ShopItem(props){
    return <li className="shop-item">
        <img src={props.img}  className='shop-item_img product__img'/>
        <h2 className='shop-item__title product__title'>{props.title}</h2>
        <p className='shop-item__color product__color'>{props.color}</p>
        <p className='shop-item__price product__price'>${props.price}</p>
        <button className='shop-item__button product__btn'>Add to Cart</button>
    </li>
}