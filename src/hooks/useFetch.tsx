import { useEffect, useState } from "react";
import getProducts from "../helpers/getData";
import { ProductFetch, ProductItem } from "../interfaces/interfaceApp";

const useFetch = () => {
    const [data, setData] = useState<ProductFetch>({
        products: [],
        isLoading: true,
        isError: false
    });

    useEffect(()=> {
        //useEffect envia una funcion y se le pasa una lista de dependencias para indicarle en que momento se hara el efecto
        getProducts()
        .then(data => {

            const customData = data .map((product: ProductItem) => ({ ...product, description: product.description.substring(0,55)}))
            setData({
                products: data,
                isLoading: false,
                isError: false
            })
        })
        .catch(err => {
            setData({
                products: [],
                isLoading: false,
                isError: true
            })
        })
    },[]);
    //Se le pasa el objeto vacio para que solo lo haga una sola vez

    return data;
}

export default useFetch;
