import React,{useState,useEffect} from "react";

export default function HandBookEntry()
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
<div className="form">

                <form action="http://localhost:2000/updateCourse" method="post">
                <select name="name" id="">
                    {
                        data.map((item)=>{
                            return(
                                <>
                                    <option value={item.name}>{item.name}</option>
                                </>
                            )
                        })
                    }
                </select>
                <input class="form-control" type="text" placeholder="Course Duration" name="cDur" id="" />                
                <input class="form-control" type="text" placeholder="Evaluation Instructions" name="evalIns" id="" />                

                <button className="btn btn-success" type="submit">Update Course Details</button>
            </form>
</div>
        </>
    )
}