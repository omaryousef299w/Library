document.querySelector('#new-book').addEventListener('click',()=>{
  let newBookForm = document.querySelector('.book-info');
  newBookForm.style.display = 'block';
})
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title; 
  this.author = author; 
  this.pages = pages;
  this.read = read;
}

function render () {
  let library = document.getElementById('library');
  library.innerHTML = "";
  for(let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    console.log(book);
    let bookEl = document.createElement('div');
    bookEl.setAttribute('class', 'book-card');
    bookEl.innerHTML = `
    <div class="card-header">
    <h3 class="title">${book.title}</h3>
    <h5 class="author">${book.author}</h5>
    </div>
    <div class="card-body">
    <p class="pages">${book.pages}</p>
    <p class="read">${book.read  ? "Read": "Not Read Yet"}</p>
    </div>
    `;
    library.appendChild(bookEl);
  }
}

function addBookToLibrary() {
  // do stuff here
  let title = document.getElementById('title').value; 
  let author = document.getElementById('author').value; 
  let pages = document.getElementById('pages').value; 
  let read = document.getElementById('read').checked; 
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);  
  render(); 
}


let addBtn = document.getElementById('submit');
addBtn.addEventListener('click', addBookToLibrary)


