import { toast } from 'react-toastify';

//buscar os filmes salvos
export  function getMoviesSave(key){
    const myMovies =  localStorage.getItem(key)

    let moviesSave = JSON.parse(myMovies) || [];

    return moviesSave;
}
//salvar um novo filme
export  function saveMovie(key, newMovie){
   
    let movieStored =  getMoviesSave(key);

    //se tiver algum filme salvo com esse id ele ignora
    const hasMovie = movieStored.some( item => item.id === newMovie.id);

    if(hasMovie){
        toast.info('Filme já esta salvo');
        return;
    }
    movieStored.push(newMovie);

     localStorage.setItem(key, JSON.stringify(movieStored));
        toast.success('Filme salvo');
}
//deletar algum filme especifico

export  function deleteMovie(id){
    let movieStored =  getMoviesSave('@movies');

    let myMovies = movieStored.filter( item => {
        return (item.id !== id)
    })

     localStorage.setItem('@movies', JSON.stringify(myMovies))
    toast.success('Filme Deletado');
    return myMovies;
}

//filtar algum filme que ja esteja salvo

export  function hasMovie(movie){
    let movieStored =  getMoviesSave('@movies');
    
    const hasMovie = movieStored.find(item => item.id === movie.id);

    if(hasMovie){
        return true;
    }
    return false;
}