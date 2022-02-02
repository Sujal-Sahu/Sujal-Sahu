import React , {useState} from 'react'

export default function Textform(props){
    const handleonchange = (event) => {
          
          setText(event.target.value);
    } 
    const upperconv = ()=>{
      // console.log("click was detected.");
      // setText("you have clicked up on button.");
      
      let newtext = text.toUpperCase();
      setText(newtext);
      props.showalert1("success","convert to uppercase");
    }
    const lowerconv = ()=>{
      // console.log("click was detected.");
      // setText("you have clicked up on button.");
      let newtext = text.toLowerCase();
      setText(newtext);
      props.showalert1("success","convert to lowercase");
    }
    const copytext = () =>{
      navigator.clipboard.writeText(text);
      props.showalert1("success","Copied to clipboard");
    }
    const cleartext = () =>{
      setText("");
      props.showalert1("success","Clear text");
    }
    const handlespaces = () =>{
      let newpara = text.split(/[ ]+/);
      setText(newpara.join(" "));
      props.showalert1("success","Remove extra spaces");
    }
    const [text, setText] = useState("");
    let length1 = text.split(" ").length;
    if(text==="" && length1===1){
      length1 = length1-1;
    }
    let time1 = 0.008 * length1;
    let text1 = "Enter something in the textbox to see the preview";
    return(
        <>
        <div>
            <div className="container">
            {/* <div className="mb-3">
            {/* <label htmlFor="exampleFormControlInput1" classNamr="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/> */}
            {/* </div> }*/}
            <div className="mb-3 my-3">
            <div className="my-3">
              <h1>Enter The Text To Analyze</h1>
            </div>
            <textarea className="form-control" id="mybox" value={text} placeholder="Enter Text Here" rows="9" onChange={handleonchange}></textarea>
            </div>
            </div>
            <div className="container">
            <button className="btn btn-primary mx-1 my-1" onClick={upperconv}>
                Transform To UpperCase
            </button>
            <button className="btn btn-primary mx-1 my-1" onClick={lowerconv}>
                Transform To LowerCase
            </button>
            <button className="btn btn-primary mx-1 my-1" onClick={cleartext}>
                ClearText
            </button>
            <button className="btn btn-primary mx-1 my-1" onClick={handlespaces}>
                Remove Extra Spaces
            </button>
            <button className="btn btn-primary mx-1 my-1" onClick={copytext}>
                Copy Text
            </button>
            </div>
            </div>
            <div className="container">
                <h2>Your Text Summary</h2>
                <p>{length1} words and {text.length} characters</p>
                <p>{time1} minutes to read</p>
                </div>
                <div className="container mb-5">
                <h2>
                  Preview : 
                </h2>
                <p>{text==="" ? text1:text}</p>
            </div>
            </>
    )
}