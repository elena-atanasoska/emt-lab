import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookEdit = (props) => {

    const history = useNavigate();

    //hook
    const [formData, updateFormData] = useState({
        name: '',
        category: '',
        author: 0,
        availableCopies: 0,
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        updateFormData((prevState) => ({
            ...prevState,
            [name]: value.trim(),
        }));
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.book.name;
        const category = formData.category !== "" ? formData.category : props.book.category
        const author = formData.author !== 0 ? formData.author : props.book.author.id;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.book.availableCopies;
        props.onEditBook(props.book.id, name, category, author, availableCopies);
        history('/books');
    };

    return (
        <div className="row mt-5 justify-content-center">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            required
                            placeholder={props.book.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((term) => {
                                if (props.book.category !== undefined &&
                                    props.book.category === term)
                                    return <option selected={props.book.category}
                                        value={term}>{term}</option>
                                else return <option value={term}>{term}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Authors</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            {props.authors.map((term) => {
                                if (props.book.author !== undefined &&
                                    props.book.author.id === term.id)
                                    return <option selected={props.book.author}
                                        value={term.id}>{term.name} {term.surname}</option>
                                else return <option value={term.id}>{term.name} {term.surname}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="availableCopies">Available copies</label>
                        <input
                            type="number"
                            className="form-control"
                            id="availableCopies"
                            name="availableCopies"
                            required
                            placeholder={props.book.availableCopies}
                            onChange={handleChange}
                        />
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}
export default BookEdit