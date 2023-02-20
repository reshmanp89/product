function login()
{
    uname=u1.value;
    localStorage.setItem("name",uname)
    window.location="home.html"
    
}
function addProduct()
{
    product={proname:pname.value,proid:pid.value,proprice:price.value}
    if(product.proid in localStorage)
    
        alert("produt already exist")

    
    localStorage.setItem(product.proid,JSON.stringify(product))
}
function displayProduct()
{
    productid=searchid.value
    if(productid in localStorage)
    {
        productdetail=JSON.parse(localStorage.getItem(productid))
        result.innerHTML=`<h3 class="text-secondary">product name:${productdetail.proname}</h3>
        <h3 class="text-secondary">product id:${productdetail.proid}</h3>
        <h3 class="text-secondary">price${productdetail.proprice}</h3>`
    }
    else{
        alert("product is not found")
        result.innerHTML=""

    }
}
function logOut()
{
   localStorage.removeItem("name")
   window.location="index.html"
}