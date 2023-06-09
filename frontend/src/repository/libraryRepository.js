import axios from '../custom-axios/axios';

const LibraryService = {
    fetchAuthors: () => {
        return axios.get("/authors/list");
    },
    fetchCategories: () => {
        return axios.get("/categories/list");
    },
    fetchBooks: () => {
        return axios.get("/books/list");
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    addBook: (name, category, author, availableCopies) => {
        return axios.post("/books/add", {
            "name": name,
            "category": category,
            "author": author,
            "availableCopies": availableCopies
        });
    },
    editBook: (id, name, category, author, availableCopies) => {
        return axios.put(`/books/edit/${id}`, {
            "name": name,
            "category": category,
            "author": author,
            "availableCopies": availableCopies
        });
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    },
    markAsTaken: (id) => {
        return axios.put(`/books/mark/${id}`);
    },
    returnBook: (id) => {
        return axios.put(`/books/return/${id}`);
    },
}

export default LibraryService