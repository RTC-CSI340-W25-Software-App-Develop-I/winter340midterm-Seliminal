//Do not change //////////////////////////////////
import { calculateStarAverage } from "../src/logic.js";

const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//1. Append the reviews to the DOM
function renderReviews() {
  const reviewsContainer = document.querySelector(".reviews");
  console.log(reviewsContainer);

  reviewsContainer.innerHTML = "";

  reviews.forEach((review) => {
    const reviewHTML = `
      <div class="review_container">
        <img src="${review.image}" alt="${review.username}'s profile picture"/>
        <div>
          <p><strong>${review.username}</strong></p>
          <p>${review.star} stars</p>
          <p>${review.review}</p>
        </div>
      </div>
    `;

    console.log(reviewHTML);

    reviewsContainer.insertAdjacentHTML("beforeend", reviewHTML);
  });
}
renderReviews();

//2. Append new reviews to the DOM from the form
const reviewForm = document.querySelector("form");

reviewForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const image = document.getElementById("image").value;
  const star = parseInt(document.querySelector("#star").value);
  const review = document.getElementById("review").value;
     console.log(username, image, star, review);

  const newReview = { username, image, star, review };
  reviews.push(newReview);

  renderReviews();

  reviewForm.reset();
}