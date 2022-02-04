const list = document.querySelector('#list');
const inputVerse = document.querySelector('#favchap');
const buttonEnter = document.querySelector('button');

buttonEnter.addEventListener('click', function()  {
  const myItem = inputVerse.value;

 const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = `❌`;
  list.appendChild(listItem);

  listBtn.onclick = function(e) {
    list.removeChild(listItem);
  };
  inputVerse.focus();
});