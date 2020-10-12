import axios from 'axios'

export default class CourseService {
    constructor() {
        this.url = 'https://wbdv-generic-server.herokuapp.com/api/001027719/courses'
    }

    createCourse(course) {
        return axios.post(this.url, course)
    }

    updateCourse(id, course) {
        return axios.put(this.url.concat('/',id), course)
    }

    deleteCourse(id){
        return axios.delete(this.url.concat('/',id))
    }

    findCourseById(id) {
        return axios.get(this.url.concat('/',id))
    }

    findAllCourses() {
        return fetch(this.url)
            .then(response => response.json()).then(data => data)
    }

}