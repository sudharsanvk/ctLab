import React,{useState,useEffect} from "react";

export default function UpdateCourse()
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
            data.map((item)=>{
                return(
                    <>
                     <a href="http://localhost:3000/AddCourse"><button className="btn btn-primary">Add Faculty</button></a>
                        <table className="table table-hover">
                            <tr>
                                <th>Course Name</th>
                                <th>Department</th>
                            </tr>
                            {
                                data.map((item)=>{
                                    return(
                                        <>
                                            <tr>
                                                
                                                <td>{item.name}</td>
                                                <td>{item.dept}</td>

                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </table>
                    </>
                )
            })
        }
     </>
    )
}