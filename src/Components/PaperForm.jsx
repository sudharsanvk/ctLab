import React,{useState,useEffect} from "react";

export default function PaperForm()
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
           <form action="http://localhost:2000/addSub" method="post">
                <input class="form-control" type="text" placeholder="Enter your name" name="name" id="" />
                <input class="form-control" type="text" placeholder="Enter your Department" name="dept" id="" /> 
                <div>
                {
                    data.map((item)=>{
                        return(
                            <>
                                <input class="form-check-input" type="checkbox" name="subject" id={item.name} />
                                <label htmlFor={item.name}>{item.name}</label>
                            </>
                        )
                    })
                }          
                </div>    
                <button className="btn btn-success" type="submit">Add subject/course</button>
            </form>
           </div>
        </>
    )
}