// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerEntryPoint = document.querySelector(".header-container");

function Header() {
  //Instantiating and setting content
  const divHeader = document.createElement("div");
  const dateSpan = document.createElement("span");
  dateSpan.textContent = "March 28, 2020";
  const headerH1 = document.createElement("h1");
  headerH1.textContent = "Lambda Times";
  const tempSpan = document.createElement("span");
  tempSpan.textContent = "98°";
  //Setting styles
  divHeader.classList.add("header");
  dateSpan.classList.add("span");
  tempSpan.classList.add("temp");
  //creating component structure
  divHeader.appendChild(dateSpan);
  divHeader.appendChild(headerH1);
  divHeader.appendChild(tempSpan);

  return divHeader;
}

headerEntryPoint.appendChild(Header());
