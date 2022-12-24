const jokeContainer = document.querySelector('#joke')
const btn = document.querySelector('.btn')
const url = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?type=single'
// const joke = data.joke

let getJoke = async (url) =>{
  let response = await fetch(url)
  let data = await response.json()
  const jokeObj = {
    joke: data.joke
  }
  return jokeObj
}

btn.addEventListener('click', async () => {
  const data = await getJoke(url)
  showJoke(data)

})

const showJoke = (e) =>{
  jokeContainer.textContent = e.joke
}