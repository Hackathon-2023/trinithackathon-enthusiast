let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color', color);
  }

});

// my code


let faqBoxContainer = document.querySelector("#faq-box-container");


const faqs = [
  {
    question: "What type of soil is best for growing plants?",
    answer: "A well-draining potting mix that contains a mixture of peat moss, perlite, and vermiculite is ideal for growing most plants."
  },
  {
    question: "How much water do plants need?",
    answer: "The amount of water that plants need varies depending on the type of plant and environmental conditions such as temperature and humidity. In general, it's best to water plants thoroughly and then wait until the top inch of soil is dry before watering again. Overwatering is a common issue that can lead to root rot."
  },
  {
    question: "How often should I fertilize my plants?",
    answer: "The frequency of fertilization depends on the type of plant and the fertility of the soil. As a general rule, it's best to fertilize plants every 4-6 weeks during the growing season, and then reduce the frequency or stop altogether during the winter."
  },
  {
    question: "What is the best way to get rid of pests on my plants?",
    answer: "There are several methods for controlling pests on plants, including the use of natural predators, physical barriers, and insecticidal soap. In severe cases, chemical pesticides may be necessary, but it's always best to use the least toxic option first."
  },
  {
    question: "How much light do plants need?",
    answer: "The amount of light that plants need depends on the type of plant, but in general, most plants do well in bright, indirect light. Some plants, such as succulents, can tolerate full sun, while others, such as ferns, prefer shade."
  },
  {
    question: "Why are the leaves on my plant turning yellow?",
    answer: "Yellowing leaves can be a sign of several issues, including overwatering, underwatering, nutrient deficiencies, and pest problems. It's best to diagnose the issue and take appropriate action, such as adjusting watering habits, fertilizing, or treating for pests."
  }
];




function generateFAQs(list){
  
  list.map( (faq) => {
   
    var newDiv = document.createElement("div");
newDiv.classList.add("box");

var newIcon = document.createElement("i");
newIcon.classList.add("fa");
newIcon.classList.add("fa-question-circle");
newIcon.setAttribute("aria-hidden", "true");

var newHeading = document.createElement("h3");
var headingText = document.createTextNode(faq.question);
newHeading.appendChild(headingText);

var newParagraph = document.createElement("p");
var paragraphText = document.createTextNode(faq.answer);
newParagraph.appendChild(paragraphText);

newDiv.appendChild(newIcon);
newDiv.appendChild(newHeading);
newDiv.appendChild(newParagraph);

faqBoxContainer.appendChild(newDiv);

  })

}


generateFAQs(faqs)
