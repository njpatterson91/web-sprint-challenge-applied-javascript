// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
import axios from "axios";

const cardsEntryPoint = document.querySelector(".cards-container");

function cards(props) {
  //instantiating
  const divCard = document.createElement("div");
  const divHeadline = document.createElement("div");
  divHeadline.textContent = props.headline;
  const divAuthor = document.createElement("div");
  const divImg = document.createElement("div");
  const imgSrc = document.createElement("img");
  imgSrc.src = props.authorPhoto;
  const authSpan = document.createElement("span");
  authSpan.textContent = props.authorName;
  //applying content

  //setting styles
  divCard.classList.add("card");
  divHeadline.classList.add("headline");
  divAuthor.classList.add("author");
  divImg.classList.add("img-container");
  //consturcting object
  divCard.appendChild(divHeadline);
  divCard.appendChild(divAuthor);
  divAuthor.appendChild(divImg);
  divImg.appendChild(imgSrc);
  divAuthor.appendChild(authSpan);
  divCard.addEventListener("click", function (event) {
    console.log(props.headline);
  });
  return divCard;
}
function getArticlesDefault() {
  axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((props) => {
      const data = props.data.articles;
      for (const i in data) {
        //console.log("test", data[i]);
        for (const j in data[i]) {
          //console.log(data[i][j]);
          cardsEntryPoint.appendChild(cards(data[i][j]));
        }
      }
    })
    .catch((err) => {
      console.log("This aint it chief", err);
    });
}
getArticlesDefault();
//Below this line is stretch goals

//Function to clear children from page
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
//Creates javascript article children on page
function getArticlesSpecificJavascript() {
  axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((props) => {
      const data = props.data.articles.javascript;
      for (const i in data) {
        //console.log("testing", data[i]);
        cardsEntryPoint.appendChild(cards(data[i]));
      }
    })
    .catch();
}
//Creates bootstrap article children on page
function getArticlesSpecificBootstrap() {
  axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((props) => {
      const data = props.data.articles.bootstrap;
      for (const i in data) {
        //console.log("testing", data[i]);
        cardsEntryPoint.appendChild(cards(data[i]));
      }
    })
    .catch();
}
//Creates technology article children on page
function getArticlesSpecificTechnology() {
  axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((props) => {
      const data = props.data.articles.technology;
      for (const i in data) {
        //console.log("testing", data[i]);
        cardsEntryPoint.appendChild(cards(data[i]));
      }
    })
    .catch();
}
//Creates jquery article children on page
function getArticlesSpecificJquery() {
  axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((props) => {
      const data = props.data.articles.jquery;
      for (const i in data) {
        //console.log("testing", data[i]);
        cardsEntryPoint.appendChild(cards(data[i]));
      }
    })
    .catch();
}
//Creates node article children on page
function getArticlesSpecificNode() {
  axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((props) => {
      const data = props.data.articles.node;
      for (const i in data) {
        //console.log("testing", data[i]);
        cardsEntryPoint.appendChild(cards(data[i]));
      }
    })
    .catch();
}
//event listener to check if articles need to be changed
document.addEventListener("click", function (event) {
  if (event.target.textContent === "javascript") {
    console.log("testing");
    removeAllChildNodes(cardsEntryPoint);
    getArticlesSpecificJavascript();
  } else if (event.target.textContent === "bootstrap") {
    removeAllChildNodes(cardsEntryPoint);
    getArticlesSpecificBootstrap();
  } else if (event.target.textContent === "technology") {
    removeAllChildNodes(cardsEntryPoint);
    getArticlesSpecificTechnology();
  } else if (event.target.textContent === "jquery") {
    removeAllChildNodes(cardsEntryPoint);
    getArticlesSpecificJquery();
  } else if (event.target.textContent === "node.js") {
    removeAllChildNodes(cardsEntryPoint);
    getArticlesSpecificNode();
  }
});
