async function GetDataApi(){
    const response= await fetch("https://freetestapi.com/api/v1/books")
    const data= await response.json()
    
   return data

}

export {GetDataApi}