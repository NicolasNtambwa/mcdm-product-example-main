
let productData = [];



// Opsætter vore html template.
const productTmpl = (product) => `<div class="product-item" id="${product.productId}">
    <h1>${product.title}</h1>
    <img src="/assets/products/${product.image}" />
    <div>${product.price}</div>
</div>`

const getList = (pathToList) => {

    console.log('1. Henter Liste')
    return fetch(pathToList)
    .then((response) => response.json())
    .catch((e) => {

        console.log('Her fanger vi eventuelle fejl. Prøv, at ændre filnavnet. udekriver selve fejlbeskeden. ->', e)

    })
}


const getProductFromList = (productId) => {

    console.log('3. Henter et enkelt product')
    console.log('productData', productData, productId)


    if(productData.length > 0) {
        let product = productData.find( (product) => product.productId = productId )

        console.log(product);

    }else {

        console.log('Ingen product data');


    }

   
    

}

getList('/data/products.json').then( (productList) => {

    console.log('2. Vi arbejder med listen')
    // Får fat i vores element
    let productListElement = document.querySelector('#productList');
    productData = productList;

    /*
        Vi tømmer vores elements indhold.
    */
    // productListElement.innerHTML = '';

    productList.map((prductItem) => {

        productListElement.insertAdjacentHTML('beforeend', productTmpl(prductItem))

    })

    
    getProductFromList('111-000');
})

    
getProductFromList('444-000');