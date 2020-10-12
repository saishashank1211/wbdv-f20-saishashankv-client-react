import React from "react"
import CourseService from "../services/CourseService";
import {FaGripHorizontal,FaSortAlphaUp,FaFolder,FaListAlt} from 'react-icons/fa'
import CourseRow from "./CourseRow";


export default class Coursetable extends React.Component{
    constructor() {
        super();
        this.state={
            isGrid : true,
            courses:[],
        }
        this.handleClick = this.handleClick.bind(this)
        this.CourseService = new CourseService()
        this.CourseService=this.CourseService.bind(this)
        this.setState({courses:this.CourseService.findAllCourses})
    }

    handleClick(){
        this.setState(prevState => {
            return{
                isGrid : !prevState.isGrid
            }
        })
    }


    render(){
        return (
            this.state.isGrid ?
            <table className="table table-dark p-0">
                <thead className="m-0 p-0">
                <tr className="d-none d-sm-table-row wbdv-row wbdv-course">
                    <th className="w-5 wbdv-row wbdv-icon" scope="col"></th>
                    <th className="w-45 wbdv-row wbdv-title" scope="col">Title</th>
                    <th className="w-20 wbdv-row wbdv-owner" scope="col">Owned by</th>
                    <th className="w-20 wbdv-row wbdv-modified-date" scope="col">Last modified by me</th>
                    <th className="w-10 wbdv-row wbdv-button wbdv-delete" scope="col">
                        <div>
                            <button className="btn btn-dark wbdv-button wbdv-grid-layout" onClick={this.handleClick}><FaGripHorizontal/></button>
                            <button className="btn btn-dark wbdv-header wbdv-sort"><FaSortAlphaUp/></button>
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>

                </tbody>
            </table> :
            <table className="table table-dark p-0">
                <thead className="m-0 p-0">
                <tr className="d-none d-sm-table-row wbdv-row wbdv-course">
                    <th className="w-5 wbdv-row wbdv-icon" scope="col">Recent Documents</th>
                    <th className="w-45 wbdv-row wbdv-title" scope="col">Owned By Me</th>
                    <th className="w-10 wbdv-row wbdv-button wbdv-delete" scope="col">
                        <div>
                            <button className="btn btn-dark wbdv-button wbdv-grid-layout" onClick={this.handleClick}><FaListAlt/></button>
                            <button className="btn btn-dark wbdv-header wbdv-sort"><FaSortAlphaUp/></button>
                            <button className="btn btn-dark wbdv-header wbdv-sort"><FaFolder/></button>
                        </div>
                    </th>
                </tr>
                </thead>
            </table>
        )
    }
}
