import { useState } from "react"
import {url} from "../../../url"


export const SubmitCompile=({isClicked,submitData,setOutput,setErrorVisible,setErrorMes,toggleCompilation,setCompilationLoading})=>{
    const [hit ,sethit]=useState(false);
    const handleClick=(event)=>{
        setCompilationLoading(true);
        toggleCompilation(true);
        sethit(true);
        setTimeout(() => { sethit(false); }, 3000);
        console.log(submitData);
        fetch(`${url}/exec`,{
            body:JSON.stringify(submitData),
            method:`POST`,
            credentials:"include",
            headers:{"Content-Type":"application/json"}
        }).then(res=> res.json()).then(response =>{
            console.log(response);
            if(response.status)
            {
                let poll=setInterval(async()=>{
                    let pollres=await fetch(`${url}/submission`,{
                        method:'POST',
                        headers:{"Content-Type":"application/json"},
                        credentials:"include",
                        body:JSON.stringify({subId:response.submissionId})
                    })
                    let pollres1=await pollres.json();
                    // console.log(pollres1);
                    if(pollres1.status){
                        let responseData=JSON.parse(pollres1.response);
                        console.log(responseData);
                        setOutput(responseData);
                        clearInterval(poll);
                        setCompilationLoading(false);
                    }
                },1300)
            }
            else{
                console.log(`error status false ${response}`);
                setErrorVisible(true);
                setErrorMes(response.mes);
                setCompilationLoading(false);
            }
        })
        isClicked();
    }
    const handleClickSubmit=(event)=>{
        setCompilationLoading(true);
        toggleCompilation(true);
        sethit(true);
        setTimeout(() => { sethit(false); }, 3000);
        console.log(submitData);
        fetch(`${url}/exec/submit`,{
            body:JSON.stringify(submitData),
            method:`POST`,
            credentials:"include",
            headers:{"Content-Type":"application/json"}
        }).then(res=> res.json()).then(response =>{
            console.log(response);
            if(response.status)
            {
                let poll=setInterval(async()=>{
                    let pollres=await fetch(`${url}/quessubmission`,{
                        method:'POST',
                        headers:{"Content-Type":"application/json"},
                        credentials:"include",
                        body:JSON.stringify({subId:response.submissionId})
                    })
                    let pollres1=await pollres.json();
                    console.log(pollres1);
                    if(pollres1.status){
                        clearInterval(poll);
                        setCompilationLoading(false);
                        let responseData=JSON.parse(pollres1.response);
                        console.log(responseData);
                        setOutput(responseData);
                    }
                },1300)
            }
            else{
                console.log(`error status false ${response}`);
                setErrorVisible(true);
                setErrorMes(response.mes);
                setCompilationLoading(false);
            }
        })
        isClicked();
    }
    const handleInputClick=(event)=>{
        isClicked();
    };
    
    return(
        <div className="h-full w-full flex justify-end bg-[#1e1e1e] shadow-lg border-t-[1px] border-[#373636] rounded-b-md ">
            <div className="h-full w-[50%] flex justify-evenly items-center">
                <div className="w-1/3 h-4/6  rounded-md text-sm">
                    <button onClick={!hit?()=>handleInputClick():""} className={`w-full h-full bg-transparent flex items-center justify-center  ${hit?'cursor-default bg-gray-900':'cursor-pointer'} `} type="button">Custom Input</button>
                </div>
                <div className="w-1/3 h-4/6  rounded-md text-sm">
                    <button onClick={!hit?()=>handleClick():""} className={`w-full h-full bg-gray-700 flex items-center justify-center  ${hit?'cursor-default bg-gray-900':'cursor-pointer'} `} type="button">Compile & Run</button>
                </div>
                <div className="w-1/4 h-4/6  rounded-md">
                    <button onClick={!hit?()=>handleClickSubmit():""} className={`w-full h-full bg-red-700  flex items-center justify-center  ${hit?'cursor-default bg-red-950':'cursor-pointer'}  `} type="button">Submit</button>
                </div>
            </div>
        </div>
    )
}
