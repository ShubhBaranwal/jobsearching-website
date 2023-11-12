// https://preview.colorlib.com/#jobfinderportal

let data = [
  {
    JobName: 'Software Developer',
    category: 'IT-ITES',
    companyName: "Career Point",
    place: 'Chennai, Tamil Nadul',
    salary: '₹8,00,000',
    dataOfPosting: 'Today',
    jobType: 'permanent',
    Experience: '2-3'

  },
  {
    JobName: 'Manager IT',
    category: 'IT-ITES',
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
    category: 'IT-ITES',
    companyName: "Crystal Televentures",
    place: 'Noida , Uttar Pradesh',
    salary: '4,00,000',
    dataOfPosting: 'Last-3-days',
    jobType: 'Remote',
    Experience: '1-2'

  },
  {
    JobName: 'Front End Doveloper',
    category: 'IT-ITES',
    companyName: "SEO Guestpost Consultant (WFH)",
    place: 'Bengaluru, Karnataka',
    salary: '5,00,000',
    dataOfPosting: 'Last-4-days',
    jobType: 'PartTime',
    Experience: '2-3'

  },
  {
    JobName: 'Digital Marketer',
    category: 'IT-ITES',
    companyName: "ravel Retail Services Pri",
    place: 'Bangalore Rural,',
    salary: '1,25,000',
    dataOfPosting: 'Today',
    jobType: 'PartTime',
    Experience: '4-5'

  },
  {
    JobName: 'Telecom Engineer',
    category: 'TELECOM',
    companyName: "LT Technology Services",
    place: 'Delhi',
    salary: '1,50,000',
    dataOfPosting: 'Last-2-days',
    jobType: 'FullTime',
    Experience: '2-3'

  },
  {
    JobName: 'System Integration - ELV/Telecom System Engineer',
    category: 'TELECOM',
    companyName: "Teksol Engineering Private Limited",
    place: 'Kochi, Kerala',
    salary: '15,00,000',
    dataOfPosting: 'Last-3-days',
    jobType: 'PartTime',
    Experience: '1-2'

  },
  {
    JobName: 'PMO Manager - Telecom Experience',
    category: 'TELECOM',
    companyName: "Avacend Solutions",
    place: 'Gurgaon, Haryana',
    salary: '12,00,000',
    dataOfPosting: 'Last-2-days',
    jobType: 'Freelance',
    Experience: '2-3'

  },
  {
    JobName: 'Installation Manager - Telecom',
    category: 'TELECOM',
    companyName: "LT Technology Services",
    place: 'Delhi',
    salary: '1,00,000',
    dataOfPosting: 'Last-3-days',
    jobType: 'Freelance',
    Experience: '2-3'

  },
  {
    JobName: 'Plant Head',
    category: 'AUTOMOBILE',
    companyName: "STALLION AUTO PARTS P LTD",
    place: 'Lucknow, Uttar Pradesh',
    salary: '6,00,000',
    dataOfPosting: 'Last-3-days',
    jobType: 'FullTime',
    Experience: '4-5'

  },
  {
    JobName: 'Tata motors Work Shop Manager',
    category: 'AUTOMOBILE',
    companyName: "SB Cars Pvt. Ltd.",
    place: 'Kanpur, Uttar Pradesh',
    salary: '3,00,000',
    dataOfPosting: 'Last-3-days',
    jobType: 'FullTime',
    Experience: '1-2'

  },
  {
    JobName: 'Workshop Manager',
    category: 'AUTOMOBILE',
    companyName: "Shunty bunty motors Pvt Ltd",
    place: 'Kanpur, Uttar Pradesh',
    salary: '3,00,000',
    dataOfPosting: 'Last-3-days',
    jobType: 'PartTime',
    Experience: '2-3'

  },
  {
    JobName: 'General Manager/Service Manager',
    category: 'AUTOMOBILE',
    companyName: "Ashok Auto Sales",
    place: 'Ghaziabad, Uttar Pradesh',
    salary: '2,00,000',
    dataOfPosting: 'Last-4-days',
    jobType: 'FullTime',
    Experience: '3-4'

  },
  {
    JobName: 'PDI Manager',
    category: 'AUTOMOBILE',
    companyName: "Rohit Automobiles",
    place: 'Bhojpur, Uttar Pradesh',
    salary: '4,00,000',
    dataOfPosting: 'Last-4-days',
    jobType: 'FullTime',
    Experience: '4-5'

  },
]
let jobListing = document.querySelector(".job-listing-page");












for (let i of data) {
  jobListing.innerHTML += `
    <div class="row job-section mt-5  hide cards ${i.category} ${i.jobType} ${i.Experience} ${i.dataOfPosting}">
     <div class="col-lg-1 col-md-3">
        <img src="job-list1.png" class="w-75 mt-3" alt="">
    </div>
    <div class="col-lg-3 mt-2  col-md-3">
        <h3 class="mid">${i.JobName}</h3>
        <h5 class="mid">${i.companyName}</h5>
    </div>
    <div class="col-lg-2 col-md-3 mt-3 text-info display-5">
        <h5 class="mid">${i.place}</h5>
    </div>
    <div class="col-lg-3 mt-3 col-md-3 text-light">
        <h5 class="mid">Salary : ${i.salary}</h5>
        <h7 class="mid text-center">Experience : ${i.Experience} Years</h7>
    </div>
    <div class="col-lg-2 mt-3">
        <button class="job-btn"> ${i.jobType}</button>
        <h6 class="mid"> ${i.dataOfPosting} </h6>
        <h6 class="mid text-center"> ${i.category} </h6>
    </div>
    </div>
    `
}



//parameter passed from button (Parameter same as category)
function filterProduct(value) {

  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".cards");
  //loop through all cards
  elements.forEach((element) => {

    //display all cards on 'all' button click
    if (value == "all") {

      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });

}
function liveSearch() {
  // Locate the card elements
  let cards = document.querySelectorAll('.job-section')
  // Locate the search input
  let search_query = document.getElementById("searchbox").value;
  // Loop through the cards
  for (var i = 0; i < cards.length; i++) {
    // If the text is within the card...
    if (cards[i].innerText.toLowerCase()
      // ...and the text matches the search query...
      .includes(search_query.toLowerCase())) {
      // ...remove the `.is-hidden` class.
      cards[i].classList.remove("is-hidden");
    } else {
      // Otherwise, add the class.
      cards[i].classList.add("is-hidden");
    }
  }

}




//check box category list
function change() {
  


  let results = Array.from(document.querySelectorAll(".job-listing-page .job-section"))
  console.log(results);
  let tofjobChecked = document.querySelectorAll('.tofjob:checked');
  let ExpofjobChecked = document.querySelectorAll('.exp:checked');
  let DopofjobChecked = document.querySelectorAll('.dop:checked')
  
  results.forEach(function (result) {
    result.classList.add('hide')
  })

  if (tofjobChecked.length != 0) {
    filtertofjob(tofjobChecked)

  }
  if (ExpofjobChecked.length != 0) {
    filtertofjob(ExpofjobChecked)
  }
  if (DopofjobChecked.length != 0) {
    filtertofjob(DopofjobChecked)
  }

  function filtertofjob(ortofjobChecked) {
    results = Array.from(ortofjobChecked).reduce(function (sum, input) {
      const attrib = input.getAttribute('rel');
      return sum.concat(results.filter(function (result) {
        return result.classList.contains(attrib);
      }))
    }, [])
    
  }
  results.forEach(function (result) {
    result.classList.remove('hide')
  })

}
change()



window.onload = () => {
  filterProduct('all')
}



















