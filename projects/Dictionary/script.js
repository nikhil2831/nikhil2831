
// let word="hello"
let api=`https://api.dictionaryapi.dev/api/v2/entries/en/`;
async function check(word){
    try{
        let res=await fetch(api+word);
        let res1=await res.json();
        // console.log(res1);
        let ret=(res1[0]['meanings'][0]['definitions'][0]['definition']);
        return ret;
        
        } catch(e){
            console.log(e);
            return "no data found";
        }
}
let btn=document.querySelector("#check");
btn.addEventListener("click",async ()=>{
    let word=document.querySelector("#word").value;
    let result= await check(word);
    // console.log(result);
    let m=document.querySelector("p");
    m.innerText=result;

})