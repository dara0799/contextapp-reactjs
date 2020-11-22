import React, { createContext, useState } from 'react';
export const BookContext = createContext();
const BookContextProvider = (props) => {

    const [books, setBooks] = useState([
        { title: 'Laskar Pelangi', id: 1 },
        { title: 'Hunger Game', id: 2 },
        { title: 'Divergent', id: 3 },
        { title: 'Kim Jin Young 1982', id: 4 }
    ])
    return (
        <BookContext.Provider value={{ books }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;