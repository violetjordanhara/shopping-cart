const productsArray = [
{
    id: 1,
    title: "Peach pie",
    price: 2.99
},
{
    id: 2,
    title: "Strawberry pie",
    price: 3.99
},
{
    id: 3,
    title: "Blueberry pie",
    price: 1.99
}]

function getProductData(id){
    let productData = productsArray.find(product => product.id === id);
    if (productData == undefined){
        console.log("Product data does not exist for ID" + id);
    }
    return productData
};

export {productsArray, getProductData};