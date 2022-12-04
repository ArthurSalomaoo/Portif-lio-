const API_KEY = '52049f468d48721a1489c682170d7877';
//https://api.themoviedb.org/3/movie/550?api_key=52049f468d48721a1489c682170d7877

/*eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjA0OWY0NjhkNDg3MjFhMTQ4OWM2ODIxNzBkNzg3NyIsInN1YiI6IjYzN2E4YjcxMzM2ZTAxMDBkOTc4YmJjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jlSBzzzNZe6xxa4b_JRLv87rtTY6rijfYNMunoZRX_g*/


function getFilme(){

    let id = Math.floor(Math.random() * 1000)

    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=52049f468d48721a1489c682170d7877&language=pt-BR`;
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';

    axios.get(URL)
    .then(data => {
        console.log(data.data)
        document.getElementById('filme').style = 'display: block'
        document.getElementById('fotoFilme').setAttribute('src', IMG_URL + data.data.poster_path)
        document.getElementById('tituloFilme').innerHTML = data.data.original_title
        document.getElementById('sinopse').innerHTML = data.data.overview
        if(!data.data.overview.length){
            document.getElementById('sinopse').innerHTML = "Sinopse não encontrada"

        }
    })

    .catch(error => {
        console.log(error)
        window.alert('Tente novamente')
        if(document.getElementById('filme').style = 'display: block'){
            document.getElementById('filme').style = 'display: none'
        }
    })   
}