// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
import axios from "axios";

const tabsEntryPoint = document.querySelector(".topics");

function tabs(props) {
  //instantiating and setting content
  const divTabs = document.createElement("div");
  divTabs.textContent = props;
  //Setting styles
  console.log(props);
  divTabs.classList.add("tab");
  return divTabs;
}

axios
  .get("https://lambda-times-api.herokuapp.com/topics")
  .then((props) => {
    const titleArray = props.data.topics;
    titleArray.forEach((data) => {
      tabsEntryPoint.appendChild(tabs(data));
    });
  })
  .catch((err) => {
    console.log("whoops this aint it ", err);
  });
