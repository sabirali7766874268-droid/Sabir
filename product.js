function loadProducts(){

    let products = JSON.parse(localStorage.getItem("products")) || [];
    let table = document.getElementById("productTable");

    table.innerHTML = "";

    products.forEach((p,index)=>{
        table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${p.name}</td>
            <td>${p.price}</td>
            <td>${p.category}</td>
            <td>
                <button class="delete" onclick="deleteProduct(${index})">Delete</button>
            </td>
        </tr>`;
    });
}

function deleteProduct(index){
    let products = JSON.parse(localStorage.getItem("products"));
    products.splice(index,1);
    localStorage.setItem("products", JSON.stringify(products));
    loadProducts();
}

// Page load par run hoga
loadProducts();