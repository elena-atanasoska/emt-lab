import React from 'react'

export default function Author(props) {
    return (
        <tr>
            <td>{props.item.name}</td>
            <td>{props.item.surname}</td>
            <td>{props.item.country.name}</td>
        </tr>
    )
}