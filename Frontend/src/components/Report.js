import React,{useState, useEffect} from 'react';
import http from '../http-common'

const Report = ()=>{

useEffect(async()=>{

await getReport()
},[])

const [result ,setResult] = useState([{}])
 const [report ,setReport] = useState('')
 const [faceReport ,setFaceReport] = useState('')
 const [objectReport ,setObjectReport] = useState('')
//  const [allObjects ,setObjectReport] = useState({})


// let report; 
const getReport=async()=>{
let results = await http.get("/showresult");
console.log("Result",results.data)
setResult(results.data)
let all= results.data
console.log("All", all.map(x=>x.report.split("#")[6]))
// setreport(results.data.report)
setObjectReport(all.map(x=>x.report.split("#")[6]))
 setReport(all.map(x=>x.report.split("#")[0]))
 setFaceReport(all.map(x=>x.report.split("#")[3]))
 

}

console.log("Report ", report)
console.log("Face Report ", faceReport)
console.log("Object Report ", objectReport)
// console.log("Object Report ", objectReport[1].search(/cell phone/))
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
    {
        faceReport[0].search(/Unknown/) === -1 ?(
            <h5 style={{width:"20%" , padding:"5px",color:"white", backgroundColor:"green"  ,marginLeft:"20%" , marginTop:"20px"}}>Not Cheated</h5>
        ) :<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}}> Unknown Face Detected</h5>
    }
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Object Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%" }}>{objectReport[0]}</p>
    {
        objectReport[0].search(/cell phone/) === -1 ?(
            <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}}> Not Cheated</h5>
        ):<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}} > Cell Phone Detected</h5>
    }
    <p style={{width:"80%"  , marginLeft:"10%",  borderBottom:"5px solid black"}}>{}</p>
 


    <h5 style={{width:"40%" , padding:"5px" ,marginTop:"5%", marginLeft:"40%"}}>Name: {result[1].Name} </h5>
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"40%"}}>Email: {result[1].Email} </h5>
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Audio Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%"}}>{report[1]}</p>

    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Faces Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%" }}>{faceReport[1]}</p>
    {
        faceReport[1].search(/Unknown/) === -1 ?(
            <h5 style={{width:"20%" , padding:"5px",color:"white", backgroundColor:"green"  ,marginLeft:"20%" , marginTop:"20px"}}>Not Cheated</h5>
        ) :<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}}> Unknown Face Detected</h5>
    }


    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Object Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%" }}>{objectReport[1]}</p>
    {
        objectReport[1].search(/cell phone/) === -1 ?(
            <h5 style={{width:"20%" , padding:"5px",color:"white", backgroundColor:"green"  ,marginLeft:"20%" , marginTop:"20px"}}>Not Cheated</h5>
        ) :<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}}> Cell Phone Detected</h5>
    }
    <p style={{width:"80%"  , marginLeft:"10%",  borderBottom:"5px solid black"}}>{}</p>

  

     {
        result?.length >2 &&(
    <>
    <h5 style={{width:"40%" , padding:"5px" ,marginTop:"5%", marginLeft:"40%"}}>Name: {result[2].Name} </h5>
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"40%"}}>Email: {result[2].Email} </h5>
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Audio Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%"}}>{report[2]}</p>

    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Faces Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%" }}>{faceReport[2]}</p>
    {
        faceReport[2].search(/Unknown/) === -1 ?(
            <h5 style={{width:"20%" , padding:"5px",color:"white", backgroundColor:"green"  ,marginLeft:"20%" , marginTop:"20px"}}>Not Cheated</h5>
        ) :<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}}> Unknown Face Detected</h5>
    }
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Object Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%" }}>{objectReport[2]}</p>
    {
        objectReport[2].search(/cell phone/) === -1 ?(
            <h5 style={{width:"20%" , padding:"5px"  ,color:"white", backgroundColor:"green",marginLeft:"20%" , marginTop:"20px"}}> Not Cheated</h5>
        ):<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}} > Cell Phone Detected</h5>
    }
    <p style={{width:"80%"  , marginLeft:"10%",  borderBottom:"5px solid black"}}>{}</p>
       </> )
    }
    


     {
        result?.length >3 &&(
    <>
    <h5 style={{width:"40%" , padding:"5px" ,marginTop:"5%", marginLeft:"40%"}}>Name: {result[3].Name} </h5>
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"40%"}}>Email: {result[3].Email} </h5>
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Audio Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%"}}>{report[3]}</p>

    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Faces Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%" }}>{faceReport[3]}</p>
    {
        faceReport[3].search(/Unknown/) === -1 ?(
            <h5 style={{width:"20%" , padding:"5px",color:"white", backgroundColor:"green"  ,marginLeft:"20%" , marginTop:"20px"}}>Not Cheated </h5>
        ) :<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}}> Unknown Face Detected</h5>
    }
    {/* {
        report[3].search(/Unknown/) === -1 ?(
            <h5 style={{width:"20%" , padding:"5px",color:"white", backgroundColor:"green"  ,marginLeft:"20%" , marginTop:"20px"}}>Not Cheated</h5>
        ) :<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}}> Unknown Face Detected</h5>
    } */}
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Object Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%" }}>{objectReport[3]}</p>
    {
        objectReport[3].search(/cell phone/) === -1 ?(
            <h5 style={{width:"20%" , padding:"5px"  ,color:"white", backgroundColor:"green",marginLeft:"20%" , marginTop:"20px"}}> Not Cheated</h5>
        ):<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}} > Cell Phone Detected</h5>
    }
    {/* {
        faceReport[3].search(/cell phone/) === -1 ?(
            <h5 style={{width:"20%" , padding:"5px"  ,color:"white", backgroundColor:"green",marginLeft:"20%" , marginTop:"20px"}}> Not Cheated</h5>
        ):<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}} > Cell Phone Detected</h5>
    } */}
    
    <p style={{width:"80%"  , marginLeft:"10%",  borderBottom:"5px solid black"}}>{}</p>
       </> )
    }



