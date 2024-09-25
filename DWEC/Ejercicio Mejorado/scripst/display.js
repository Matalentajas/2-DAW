export const displaybooks = (books) => {
    console.log("Lista de libros");

    books.forEach( b => {
        console.log(`${b.title}, escrito por ${b.author}, publicado en el año ${b.year}`);

    });
    
}

export const displaybooks_year = (books, year) => {
    const filterbooks = books.filter ( b => b.year == year)
    console.log(`Libros publicados en el año ${year}`);
    filterbooks.forEach( b => { 
        console.log(`${b.title}, escrito por ${b.autor}`);
    })
    
}