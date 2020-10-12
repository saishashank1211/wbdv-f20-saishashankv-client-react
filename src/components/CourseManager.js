import React from "react"
import CourseService from "../services/CourseService";
import {FaGripHorizontal,FaList,FaSortAlphaUp,FaBook,FaTimes} from 'react-icons/fa'

export default class CourseManager extends React.Component{
    constructor() {
        super();
    }

    createCourse(){}
    render(){
        return (
                <div>
                    <nav className="navbar navbar-dark bg-primary float-left w-100">
                        <button className="navbar-toggler border-0 btn-outline-primary" type="button"
                                data-toggle="collapse" data-target="#navbarToggleExternalContent"
                                aria-controls="navbarToggleExternalContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon wbdv-field wbdv-hamburger"></span>
                        </button>
                        <a className="navbar-brand float-left d-none d-sm-block wbdv-label wbdv-course-manager"
                           href="#">Course Manager</a>
                        <input className="form-control w-50 wbdv-field wbdv-new-course" type="text"
                               placeholder="New Course Title"/>
                        <button className="btn btn-danger rounded-circle wbdv-button wbdv-add-course">+</button>
                    </nav>
                </div>
        )
    }
}