{
        result?.length >4 &&(
    <>
    <h5 style={{width:"40%" , padding:"5px" ,marginTop:"5%", marginLeft:"40%"}}>Name: {result[4].Name} </h5>
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"40%"}}>Email: {result[4].Email} </h5>
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Audio Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%"}}>{report[4]}</p>

    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Faces Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%" }}>{faceReport[4]}</p>
    {
        faceReport[4].search(/Unknown/) === -1 ?(
            <h5 style={{width:"20%" , padding:"5px",color:"white", backgroundColor:"green"  ,marginLeft:"20%" , marginTop:"20px"}}>Not Cheated </h5>
        ) :<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}}> Unknown Face Detected</h5>
    }
    {
        report[4].search(/Unknown/) === -1   ?(
            <h5 style={{width:"20%" , padding:"5px",color:"white", backgroundColor:"green"  ,marginLeft:"20%" , marginTop:"20px"}}>Not Cheated</h5>
        ) :<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}}> Unknown Face Detected</h5>
    }
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Object Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%" }}>{objectReport[4]}</p>
    {
        objectReport[4].search(/cell phone/) === -1 ?(
            <h5 style={{width:"20%" , padding:"5px"  ,color:"white", backgroundColor:"green",marginLeft:"20%" , marginTop:"20px"}}> Not Cheated</h5>
        ):<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}} > Cell Phone Detected</h5>
    }
    {/* {
        faceReport[4].search(/cell phone/) === -1   ?(
            <h5 style={{width:"20%" , padding:"5px"  ,color:"white", backgroundColor:"green",marginLeft:"20%" , marginTop:"20px"}}> Not Cheated</h5>
        ):<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}} > Cell Phone Detected</h5>
    } */}
    
    <p style={{width:"80%"  , marginLeft:"10%",  borderBottom:"5px solid black"}}>{}</p>
       </> )
    }




{
        result?.length >5 &&(
    <>
    <h5 style={{width:"40%" , padding:"5px" ,marginTop:"5%", marginLeft:"40%"}}>Name: {result[5].Name} </h5>
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"40%"}}>Email: {result[5].Email} </h5>
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Audio Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%"}}>{report[5]}</p>

    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Faces Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%" }}>{faceReport[5]}</p>
    {
        faceReport[5].search(/Unknown/) === -1 ?(
            <h5 style={{width:"20%" , padding:"5px",color:"white", backgroundColor:"green"  ,marginLeft:"20%" , marginTop:"20px"}}>Not Cheated </h5>
        ) :<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}}> Unknown Face Detected</h5>
    }
    {/* {
        report[5].search(/Unknown/) === -1 ?(
            <h5 style={{width:"20%" , padding:"5px",color:"white", backgroundColor:"green"  ,marginLeft:"20%" , marginTop:"20px"}}>Not Cheated</h5>
        ) :<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}}> Unknown Face Detected</h5>
    } */}
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Object Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%" }}>{objectReport[4]}</p>
    {
        objectReport[5].search(/cell phone/) === -1 ?(
            <h5 style={{width:"20%" , padding:"5px"  ,color:"white", backgroundColor:"green",marginLeft:"20%" , marginTop:"20px"}}> Not Cheated</h5>
        ):<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}} > Cell Phone Detected</h5>
    }
    {/* {
        faceReport[5].search(/cell phone/) === -1 ?(
            <h5 style={{width:"20%" , padding:"5px"  ,color:"white", backgroundColor:"green",marginLeft:"20%" , marginTop:"20px"}}> Not Cheated</h5>
        ):<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}} > Cell Phone Detected</h5>
    } */}
    
    <p style={{width:"80%"  , marginLeft:"10%",  borderBottom:"5px solid black"}}>{}</p>
       </> )
    }


