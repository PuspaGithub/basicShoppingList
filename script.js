const btn = document.querySelector("button");
const input = document.querySelector("#item");
const list = document.querySelector("ul");

btn.addEventListener("click", (e)=>{
  e.preventDefault();

  const myItem = input.value
  input.value = ""

  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");

  listText.textContent = myItem;
  listItem.appendChild(listText);
  listBtn.textContent = "Delete";
  listItem.appendChild(listBtn);
  list.appendChild(listItem)  

  listBtn.addEventListener("click", () => {
    list.removeChild(listItem)
  })
})