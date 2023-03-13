import React, {useState} from "react";


export default function Textform(props) {
    const handleUpClick = ()=>{
        setText(text.toUpperCase());
        props.setAlertMessage("converted to uppercase", "success");
    }

    const handleLoClick = ()=>{
        setText(text.toLowerCase());
        props.setAlertMessage("converted to lowercase", "success");
    }

    const handleClearClick = ()=>{
        setText('');
    }

    const handleCopyText = () => {
        navigator.clipboard.writeText(text)
        props.setAlertMessage("copied to clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        navigator.clipboard.writeText(text)
        props.setAlertMessage("extra spaces removed!", "success");
    }

    const handleWordFrequencyClick = ()=>{
        const stickyWords =[
            "the",
            "there",
            "their",
            "you",
            "these","is",
            "by",
            "at",
            "and",
            "so",
            "if",
            "than",
            "but",
            "about",
            "in",
            "on",
            "the",
            "was",
            "for",
            "that",
            "said",
            "a",
            "or",
            "of",
            "to",
            "there",
            "will",
            "be",
            "what",
            "get",
            "go",
            "think",
            "just",
            "every",
            "are",
            "it",
            "were",
            "had",
            "i",
            "very",
            ];
        let splitUp = text.split(/\s/);
        const wordsArray = splitUp.filter(function(x){
            return !stickyWords.includes(x) ;
                    });
        let word_occurrences = {};
        for (let word of wordsArray) {
            if (word_occurrences[word]) {
                word_occurrences[word]++;
            }
            else {
                word_occurrences[word] = 1;
            }
        }
        console.log(word_occurrences)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value); 
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.headings}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',
                color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1`} onClick={handleUpClick}> Convert to uppercase</button>
                <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1`} onClick={handleLoClick}> Convert to lowercase</button>
                <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1`} onClick={handleClearClick}> Clear Text</button>
                <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1`} onClick={handleWordFrequencyClick}> Word Frequency</button>
                <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1`} onClick={handleCopyText}> Copy Text</button>
                <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1`} onClick={handleExtraSpaces}> Remove Extra Spaces</button>

            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length -1} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview here"}</p>
            </div>
        </>
    );
}
