window.onscroll = function () {
  let nav = document.querySelector("nav");
  let signUp = document.querySelector("#sign-up");

  if (window.pageYOffset) {
    nav.classList.add("nav-bg");
    signUp.classList.remove("btn-primary--invert");
  } else if (nav.classList.contains("nav-transparent")) {
    nav.classList.remove("nav-bg");
    signUp.classList.add("btn-primary--invert");
  }
};

function capitalize(str) {
  return str.replace(/^\w/, (c) => c.toUpperCase());
}

function openNav() {
  let drawer = document.getElementsByClassName("drawer")[0];
  drawer.style.transform = `translateX(${0}px)`;
  drawer.style.transition = "0.5s";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementsByClassName(
    "drawer"
  )[0].style.transform = `translateX(${-300}px)`;
  document.body.style.backgroundColor = "white";
}

function toggleQuestion(element) {
  let parent = element.parentElement;
  let height = 0;
  let children = parent.children;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    height += child.clientHeight;
  }
  if (parent.classList.contains("answer__expanded")) {
    parent.classList.remove("answer__expanded");
    parent.style.height = 55 + "px";
  } else {
    parent.classList.add("answer__expanded");
    parent.style.height = height + "px";
  }
}

function setTierLength(tier) {
  document
    .getElementsByClassName("tier-selected")[0]
    .classList.remove("tier-selected");
  document.getElementById(tier).classList.add("tier-selected");

  let tiers = document.getElementsByClassName("pricing-card");

  for (let i = 0; i < tiers.length; i++) {
    let priceCard = tiers[i];
    priceCard.getElementsByTagName("small")[0].textContent = capitalize(tier);
    let price = priceCard.getElementsByTagName("span")[0];

    if (priceCard.id === "basic") {
      price.textContent = `$${tier === "monthly" ? "19.99" : "199.99"}`;
    } else if (priceCard.id === "premium") {
      price.textContent = `$${tier === "monthly" ? "49.99" : "499.99"}`;
    }
  }
}
