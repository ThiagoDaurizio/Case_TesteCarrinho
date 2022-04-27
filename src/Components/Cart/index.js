import { useEffect, useState } from "react"
import cheaperCart from '../../Json/cheaperCart.json'
import expensiveCart from '../../Json/expensiveCart.json'
import { Card_Products } from "./ProductsCard"
import { ContainerCart } from "./style"

export const CompCart = (props) => {
    const [products, set_products] = useState(expensiveCart)

    useEffect(() => {
        if(props.freeShipping === true){
            set_products(expensiveCart)
        } else {
            set_products(cheaperCart)
        }

    }, [props.freeShipping])


    const renderList = products.items.map((item) => {
        return(
            <Card_Products product={item} key={item.id}/>
        )
    })


    const getTotalPrice = (total, items) =>{
        return total + items.sellingPrice
    }

    let totalValue
    
    if(products.length !== 0) {
        totalValue = products.items.reduce(getTotalPrice, 0)
    }

    totalValue  = totalValue * 0.01


    let freeShippingTag

    if(props.freeShipping || totalValue > 10){
        freeShippingTag = (
            <div className="cart-values-shipping">
            <p>Parabéns, sua compra tem frete grátis!</p>
            </div>
        )
    } else{
        freeShippingTag = (
            <div>
            <p></p>
            </div>
        )
    }
    
    return(
        <ContainerCart>
            <div className="cart-header">
                <p>Meu carrinho</p>
            </div>

            <div className="cart-items">
                {renderList}
            </div>

            <div className="cart-values">
                <div className="cart-values-total">
                    <div>
                        Total    
                    </div>
                    <div>
                        <p>R$ {totalValue.toFixed(2).split(".").join(",")}</p>
                    </div>
                </div>

                <div>
                    {freeShippingTag}
                </div>
            </div>

            <div className="cart-button">
                <button> Finalizar compra </button>
            </div>
        </ContainerCart>
    )
}