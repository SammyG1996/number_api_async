// This will get the numbers from the API
async function getNumber() {
  
    const data = await axios.get('http://numbersapi.com/7..10/date', {params:{q:'json'}});
    // This will initiate the call and if succesfull will add to the DOM
    const info = {...data.data}
    for (item of Object.entries(info)) {
      console.log(item[0], item[1])
      const p_tag = document.createElement('p')
      p_tag.innerText = `${item[0]} - ${item[1]}`
      document.querySelector('body').append(p_tag)
    }
  
}

getNumber();

