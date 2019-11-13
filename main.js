const addBtn = document.querySelector("#add");
const doneBtn = document.querySelector("#done");
const text = document.querySelector("input");
const olList = document.querySelector("ol");
const form = document.querySelector("#form");

text.focus();

addBtn.addEventListener("click", e => {
  e.preventDefault();

  console.log(e.key);

  if (text.value != "" && olList.childNodes.length <= 7) {
    const listItem = document.createElement("LI");
    listItem.style = "color : #000000";
    const listText = document.createTextNode(text.value);
    text.value = "";
    text.focus();
    listItem.appendChild(listText);
    olList.appendChild(listItem);
  }
  if (olList.childNodes.length > 6) {
    alert(
      "Sorry !!!! \n but you have to finish what you already have TO DO :P"
    );
  }
});

text.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

olList.addEventListener("click", e => {
  lii = e.target;

  console.log(e.target.style);
  if (e.target.style.color === "rgb(0, 0, 0)") {
    console.log("try");
    lii.style.color = "rgb(233, 75, 97)";
  } else {
    lii.style.color = "#000000";
  }
});

// doneBtn.disabled = true;
doneBtn.addEventListener("click", e => {
  let lii = document.querySelectorAll("li");
  lii.forEach(li => {
    if (li.style.color === "rgb(233, 75, 97)") {
      console.dir(li);
      li.remove();
    }
  });
  text.focus();
});

text.focus();
