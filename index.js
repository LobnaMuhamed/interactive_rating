var my_li = document.querySelectorAll("ul li");
var my_btn = document.querySelector('button[type="submit"]');
var rateSection = document.querySelector("section.rate");
var stateSection = document.querySelector("section.state");
var msgResult = document.querySelector(".rate_result h3");

// Select Rate
var num
my_li.forEach((ele) => {
  ele.addEventListener("click", () => {
    my_li.forEach((ele) => {
      ele.classList.remove("active");
    });
    ele.classList.add("active");
    num = ele.getAttribute("id").split("_");
  });
});

// Submit Rate

my_btn.onclick = () => {
  if (num) {
    rateSection.style.display = "none";
    stateSection.style.display = "block";
    msgResult.innerHTML = `You selected ${num[1]} from ${my_li.length}`;
  } else {
    console.log("please choose rate :)");
  }
};
