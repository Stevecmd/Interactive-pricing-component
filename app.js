let slider = document.querySelector(".slider");

let views = document.querySelector(".views");

let price = document.querySelector(".total-price");

let discount = document.getElementById("discount"),
  discountSwitch = document.querySelector(".switch-slider");

let prices = [8, 12, 16, 24, 36];

slider.oninput = function () {
  if (slider.value == 0) {
    views.innerHTML = "10,000 pageviews";
    price.innerHTML = "$" + prices[0] + ".00";
  }

  if (slider.value == 25) {
    views.innerHTML = "50,000 pageviews";
    price.innerHTML = "$" + prices[1] + ".00";
  } else if (slider.value == 50) {
    views.innerHTML = "100,000 pageviews";
    price.innerHTML = "$" + prices[2] + ".00";
  } else if (slider.value == 75) {
    views.innerHTML = "500,000 pageviews";
    price.innerHTML = "$" + prices[3] + ".00";
  } else if (slider.value == 100) {
    views.innerHTML = "1 Million pageviews";
    price.innerHTML = "$" + prices[4] + ".00";
  }
};

discountSwitch.addEventListener("click", function () {
  discountSwitch.classList.toggle("checked");

  if (discountSwitch.classList.contains("checked")) {
    if (slider.value == 0) {
      views.innerHTML = "10,000 pageviews";
      price.innerHTML = "$" + prices[0] * 0.25 + ".00";
    }

    if (slider.value == 25) {
      views.innerHTML = "50,000 pageviews";
      price.innerHTML = "$" + prices[1] * 0.25 + ".00";
    } else if (slider.value == 50) {
      views.innerHTML = "100,000 pageviews";
      price.innerHTML = "$" + prices[2] * 0.25 + ".00";
    } else if (slider.value == 75) {
      views.innerHTML = "500,000 pageviews";
      price.innerHTML = "$" + prices[3] * 0.25 + ".00";
    } else if (slider.value == 100) {
      views.innerHTML = "1 Million pageviews";
      price.innerHTML = "$" + prices[4] * 0.25 + ".00";
    }
  } else {
    if (slider.value == 0) {
      views.innerHTML = "10,000 pageviews";
      price.innerHTML = "$" + prices[0] + ".00";
    }

    if (slider.value == 25) {
      views.innerHTML = "50,000 pageviews";
      price.innerHTML = "$" + prices[1] + ".00";
    } else if (slider.value == 50) {
      views.innerHTML = "100,000 pageviews";
      price.innerHTML = "$" + prices[2] + ".00";
    } else if (slider.value == 75) {
      views.innerHTML = "500,000 page views";
      price.innerHTML = "$" + prices[3] + ".00";
    } else if (slider.value == 100) {
      views.innerHTML = "1 Million page views";
      price.innerHTML = "$" + prices[4] + ".00";
    }
  }
});