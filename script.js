const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTrans() {
  //click functions

  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }
  //Sections active class
  allSections.addEventListener("click", (e) => {
    //Taking the data-id sets and putting them into a variable called id
    const id = e.target.dataset.id;
    if (id) {
      //remove selected from the other
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      //hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      //show a section
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}
pageTrans();
