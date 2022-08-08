import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getStudent, deleteStudent } from './Data'


export default function Student() {
    let navigate = useNavigate()
    let params = useParams();
    let student = getStudent(params.myStuName);
   
    return (

        <main style={{ padding: "1rem", backgroundColor: "lightblue" }}>
            <img src={`/media/${student.img}`} alt="" />
            <br></br>
            <h2> name :{student.name} </h2>
            <br></br>
            <p> city : {student.city} </p>
            <p> age : {student.age}</p>
            <p> Due date: {student.Duedate} </p>
            <p>
                <button onClick={() => { deleteStudent(student.name); navigate("/students") }}>
                     Delete student </button>

               
                
            </p>

        </main>

    )
}

