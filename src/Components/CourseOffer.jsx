import React from "react";

export default function CourseOffer()
{
    return(
        <>
            <div className="form">
            <form action="http://localhost:2000/addSub" method="post">
                <h2>Commitee work</h2>
                <h4>Add course</h4>
                <input class="form-control" type="text" name="name" id="" placeholder="Enter Course Name"/>
                <input class="form-control" type="text" name="dept" id="" placeholder="Enter your department" />                
                <button className="btn btn-success" type="submit">Add subject/course</button>
            </form>
            </div>
        </>
    )
}