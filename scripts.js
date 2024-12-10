function Book(title,author,pages,isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(myLibrary){

    const bookContainer = document.createElement('div')
    const bookInfo = document.createElement('div');
    const remove = document.createElement('button');
    const read = document.createElement('button')

    bookInfo.setAttribute('style', 'white-space: pre;');
    bookInfo.setAttribute('class', 'book-info')

    bookContainer.setAttribute('class', 'book')

    bookInfo.textContent = `Title:${myLibrary[myLibrary.length - 1].title}\r\nAuthor:${myLibrary[myLibrary.length - 1].author}\r\nNo. of Pages:${myLibrary[myLibrary.length - 1].pages}\r\nHas been read:${myLibrary[myLibrary.length - 1].isRead}`

    remove.textContent = 'Remove'
    read.textContent = 'Read'
    bookContainer.appendChild(bookInfo)
    bookContainer.appendChild(remove)
    bookContainer.appendChild(read)
    container.appendChild(bookContainer)

    remove.addEventListener('click',()=>{
        bookContainer.remove()
    })

    read.addEventListener('click',()=>{
        if(myLibrary[myLibrary.length - 1].isRead){
            myLibrary[myLibrary.length - 1].isRead = false
        }else{
            myLibrary[myLibrary.length - 1].isRead = true
        }

        bookInfo.textContent = `Title:${myLibrary[myLibrary.length - 1].title}\r\nAuthor:${myLibrary[myLibrary.length - 1].author}\r\nNo. of Pages:${myLibrary[myLibrary.length - 1].pages}\r\nHas been read:${myLibrary[myLibrary.length - 1].isRead}`
    })

    
}

const container = document.querySelector('.container');
const add = document.createElement('button')
const dialog = document.querySelector('.form')
const body = document.querySelector('body')

let myLibrary = [{title:'Bob',
                    author:'Me',
                    pages: 23,
                    isRead: true
}];

addBookToLibrary(myLibrary)

add.textContent = 'Add'
body.appendChild(add)
add.addEventListener('click',()=>{
    dialog.toggleAttribute('open')
})

const submit = document.querySelector('.submit')
const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
const option1 = document.querySelector('#Yes')
const option2 = document.querySelector('#No')

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    let book = new Book(title.value,author.value,pages.value,option1.checked)
    myLibrary.push(book)
    addBookToLibrary(myLibrary)
    

})

