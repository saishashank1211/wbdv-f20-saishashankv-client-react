import React from "react"
import {FaEdit, FaTrashAlt} from 'react-icons/fa'

export default function CourseRow(props){
        return (
            <tr>
                <td>{props.course.Title}</td>
                <td>{props.course.OwnedBy}</td>
                <td></td>
                    <td>
                        <div>
                            <button className="btn btn-dark wbdv-header wbdv-sort"><FaEdit/></button>
                            <button className="btn btn-dark wbdv-header wbdv-sort"><FaTrashAlt/></button>
                        </div>
                    </td>
            </tr>
        )

}