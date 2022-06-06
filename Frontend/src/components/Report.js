import React,{useState, useEffect} from 'react';
import http from '../http-common'

const Report = ()=>{

useEffect(async()=>{

await getReport()
},[])

const [result ,setResult] = useState([{}])
 const [report ,setReport] = useState('')
 const [faceReport ,setFaceReport] = useState('')


// let report; 
const getReport=async()=>{
let results = await http.get("/showresult");
console.log("Result",results.data)
setResult(results.data)
let all= results.data
console.log("All", all)
// setreport(results.data.report)
 setReport(all.map(x=>x.report.split("#")[0]))
 setFaceReport(all.map(x=>x.report.split("#")[3]))

}

console.log("Report ", report)
console.log("Face Report ", faceReport)
// console.log("Face Report 12 ", report[0].replace("D:\\FYP\\ExamIn\\ExamInDesktopUI.wav", " "))



// console.log("LENGTH",faceReport[0].match(/HASEEBCRASH@GMAIL.COM/g) || [].length);
// console.log("LENGTH",faceReport[0].length/result[0].Email.length-2);
// console.log("LENGTH",result[0].Email.length);

return (
    // <p>{"hello"}</p>
    <>
    <h1 style={{marginLeft:"47%"}}> Results</h1>
    <p style={{width:"80%"  ,marginTop:"10px", marginLeft:"10%" , borderBottom:"1px solid black"}}>{}</p>
    {
        report && result && faceReport &&(


            <>
    <h5 style={{width:"40%" , padding:"5px" ,marginTop:"5%", marginLeft:"40%"}}>Name: {result[0].Name} </h5>
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"40%"}}>Email: {result[0].Email} </h5>
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Audio Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%"}}>{report[0]}</p>


    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Faces Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%"}}>{faceReport[0]}</p>
    <p style={{width:"80%"  , marginLeft:"10%",  borderBottom:"5px solid black"}}>{}</p>


    <h5 style={{width:"40%" , padding:"5px" ,marginTop:"5%", marginLeft:"40%"}}>Name: {result[1].Name} </h5>
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"40%"}}>Email: {result[1].Email} </h5>
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Audio Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%"}}>{report[1]}</p>

    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Faces Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%" }}>{faceReport[1]}</p>
    <p style={{width:"80%"  , marginLeft:"10%",  borderBottom:"5px solid black"}}>{}</p>
</>

        )
    }
    
    </>
)




}


export default Report

// {result?.map((x)=>(
//     <>
// {/* <li> Report :{x.report.split("#")[0]} </li>
// <br></br>
// <li> Report :{x.report.split("#")[3]} </li> */}
// <h5> Name :{x.Name} </h5>
// <h5> Email:{x.Email} </h5>
// {/* <p> Answers:{x.Answers} </p> */}
// </>
// ))}