import React, { useState } from "react";

function Wrapper() {

    let [rand,setRand] = useState([]);
    let [userNums, setUserNums] = useState([]);

    let [prize, setPrize] = useState(0);
    let [count, setCount] = useState(0);
    let [userNum0, setUserNum0] = useState("");
    let [userNum1, setUserNum1] = useState("");
    let [userNum2, setUserNum2] = useState("");
    let [userNum3, setUserNum3] = useState("");
    let [userNum4, setUserNum4] = useState("");
    let [userNum5, setUserNum5] = useState("");

    //generate random numbers
    function genRand(){
        
        function getNums(){
        for (let i = 0; i < 6; i++) {
            let random = Math.floor(Math.random()*49+1);
            rand[i] = random;
        }

        for (let i = 0; i < 6; i++) {
            for (let j = i+1; j < 6; j++) {
                if(rand[i]===rand[j]){
                    /* prevent the same numbers */
                   setRand([]);
                   getNums();
                }
            }
        }
    



        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                if(rand[i]<rand[j]){
                    let temp = rand[i];
                    rand[i] = rand[j];
                    rand[j] = temp;
                }
            }
        }

        setRand([...rand]);
    }

    getNums();

        userNums[0] = Number(userNum0);
        userNums[1] = Number(userNum1);
        userNums[2] = Number(userNum2);
        userNums[3] = Number(userNum3);
        userNums[4] = Number(userNum4);
        userNums[5] = Number(userNum5);

        for (let i = 0; i < 6; i++) {
            
                if(rand.includes(userNums[i])){
                    count+=1;
                }
            
        }

        if(count === 3){
            setPrize( Math.ceil(Math.random()*10)+"$");
        }
        else if(count === 4){
            setPrize( Math.ceil(Math.random()*1000)+"$");
        }
        else if(count === 5){
            setPrize( Math.ceil.apply(Math.random()*10000)+"$");
        }
        else if(count === 6){
            setPrize( Math.ceil(Math.random()*100000000)+"$");
        }
        else{
            setPrize(0+"$");
        }
        
    }
    
    function getVal0(e){
        setUserNum0(e.target.value);
    }

    function getVal1(e){
        setUserNum1(e.target.value);
    }

    function getVal2(e){
        setUserNum2(e.target.value);
    }

    function getVal3(e){
        setUserNum3(e.target.value);
    }

    function getVal4(e){
        setUserNum4(e.target.value);
    }

    function getVal5(e){
        setUserNum5(e.target.value);
    }

    function clearVals(){
        setUserNum0("");
        setUserNum1("");
        setUserNum2("");
        setUserNum3("");
        setUserNum4("");
        setUserNum5("");
        setRand([]);
        setUserNums([]);
        setPrize("");
        setCount(0);
    }

    return(
        <div className="Wrapper">
            <div className="lotto">LOTTO</div>
            <div>
            <input value={userNum0} type="text" onChange={getVal0}></input>
            <input value={userNum1} type="text" onChange={getVal1}></input>
            <input value={userNum2} type="text" onChange={getVal2}></input>
            <input value={userNum3} type="text" onChange={getVal3}></input>
            <input value={userNum4} type="text" onChange={getVal4}></input>
            <input value={userNum5} type="text" onChange={getVal5}></input>
            </div>
            <div className="Random-Nums">
            {rand.map((element,index)=>{
                return(
                    <div className="numbers" key={index}>{element}</div>
                )
            })}
            </div>
            <div className="Prize-Div">
            <p className="money">Prize: {prize}</p>
            </div>
            <div className="Button-Div">
                <button onClick={genRand}>Get Numbers</button>
                <button onClick={clearVals}>Clear</button>
            </div>
        </div>
    );
}

export default Wrapper;