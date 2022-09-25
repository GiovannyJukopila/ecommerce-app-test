const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json(); //Trae arreglo de objetos en formato Json
    return data; 
}
export default getProducts;
