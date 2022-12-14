import React from "react";

export default function Row(props) {
    return (
        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{props.head}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{props.content}</td>
        </tr>
    )
}