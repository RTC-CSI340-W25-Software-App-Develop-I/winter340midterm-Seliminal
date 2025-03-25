import { assert } from "chai";

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
    image: "./images/avitar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
const average = calculateStarAverage(reviews);
    assert.strictEqual(average, 3); 

    it("should return NaN for empty review arrays", function() {
      const emptyReviews = [];
      const average = calculateStarAverage(emptyReviews);
      assert.isNaN(average);
    });