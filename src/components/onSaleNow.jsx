import ProductCard from "./productCard"


export default function OnSaleNow(){
    return(
        <div>
        <h1>On Sale Now</h1>
        <ProductCard
            name = "MacBook Air"
            image ="https://picsum.photos/id/1/200/300"
            price = "$799"
        />

        <ProductCard
            name = "Iphone"
            image ="https://picsum.photos/id/3/200/300"
            price = "$999"
        />

        <ProductCard
            name = "Shoes"
            image ="https://picsum.photos/id/21/200/300"
            price = "$389"
        />
        </div>
    )
}