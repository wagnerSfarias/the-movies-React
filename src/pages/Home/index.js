import React, { useState, useEffect } from 'react';
import './index.css';
import api from '../../services/api';
import HeaderHome from '../../components/HeaderHome';
import ListMovie from '../../components/ListMovies';

const baseImg = 'https://image.tmdb.org/t/p/original/';

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState([]);

  useEffect(()=>{
      let isActive = true;
      async function loadMovie(){
     
        window.scrollTo(0, 0);
        const response = await api.get(`/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`)
      if(isActive){
        const data = response.data?.results;
        const random = Math.floor(Math.random()* data.length)
        setMovie(data[random]);

        setLoading(false);
      }
        
      }
      loadMovie();

      return() =>{
        isActive = false;
        // console.log('saiu')
      }
  },[])


  // if(movie.length === 0){
  //   return(
  //       <>
  //       <div className='header-skeleton'>    
  //                <div className='banner-content-skeleton'>
  //                  <h1 className='banner-title-skeleton'></h1>
  //              </div>
  //           </div>
  //     </>
  //   )
  // }

 
  return (
    <div className='container-home'>
      <HeaderHome/>
           {loading?(
              <div className='header-skeleton'>    
                 <div className='banner-content-skeleton'>
                   <div className='banner-title-skeleton'></div>
               </div>
            </div>
          ):(
            
            <div className='header'
            style={{
             backgroundSize:'cover',
             backgroundImage: `url(${movie?.backdrop_path ? `${baseImg}${movie?.backdrop_path}` : "Another Image Link"})`,
             backgroundPosition:'center-center'
           }} 
           >
              
             <div className='banner-content'>
               <h1 className='banner-title'>
                   {movie?.title || movie?.name || movie?.original_name}
               </h1>
           </div>
   
            </div>
          )} 

          {/* {categories.map( category =>{   
             return <ListMovies key={category.category} data={category}/>
          })} */}

            <ListMovie/>

    </div>
  );
}

