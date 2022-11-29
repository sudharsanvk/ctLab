import React,{useState,useEffect} from "react";

export default function CourseDetails()
{
    const [data,setData]=useState([])

    function getData()
    {
        fetch('http://localhost:2000/showSub')
        .then((raw)=>raw.json())
        .then((value)=>{
            setData(value)
            console.log(data)
        })
    }

    useEffect(()=>{
        getData()
    })
    return(
     <>
        {
            
                       <div className="tab">
                       <h3>Final Course Detail</h3>
                       <table className="table table-hover course-table">
                            <tr>
                                <th>Course Name</th>
                                <th>Department</th>
                                <th>Faculty</th>
                                <th>Course duration</th>
                                <th>Evaluation Instruction</th>
                            </tr>
                            {
                                data.map((item)=>{
                                    return(
                                        <>
                                            <tr>
                                                
                                                <td>{item.name}</td>
                                                <td>{item.dept}</td>
                                                <td>{item.faculty}</td>
                                                <td>{item.cDur}</td>
                                                <td>{item.evalIns}</td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </table>    
                       </div>
                  
            
        }
     </>
    )
}