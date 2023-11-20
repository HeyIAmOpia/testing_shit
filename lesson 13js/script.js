function add () {
    //create uid so each time button is clicked ID is generated

    let uid = generateUid();

    //create Li element
    document.getElementById('to-do-list');
    let liElement = document.createElement('li');

    //creating content inside Li with prompt
    let text = prompt('Set your plans');

    //giving Li Id

    liElement.id = `item-${uid}`;

    //creating elements inside Li
    liElement.innerHTML = `
    <div id = 'title-${uid}'>${text}</div>
    <div id = 'div-${uid}'>
      <button type="button" class="btn btn-warning" onclick="edit('${uid}')">Edit</button>
      <button type="button" class="btn btn-danger" onclick="deleteLi('${uid}')">Delete</button>
    </div>
    `
    //appending elements in LI and adding some Bootstrap
    liElement.classList.add('list-group-item', 'd-flex', 'justify-content-between')
    document.getElementById('to-do-list').appendChild(liElement);
};

//edit function
function edit(uid) {
    //finding div with text and assigning its value to the const
    const oldText = document.getElementById(`title-${uid}`).innerText;
    //assigning new value to the text
    const newText = prompt(oldText);
    //checking if this value is empty
    if (newText != null) {
        document.getElementById(`title-${uid}`).innerText = newText;
    }

}
function deleteLi (uid) {
    //confirm deletion
    let confirmDeletion = confirm('Are you sure?')
   // add a clause if user confirms then delete
    if(confirmDeletion) {
        let liElementRemoved = document.getElementById(`item-${uid}`);
        liElementRemoved.remove();
    }
}

//generate password
function generateUid () {
    return Math.random().toString(16).slice(2);
};

//Dynamic table
function createTable() {
    let tableWrap = document.createElement('tbody')
    document.getElementById('ourTable').appendChild(tableWrap);
}


