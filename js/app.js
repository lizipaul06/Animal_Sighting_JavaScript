document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);



  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})
const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const ListItem = createAnimalListItem(event.target);
  const animalList = document.querySelector('#animal-list');
  animalList.appendChild(ListItem);

}


const createAnimalListItem = function(form) {

  //create li element
  const listItem = document.createElement('li');
  listItem.classList.add('animal-list-item');


  const animal= document.createElement('p')
  const animalName = form.animal.value
  animal.textContent = 'Animal:  ' + animalName.toString();
  listItem.appendChild(animal);

  const habitat = document.createElement('p')
  const animalHabitat = form.habitat.value
  habitat.textContent = 'Habitat:  ' + animalHabitat.toString();
  listItem.appendChild(habitat);

  const date = document.createElement('p')
  const animalDate = form.date.value
  date.textContent = 'Date:  ' + animalDate.toString();
  listItem.appendChild(date);

  const time = document.createElement('p')
  const animalTime = form.time.value
  time.textContent = 'Time:  ' + animalTime.toString();
  listItem.appendChild(time);

  const friend = document.createElement('p')
  const animalFriend = form.friend.value
  friend.textContent = 'Friendliness: ' + animalFriend.toString();
  listItem.appendChild(friend);


  return listItem;

}



const handleDeleteAllClick = function (event) {
  const animalList = document.querySelector('#animal-list');
  animalList.innerHTML = '';
}
