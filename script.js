//https://cataas.com/api/cats?tags=cute
let url1 ='https://cataas.com/api/cats'
async function catList(){
                         const response= await fetch(url1);
                         const catlist= await response.json();
                        console.log(catlist)
let display=""
catlist.map((values)=>{
                        
                         display+=` <div class= "cards">
                         
                        
                         <img src="https://cataas.com/cat/${values.id}">
                         <h2>${values.created_at}</h2>
                         <h3>${values.tags}</h3>
              
              </div>`
})
document.getElementById("all-cats").innerHTML=display;
}
catList();



document.getElementById('button').addEventListener('click',
async function catApi() {

let data = document.getElementById('search').value;
let url2= `https://cataas.com/api/cats?tags=${data}`


const response = await fetch(url2);
//console.log(response)
const result = await response.json();
console.log(result)

let output=""
result.map((values)=>{
                        
                         output+=` <div class= "cards">
                         <img  src="https://cataas.com/cat/${values.id}?tags=${data}">
                         <h3>${values.tags}</h3>
                        
                          </div>`
              document.getElementById("all-cats").innerHTML=output

})




})
//let url1 ='https://cataas.com/api/cats'
// async function catList(){
//                          const response= await fetch(url1);
//                          const catlist= await response.json();
//                         console.log(catlist)
// let display=""
// catlist.map((values)=>{
                        
//                          display+=` <div class="container">
//                          <img class = "card" src="https://cataas.com/cat/${values.id}">
//                          <h2>${values.created_at}</h2>
//                          <h3>${values.tags}</h3>
//               </div>`
// })
// document.getElementById("all-cats").innerHTML=display;
// }
// catList();