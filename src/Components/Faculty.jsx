import React,{useState,useEffect} from "react";

export default function Faculty()
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

                        <table className="table table-hover">
                            <tr>
                                <th>Course Name</th>
                                <th>Department</th>
                                <th>Faculty</th>
                            </tr>
                            {
                                data.map((item)=>{
                                    return(
                                        <>
                                            <tr>
                                                
                                                <td>{item.name}</td>
                                                <td>{item.dept}</td>
                                                <td>{item.faculty}</td>
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