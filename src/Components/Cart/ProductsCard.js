import { ContainerProductsCard } from "./style"



export const Card_Products = (props) => {
    return(
        <ContainerProductsCard>
            <div className="card-image">
                <img src={props.product.imageUrl} />
            </div>
            
            <div className="card-text">
                <p>{props.product.name}</p>
                <div className="card-text-prices">
                    <p>{`R$ ${(props.product.price * 0.01).toFixed(2).split(".").join(",")}`}</p>
                    <p>{`R$ ${(props.product.sellingPrice * 0.01).toFixed(2).split(".").join(",")}`}</p>
                </div>
            </div>
        </ContainerProductsCard>
    )
}