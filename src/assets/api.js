import axios from "axios"

export const getInfo = async (state, city) => {
   const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=98962b2e751c4791a7513515230401&q=${city}&lang=pt`)
   
      state(response.data)
    
        .catch((error) => {
            console.log(error)
        })
}
