export let books = []

export const addbook = (book) => {
    const bookexist = books.find( b => b.title == book.title )
    if (!bookexist) {
        books.push(book)
        console.log(`${book.title}, añadido correctamente.`);
        localStorage.setItem("Libros", JSON.stringify(books))
    } else{
        console.log(`${book.title}, ya existe en la lista.`);
    }


}

export const findbook_title = (title) => books.find ( b => b.title == title)

export const getbooks = () => books







    