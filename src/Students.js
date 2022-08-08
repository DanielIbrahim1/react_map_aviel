import React from 'react'
import {
    useLocation,
    NavLink,
    Outlet,
} from "react-router-dom";

import { getStudents } from "./Data";


function QueryNavLink({ to, ...props }) {
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />;
}

export default function students(){
    let students=getStudents();

    return (
        <div  style={{ display: "flex" }}>
        <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>

{       students.map((stu)=>

<div> 
    
<QueryNavLink key={stu.name} to={`/students/${stu.name}`}>{stu.name}</QueryNavLink>
    
    
    </div>)  }

    
        </nav>
        <Outlet></Outlet>
       </div>
  
    )

}
