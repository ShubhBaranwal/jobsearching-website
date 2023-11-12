// // https://preview.colorlib.com/#jobfinderportal

let data = [
  {
    JobName: 'Software Developer',
    catagory: 'IT-ITES',
    companyName: "Career Point",
    place: 'Chennai, Tamil Nadul',
    salary: '₹8,00,000',
    dataOfPosting: 'Today',
    jobType: 'permanent',
    Experience: '2-3'

  },
  {
    JobName: 'Manager IT',
    catagory: 'IT-ITES',
    companyName: "Insight Enterprises",
    place: 'Gurgaon, Haryana',
    salary: '1,00,000',
    dataOfPosting: 'Last-2-days',
    jobType: 'FullTime'
    ,
    Experience: '3-4'
  },
  {
    JobName: 'Application Support Engineers',
    catagory: 'IT-ITES',
    companyName: "Crystal Televentures",
    place: 'Noida , Uttar Pradesh',
    salary: '4,00,000',
    dataOfPosting: 'Last-3-days',
    jobType: 'Remote',
    Experience: '1-2'

  },
  {
    JobName: 'Front End Doveloper',
    catagory: 'IT-ITES',
    companyName: "SEO Guestpost Consultant (WFH)",
    place: 'Bengaluru, Karnataka',
    salary: '5,00,000',
    dataOfPosting: 'Last-4-days',
    jobType: 'PartTime',
    Experience: '2-3'

  },
  {
    JobName: 'Digital Marketer',
    catagory: 'IT-ITES',
    companyName: "ravel Retail Services Pri",
    place: 'Bangalore Rural,',
    salary: '1,25,000',
    dataOfPosting: 'Today',
    jobType: 'PartTime',
    Experience: '4-5'

  },
  {
    JobName: 'Telecom Engineer',
    catagory: 'TELECOM',
    companyName: "LT Technology Services",
    place: 'Delhi',
    salary: '1,50,000',
    dataOfPosting: 'Last-2-days',
    jobType: 'FullTime',
    Experience: '2-3'

  },
  {
    JobName: 'System Integration - ELV/Telecom System Engineer',
    catagory: 'TELECOM',
    companyName: "Teksol Engineering Private Limited",
    place: 'Kochi, Kerala',
    salary: '15,00,000',
    dataOfPosting: 'Last-3-days',
    jobType: 'PartTime',
    Experience: '1-2'

  },
  {
    JobName: 'PMO Manager - Telecom Experience',
    catagory: 'TELECOM',
    companyName: "Avacend Solutions",
    place: 'Gurgaon, Haryana',
    salary: '12,00,000',
    dataOfPosting: 'Last-2-days',
    jobType: 'Freelance',
    Experience: '2-3'

  },
  {
    JobName: 'Installation Manager - Telecom',
    catagory: 'TELECOM',
    companyName: "LT Technology Services",
    place: 'Delhi',
    salary: '1,00,000',
    dataOfPosting: 'Last-3-days',
    jobType: 'Freelance',
    Experience: '2-3'

  },
  {
    JobName: 'Plant Head',
    catagory: 'AUTOMOBILE',
    companyName: "STALLION AUTO PARTS P LTD",
    place: 'Lucknow, Uttar Pradesh',
    salary: '6,00,000',
    dataOfPosting: 'Last-3-days',
    jobType: 'FullTime',
    Experience: '4-5'

  },
  {
    JobName: 'Tata motors Work Shop Manager',
    catagory: 'AUTOMOBILE',
    companyName: "SB Cars Pvt. Ltd.",
    place: 'Kanpur, Uttar Pradesh',
    salary: '3,00,000',
    dataOfPosting: 'Last-3-days',
    jobType: 'FullTime',
    Experience: '1-2'

  },
  {
    JobName: 'Workshop Manager',
    catagory: 'AUTOMOBILE',
    companyName: "Shunty bunty motors Pvt Ltd",
    place: 'Kanpur, Uttar Pradesh',
    salary: '3,00,000',
    dataOfPosting: 'Last-3-days',
    jobType: 'PartTime',
    Experience: '2-3'

  },
  {
    JobName: 'General Manager/Service Manager',
    catagory: 'AUTOMOBILE',
    companyName: "Ashok Auto Sales",
    place: 'Ghaziabad, Uttar Pradesh',
    salary: '2,00,000',
    dataOfPosting: 'Last-4-days',
    jobType: 'FullTime',
    Experience: '3-4'

  },
  {
    JobName: 'PDI Manager',
    catagory: 'AUTOMOBILE',
    companyName: "Rohit Automobiles",
    place: 'Bhojpur, Uttar Pradesh',
    salary: '4,00,000',
    dataOfPosting: 'Last-4-days',
    jobType: 'FullTime',
    Experience: '4-5'

  },
]




let jobListing = document.querySelector(".job-listing-page");
let cat=document.querySelector(".cate");

function displayProducts(products) {
  if (products.length > 0) {
    const product_details = products
      .map(
        (product) => `
        <div class="row job-section mt-5   cards ${product.catagory} ${product.jobType} ${product.Experience} ${product.dataOfPosting}">
     <div class="col-lg-1 col-md-3">
        <img src="job-list1.png" class="w-75 mt-3" alt="">
    </div>
    <div class="col-lg-3 mt-2  col-md-3">
        <h3 class="mid">${product.JobName}</h3>
        <h5 class="mid">${product.companyName}</h5>
    </div>
    <div class="col-lg-2 col-md-3 mt-3 text-info display-5">
        <h5 class="mid">${product.place}</h5>
    </div>
    <div class="col-lg-3 mt-3 col-md-3 text-light">
        <h5 class="mid">Salary : ${product.salary}</h5>
        <h7 class="mid text-center">Experience : ${product.Experience} Years</h7>
    </div>
    <div class="col-lg-2 mt-3">
        <button class="job-btn"> ${product.jobType}</button>
        <h6 class="mid"> ${product.dataOfPosting} </h6>
        <h6 class="mid text-center"> ${product.catagory} </h6>
    </div>
    </div>
  `
  
  )
  .join("");
  

      jobListing.innerHTML = product_details;
  } else {
    jobListing.innerHTML = "<h3>No Products Available</h3>";
  }
}
displayProducts(data)

function setCategories(){
  const allCategories=data.map((product)=>
  product.catagory);
 
  const catagories=[
    "All",
    ...allCategories.filter((product,index)=>{
      return allCategories.indexOf(product) === index;

    })
  ];
console.log(cat);
  cat.innerHTML=catagories.map((catagory)=> `<li>${catagory} </li>`).join("");
  
  cat.addEventListener('click',(e)=>{
    const selectedCatagory=e.target.textContent;
    
    selectedCatagory === "All" ? displayProducts(data) : displayProducts(data.filter((product) => product.catagory == selectedCatagory));
  });
  




}
displayProducts(data);
setCategories()






