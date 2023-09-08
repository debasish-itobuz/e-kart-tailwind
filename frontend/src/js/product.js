// const title = document.getElementById('productTitle')

function getAll(){
    fetch("http://localhost:8060/product/get-all-products")
    .then((response)=>response.json())
    .then((json)=>{
        // console.log(json.data)
        document.getElementById("laptop").innerHTML = "";
      for (let i = 0; i <= json.data.length; i++) {
        document.getElementById("laptop").innerHTML += `
        <div class="">
                <h1 class="font-bold">${json.data[i].title}</h1>
                <p> ${json.data[i].description}</p>
                <p> ${json.data[i].price}</p>
                </div>
            `;
      }
    })
}
getAll()