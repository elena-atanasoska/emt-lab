import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import React, { Component } from 'react'
import LibraryService from '../../repository/libraryRepository';
import AuthorsList from '../Author/AuthorList';
import Category from '../Categories/Categories';
import Books from '../Book/BookList';
import Header from '../Header/header';
import BookAdd from '../Book/BookAdd';
import BookEdit from '../Book/BookEdit';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authors: [],
      categories: [],
      books: [],
      selectedBook: {}
    }
  }

  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path={"/authors"} element={<AuthorsList authors={this.state.authors} />} />
          <Route path={"/categories"} element={<Category categories={this.state.categories} />} />
          <Route path={"/books/add"} element={<BookAdd categories={this.state.categories} authors={this.state.authors} onAddBook={this.addBook} />} />
          <Route path={"/books/edit/:id"} element={<BookEdit categories={this.state.categories} authors={this.state.authors} onEditBook={this.editBook} book={this.state.selectedBook}/>} />
          <Route path={"/books"} element={<Books books={this.state.books} onDelete={this.deleteBook} onEdit={this.getBook} markAsTaken={this.markAsTaken}  returnBook={this.returnBook}/>} />

          <Route path='*' element={<Navigate to='/books' />} />
        </Routes>
      </Router>
    );
  }

  componentDidMount() {
    this.loadAuthors();
    this.loadCategories();
    this.loadBooks();
  }

  loadAuthors = () => {
    LibraryService.fetchAuthors()
      .then((data) => {
        this.setState({
          authors: data.data
        })
      });
  }

  loadCategories = () => {
    LibraryService.fetchCategories()
      .then((data) => {
        this.setState({
          categories: data.data
        })
      });
  }

  loadBooks = () => {
    LibraryService.fetchBooks()
      .then((data) => {
        this.setState({
          books: data.data
        })
      });
  }

  getBook = (id) => {
    LibraryService.getBook(id)
      .then((data) => {
        this.setState({
          selectedBook: data.data
        })
      })
  }

  deleteBook = (id) => {
    LibraryService.deleteBook(id)
      .then(() => {
        this.loadBooks();
      });
  }

  addBook = (name, category, author, availableCopies) => {
    LibraryService.addBook(name, category, author, availableCopies)
      .then(() => {
        this.loadBooks();
      });
  }

  editBook = (id, name, category, author, availableCopies) => {
    LibraryService.editBook(id, name, category, author, availableCopies)
      .then(() => {
        this.loadBooks();
      });
  }

  markAsTaken = (id) => {
    LibraryService.markAsTaken(id)
    .then(() => {
      this.loadBooks();
  });
  }

  returnBook = (id) => {
    LibraryService.returnBook(id)
    .then(() => {
      this.loadBooks();
  });
  }
}

export default App;

