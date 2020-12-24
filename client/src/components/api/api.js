import axios from 'axios';

export function Test(){
    console.log("test")
}

export async function getWeeks() {
    var temp;
    axios.get('/api/weeks')
      .then(w => {
        temp = w.data
      })
      .catch(function (error) {
        console.log(error);
      })

    return temp;

}

export default { Test };