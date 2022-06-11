window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

document.getElementsByClassName("nav-ul-a")[0].style.color = "#FFFF77";
document.getElementsByClassName("nav-ul-a")[0].style.borderBottom =
  "2px solid #FFFF77";
for (let i = 0; i < 7; i++) {
  document
    .getElementsByClassName("nav-ul-a")
    [i].addEventListener("click", function () {
      for (let j = 0; j < 7; j++) {
        document.getElementsByClassName("nav-ul-a")[j].style.color = "#fefefe";
        document.getElementsByClassName("nav-ul-a")[j].style.borderBottom =
          "none";
      }
      document.getElementsByClassName("nav-ul-a")[i].style.color = "#FFFF77";
      document.getElementsByClassName("nav-ul-a")[i].style.borderBottom =
        "2px solid #FFFF77";
    });
}

window.onscroll = function () {
  console.log(
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
  );
  ("use strict");

  // Home
  if (
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight) >=
      0 &&
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight) <
      0.154394
  ) {
    document.getElementsByClassName("nav-ul-a")[0].style.color = "#FFFF77";
    document.getElementsByClassName("nav-ul-a")[0].style.borderBottom =
      "2px solid #FFFF77";
  } else {
    document.getElementsByClassName("nav-ul-a")[0].style.color = "#fefefe";
    document.getElementsByClassName("nav-ul-a")[0].style.borderBottom = "none";
  }

  // About
  if (
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight) >=
      0.154394 &&
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight) <
      0.356295
  ) {
    document.getElementsByClassName("nav-ul-a")[1].style.color = "#FFFF77";
    document.getElementsByClassName("nav-ul-a")[1].style.borderBottom =
      "2px solid #FFFF77";
  } else {
    document.getElementsByClassName("nav-ul-a")[1].style.color = "#fefefe";
    document.getElementsByClassName("nav-ul-a")[1].style.borderBottom = "none";
  }

  // Projects
  if (
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight) >=
      0.356295 &&
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight) <
      0.451306
  ) {
    document.getElementsByClassName("nav-ul-a")[2].style.color = "#FFFF77";
    document.getElementsByClassName("nav-ul-a")[2].style.borderBottom =
      "2px solid #FFFF77";
  } else {
    document.getElementsByClassName("nav-ul-a")[2].style.color = "#fefefe";
    document.getElementsByClassName("nav-ul-a")[2].style.borderBottom = "none";
  }

  // Skills
  if (
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight) >=
      0.451306 &&
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight) <
      0.617577
  ) {
    document.getElementsByClassName("nav-ul-a")[3].style.color = "#FFFF77";
    document.getElementsByClassName("nav-ul-a")[3].style.borderBottom =
      "2px solid #FFFF77";
  } else {
    document.getElementsByClassName("nav-ul-a")[3].style.color = "#fefefe";
    document.getElementsByClassName("nav-ul-a")[3].style.borderBottom = "none";
  }

  // Certficate
  if (
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight) >=
      0.617577 &&
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight) <
      0.87886
  ) {
    document.getElementsByClassName("nav-ul-a")[4].style.color = "#FFFF77";
    document.getElementsByClassName("nav-ul-a")[4].style.borderBottom =
      "2px solid #FFFF77";
  } else {
    document.getElementsByClassName("nav-ul-a")[4].style.color = "#fefefe";
    document.getElementsByClassName("nav-ul-a")[4].style.borderBottom = "none";
  }

  // Resume
  if (
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight) >=
      0.87886 &&
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight) <
      0.973872
  ) {
    document.getElementsByClassName("nav-ul-a")[5].style.color = "#FFFF77";
    document.getElementsByClassName("nav-ul-a")[5].style.borderBottom =
      "2px solid #FFFF77";
  } else {
    document.getElementsByClassName("nav-ul-a")[5].style.color = "#fefefe";
    document.getElementsByClassName("nav-ul-a")[5].style.borderBottom = "none";
  }

  // Contact
  if (
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight) >=
    0.973872
  ) {
    document.getElementsByClassName("nav-ul-a")[6].style.color = "#FFFF77";
    document.getElementsByClassName("nav-ul-a")[6].style.borderBottom =
      "2px solid #FFFF77";
  } else {
    document.getElementsByClassName("nav-ul-a")[6].style.color = "#fefefe";
    document.getElementsByClassName("nav-ul-a")[6].style.borderBottom = "none";
  }
};
