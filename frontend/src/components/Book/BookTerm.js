import React from 'react'
import { Link } from 'react-router-dom';

const BookTerm = (props) => {
    return (
        <tr>
            <td style={{width: "30%"}}>{props.item.name}</td>
            <td style={{width: "20%"}}>{props.item.author.name} {props.item.author.surname}</td>
            <td style={{width: "9%"}}>{props.item.category}</td>
            <td style={{width: "11%"}}>{props.item.availableCopies}</td>
            <td style={{width: "30%"}} className={"text-right"}>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <Link title={"Delete"} className={"btn btn-danger"}
                        onClick={() => props.onDelete(props.item.id)}>
                        Delete
                    </Link>
                    <Link className={"btn btn-info ml-2"}
                        onClick={() => props.onEdit(props.item.id)}
                        to={`/books/edit/${props.item.id}`}>
                        Edit
                    </Link>
                    <Link title={"MarkAsTaken"} className={"btn btn-success"}
                        onClick={() => props.markAsTaken(props.item.id)}>
                        Mark as taken
                    </Link>
                    <Link title={"ReturnBook"} className={"btn btn-warning"}
                        onClick={() => props.returnBook(props.item.id)}>
                        Return book
                    </Link>
                </div>
            </td>
        </tr>
    );
}

export default BookTerm