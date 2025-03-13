import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '18be5341450749e7a3714e90315b2fb6'
    }
})

// export default axios.create({
//     baseURL: 'http://localhost:3000'
// })