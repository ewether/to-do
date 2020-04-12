// access class "item-list" from html to be used later
const itemList = document.querySelector(".item-list");
// access class "item-list li" from html to be used later
const listItem = document.querySelector(".item-list li");
// access class "user-input" from html to be used later
const userInput = document.querySelector(".user-input");
// access class "addBtn" from html to be used later
const addBtn = document.querySelector(".addBtn");


// when user clicks addBtn, their input is added to the itemList
addBtn.addEventListener("click", function() {

  // create brand new li node
  const newLi = document.createElement('LI');
  // user's input is now stored in liContent to be used in a second
  const liContent = document.createTextNode(userInput.value);
  // the user's input that is stored in liContent is being appended to the new li node
  newLi.appendChild(liContent);
  // append the new li node (containing the user's input) to the item-list
  itemList.appendChild(newLi);
  // clear input box after new list item is added
  userInput.value="";


  // user can click the new item to mark it as completed
    function done() {
      newLi.classList.toggle("completed");
    }
    newLi.addEventListener("click", done);
  //


  // user can delete the new li's
    const delBtn = document.createElement("button");
      delBtn.appendChild(document.createTextNode("Delete"));
      newLi.appendChild(delBtn);
      delBtn.addEventListener("click", deleteListItem);

    function deleteListItem() {
      newLi.classList.add("delete")
    }
  //


  // // user can edit a newLi
  // const editBtn = document.querySelector.createElement("button");
  //   editBtn.appendChild(document.createTextNode("Edit"));
  //   newLi.appendChild(editBtn);
  //   editBtn.addEventListener("click", editListItem);

  // function editListItem() {
  //   newLi.classList.add
  // }
});


// listItem.addEventListener("click", function() {
//   //
//   listItem.classList.toggle(completed);
// });



// user can delete item by pressing the 'x'
