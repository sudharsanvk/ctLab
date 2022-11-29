import React,{useState,useEffect} from "react";

export default function AddFac()
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

            <form action="http://localhost:2000/updateSub" method="post">
                <div>
                    Choose the course : 
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
                </div>
                <input type="text" name="faculty" id="" placeholder="Faculty name"/>                
                <button className="btn btn-success" type="submit">Update Faculty</button>
            </form>
            </div>
        </>
    )
}