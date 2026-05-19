document.getElementById("addBtn").addEventListener("click", function(){

    let name = document.getElementById("name").value.trim();
    let price = document.getElementById("price").value.trim();
    let category = document.getElementById("category").value.trim();

    if(name === "" || price === "" || category === ""){
        alert("Fill all fields!");
        return;
    }

    let products = JSON.parse(localStorage.getItem("products")) || [];

    let newProduct = {
        name: name,
        price: price,
        category: category
    };

    products.push(newProduct);

    localStorage.setItem("products", JSON.stringify(products));

    alert("Product Added ✅");

    // clear inputs
    document.getElementById("name").value="";
    document.getElementById("price").value="";
    document.getElementById("category").value="";
});