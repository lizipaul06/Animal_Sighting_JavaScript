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


    const name= document.createElement('p')
    const animalName = form.name.value
    name.textContent = 'Name:  ' + animalName.toString();
    listItem.appendChild(name);

    const type = document.createElement('p')
    const animalType = form.type.value
    type.textContent = 'Type:  ' + animalType.toString();
    listItem.appendChild(type);

    const breed = document.createElement('p')
    const animalBreed = form.breed.value
    breed.textContent = 'Breed:  ' + animalBreed.toString();
    listItem.appendChild(breed);

    const fluffiness = document.createElement('p')
    const animalCute = form.fluffiness.value
    fluffiness.textContent = 'Fluffiness: ' + animalCute.toString();
    listItem.appendChild(fluffiness);



    return listItem;

  }





  const handleDeleteAllClick = function (event) {
    const animalList = document.querySelector('#animal-list');
    animalList.innerHTML = '';
  }
