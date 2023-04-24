import React from 'react'
import Author from './Author'

const AuthorsList = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <h1>Authors</h1>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Surname</th>
                                <th scope={"col"}>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.authors.map((author) => <Author item={author} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AuthorsList