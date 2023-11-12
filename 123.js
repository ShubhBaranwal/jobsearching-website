// const userName=document.querySelector(".search");


let productDiv=document.querySelector("#products");
let CategoryListDiv=document.querySelector(".shu #filter-btn-container");

let allCat=[];
let displayProduct=async (allCheckCat=[])=>{
    productDiv.innerHTML='';

    let product=await fetch('https://fakestoreapi.com/products');
    let finalproduct=await product.json();
    
    finalproduct.forEach((element)=>{
// category ke data show karne ke liyr
if(!allCat.includes(element.category)){
    CategoryListDiv.innerHTML+=`
    <label>
      <input type="checkbox"  value="${element.category}" onclick='categoryFilter()'> ${element.category}
      </label>  
      `
     allCat.push(element.category)
    }

if(allCheckCat.length==0){
    allCheckCat=allCat;
}
if(allCheckCat.includes(element.category)){

        
        productDiv.innerHTML+=`
                  <div class="product-item">
                  <img src="${element.image}" />
                  <h4>${element.category}</h4>
                  <p>Rs. ${element.price} | ${element.rating.rate}</p>
                  <h3 class="product-name">${element.title}</h3>
                  
                  </div>
        `
    }

    
    })
}




displayProduct()


let categoryFilter=()=>{
    let checkInput= document.querySelectorAll("input[type='checkbox']");
    let checkdata=[];
    checkInput.forEach((e)=>{
        if(e.checked){
            checkdata.push(e.value);
        }
    })
    displayProduct(checkdata);
}


const searchLogic = () =>{
  //selectors
  const container = document.querySelector('#products'),
  searchInput = document.querySelector('#mySearchField'),
  searchBox = document.querySelector('#searchBox');
  
  let productsList = [];

  fetch('https://fakestoreapi.com/products').then(items=>items.json()).then(d =>{
    d.forEach(elem => productsList.push(elem))
  })
 
  searchInput.addEventListener('input', e=>{
    let matches = [];
      container.style.display = "none";
      productsList.forEach(compared =>{
        if(e.target.value && compared.title.startsWith(e.target.value)){
          matches.push({id:compared.id,title:compared.title})
        }
      })
    
    searchBox.innerHTML = matches.map(item => `<h4 class="ps" id="${item.id}">
        ${item.title}
      </h4>`).join("")
  })
  
  searchBox.addEventListener('click', e=>{
    if(e.target.tagName === "H4"){
      const productID = Number(e.target.id);
      const element = productsList.find(product => product.id === productID);
      
      searchBox.innerHTML = `<div class="product-item">
                  <img src="${element.image}" />
                  <h4>${element.category}</h4>
                  <p>Rs. ${element.price} | ${element.rating.rate}</p>
                  <h3 class="product-name">${element.title}</h3>
         </div>
         <h4 id="close">close search</h4>`
    }
  
    document.querySelector('#close').addEventListener('click', ()=>{
      searchInput.value = "";
      searchBox.innerHTML = "";
      container.style.display = "flex";
    })
  }) //end of search func
  
}
searchLogic()




















