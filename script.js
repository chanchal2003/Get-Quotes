let orgData="";
let quoteData="";
let data="";
let dataAut="";
const quotes=document.getElementById('quotes');
const author=document.getElementById('author');
const newBtn=document.getElementById('newBtn');

const image=document.createElement('img');
image.className='image';

const twitter=document.getElementById('twitter');

const whatsapp=document.getElementById('whatsapp');

const sharewhatsapp=()=>{
    let whatsappPost=`https://api.whatsapp.com/send?text=${data} By ${dataAut}`;//query parameters {data} and {dataAut} add quote and author in pop up
    window.open(whatsappPost)
}

const tweetNow=()=>{
    let tweetPost=`https://twitter.com/intent/tweet?text=${data} By ${dataAut}`; //directs you to twitter and opens tweet pop up 
    window.open(tweetPost)
}

//Generating Random Number
const   getNewQuotes=()=>{
    let rimage=Math.floor(Math.random()*32);//Math.random() provides a random value between 0 to 1
    console.log(rimage);
    image.src=`./images/${rimage}.jpg`;
    document.querySelector('.mainCard').appendChild(image)
    let rnum=Math.floor(Math.random()*1643); //1643 coz no. of quotes is 1643
    quoteData=orgData[rnum];
    data=orgData[rnum].text;
    quotes.innerText=`${orgData[rnum].text}`;
    quoteData.author==null
        ?(author.innerText='- UnKnown') 
        :(author.innerText=`- ${orgData[rnum].author}`);
    quoteData.author==null
        ?(dataAut='UnKnown')// if author is not given
        :(dataAut=orgData[rnum].author);
}
//asynchronous version/asynchronous JS
const getQuotes=async () =>{ //fat arrow fn
    const api="https://type.fit/api/quotes";
    try{
        let data=await fetch(api); //call the api
        orgData=await data.json();

        getNewQuotes();
    }
    catch(error){
        console.log(error);
    }
};

twitter.addEventListener('click',tweetNow);
whatsapp.addEventListener('click',sharewhatsapp)
newBtn.addEventListener('click',getNewQuotes);
getQuotes();



