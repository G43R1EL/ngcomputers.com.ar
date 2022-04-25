// get collapse elements
const collapse = document.getElementsByClassName("collapse");

// add click event listener to collapse elements...
for (let i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function() {
    // this class is for icon changing plus / minus done on css
    this.classList.toggle("collapsed");
    // select the next element sibling... should be the collapsed contents
    let content = this.nextElementSibling;
    // alternate height
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}