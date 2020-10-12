import React from 'react';
import logo from './logo.svg';
import './App.css';
import CourseManager from "./components/CourseManager";
import CourseTable from "./components/CourseTable";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
      <div>
   <CourseManager/>
   <CourseTable/>
      </div>
  );
}

export default App;
