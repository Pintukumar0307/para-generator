const input=document.getElementById("numOfwords");
const container=document.querySelector(".container");

const generateWord = (n)=>{
    let text ="";
    const letters ="abcdefghijklmnopqrstuvwxyz";

    for(let i=0;i<n;++i){
        const random = (Math.random()*(letters.length-1)).toFixed(0);
        text +=letters[random];
          
    }

    return text;
};



let numOfwords;

const generatorPara = ()=>{

    numOfwords=Number(input.value);

    const para=document.createElement("p");

    let data="";

    for(let i=0;i<numOfwords;++i){
        const randomNum=(Math.random()*15).toFixed(0);
      data +=  generateWord(randomNum);
      data+=" ";
    }

    para.innerText=data;

    para.setAttribute("class","paras");
    
    container.append(para);
};
