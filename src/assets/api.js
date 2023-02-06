import axios from "axios"


export const getInfo = async(state, city)=>{
    axios.get(`http://api.weatherapi.com/v1/current.json?key=98962b2e751c4791a7513515230401&q=${city}&lang=pt`)
    .then((response)=>{
        state(response.data)
        console.log(response)
       
    }).catch((error)=>{
        console.log(error)
    })
}