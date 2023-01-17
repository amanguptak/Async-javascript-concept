 const data = [{
    name:"Aman Gupta",
    job:"Frontend Dev"
 },
 {
    name:"Anand",
    job:"Backend Dev"
 },
]


function showData(){
    setTimeout(() => {
        let li=""
        data.forEach(element => {
         li+=`<h1>${element.name}</h1>`   
        });
        document.body.innerHTML=li
    },1000);

}

function createData(newdata,callback) {
    setTimeout(() => {
        data.push(newdata) 
        callback();
    },2000)
  
}

// showData()
// createData({name:"Anupam", job:"Spring"})
  //in above example we get a problem that data anupam will not show on the screen because it will added
  //in 2s after so we can overcome this problem using async js

//1. using callback
// createData({name:"Anupam", job:"Spring"},showData)

//2. we can use Promises it takes two parameters resolve and reject

function createData(newdata) {

   return new Promise((resolve, reject)=> {
    setTimeout(() => {
        data.push(newdata) 
        let err = false
        if(!err){
            resolve()
        }else{
            reject("some error occured while creating")
        }
        
    },2000)

    })
   
  
}
// createData({name:"Anupam", job:"Spring"})
// .then(showData)
// .catch(err=> console.log(err))

//3. async and await it use for fetching the data from api

const start = async () => {
    await createData({name:"Anupam", job:"Spring"})
    showData()
}

start()