{
        result?.length >6 &&(
    <>
    <h5 style={{width:"40%" , padding:"5px" ,marginTop:"5%", marginLeft:"40%"}}>Name: {result[6].Name} </h5>
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"40%"}}>Email: {result[6].Email} </h5>
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Audio Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%"}}>{report[6]}</p>

    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Faces Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%" }}>{faceReport[6]}</p>
    {
        faceReport[6].search(/Unknown/) === -1 ?(
            <h5 style={{width:"20%" , padding:"5px",color:"white", backgroundColor:"green"  ,marginLeft:"20%" , marginTop:"20px"}}>Not Cheated </h5>
        ) :<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}}> Unknown Face Detected</h5>
    }
    {/* {
        report[6].search(/Unknown/) === -1 ?(
            <h5 style={{width:"20%" , padding:"5px",color:"white", backgroundColor:"green"  ,marginLeft:"20%" , marginTop:"20px"}}>Not Cheated</h5>
        ) :<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}}> Unknown Face Detected</h5>
    } */}
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Object Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%" }}>{objectReport[6]}</p>
    {
        objectReport[6].search(/cell phone/) === -1 ?(
            <h5 style={{width:"20%" , padding:"5px"  ,color:"white", backgroundColor:"green",marginLeft:"20%" , marginTop:"20px"}}> Not Cheated</h5>
        ):<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}} > Cell Phone Detected</h5>
    }

    
    {/* {
        faceReport[6].search(/cell phone/) === -1 ?(
            <h5 style={{width:"20%" , padding:"5px"  ,color:"white", backgroundColor:"green",marginLeft:"20%" , marginTop:"20px"}}> Not Cheated</h5>
        ):<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}} > Cell Phone Detected</h5>
    } */}
    
    <p style={{width:"80%"  , marginLeft:"10%",  borderBottom:"5px solid black"}}>{}</p>
       </> )
    }





{
        result?.length >7 &&(
    <>
    <h5 style={{width:"40%" , padding:"5px" ,marginTop:"5%", marginLeft:"40%"}}>Name: {result[7].Name} </h5>
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"40%"}}>Email: {result[7].Email} </h5>
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Audio Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%"}}>{report[7]}</p>

    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Faces Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%" }}>{faceReport[7]}</p>
    {
        faceReport[7].search(/Unknown/) === -1 ?(
            <h5 style={{width:"20%" , padding:"5px",color:"white", backgroundColor:"green"  ,marginLeft:"20%" , marginTop:"20px"}}>Not Cheated </h5>
        ) :<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}}> Unknown Face Detected</h5>
    }
    {/* {
        report[6].search(/Unknown/) === -1 ?(
            <h5 style={{width:"20%" , padding:"5px",color:"white", backgroundColor:"green"  ,marginLeft:"20%" , marginTop:"20px"}}>Not Cheated</h5>
        ) :<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}}> Unknown Face Detected</h5>
    } */}
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Object Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%" }}>{objectReport[7]}</p>
    {
        objectReport[7].search(/cell phone/) === -1 ?(
            <h5 style={{width:"20%" , padding:"5px"  ,color:"white", backgroundColor:"green",marginLeft:"20%" , marginTop:"20px"}}> Not Cheated</h5>
        ):<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}} > Cell Phone Detected</h5>
    }

    
    {/* {
        faceReport[6].search(/cell phone/) === -1 ?(
            <h5 style={{width:"20%" , padding:"5px"  ,color:"white", backgroundColor:"green",marginLeft:"20%" , marginTop:"20px"}}> Not Cheated</h5>
        ):<h5 style={{width:"20%" , color:"white", backgroundColor:"red", padding:"5px"  ,marginLeft:"20%" , marginTop:"20px"}} > Cell Phone Detected</h5>
    } */}
    
    <p style={{width:"80%"  , marginLeft:"10%",  borderBottom:"5px solid black"}}>{}</p>
       </> )
    }







    {/* <h5 style={{width:"40%" , padding:"5px" ,marginTop:"5%", marginLeft:"40%"}}>Name: {result[3].Name} </h5>
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"40%"}}>Email: {result[3].Email} </h5>
    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Audio Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%"}}>{report[3]}</p>

    <h5 style={{width:"40%" , padding:"5px"  ,marginLeft:"20%" , marginTop:"50px"}}>Faces Result:</h5>
    <p style={{width:"40%" , padding:"10px" ,lineHeight: 2.6 , marginLeft:"20%" }}>{faceReport[3]}</p>
    <p style={{width:"80%"  , marginLeft:"10%",  borderBottom:"5px solid black"}}>{}</p> */}
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
