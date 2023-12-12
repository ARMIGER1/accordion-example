var coll = document.getElementsByClassName("collapsible");
var i;

function show(collection) {
  console.log(collection.nextElementSibling);
}

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    show(coll[i]);
    // if (content.style.display === "block") {
    //   content.style.display = "none";
    // } else {
    //   content.style.display = "block";
    // }
  });
}

// alert("hello world");
// console.log(coll);