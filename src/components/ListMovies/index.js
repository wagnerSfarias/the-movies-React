import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useHorizontalScroll } from '../../utils/scrollHorizontal';
import { Link } from 'react-router-dom';
import { getListMovies } from '../../utils/movie';
import './index.css';

const baseImg = 'https://image.tmdb.org/t/p/original';

export default function ListMovie() {
    const [loading, setLoading] = useState(true)
    const [movie, setMovie]=useState([]);
    const [popular, setPopular]=useState([]);
    const [top, setTop]=useState([]);
    const tes = useHorizontalScroll();
    const tes1 = useHorizontalScroll();
    const tes2 = useHorizontalScroll();

    useEffect(() => {
      
        async function getMovies() {
         
            const [nowData, popularData, topData] = await Promise.all([
                api.get('/movie/now_playing',{
                    params:{
                      api_key: process.env.REACT_APP_API_KEY,
                      language:'pt-BR',
                      page:1
                    }
                  }),
                  api.get('/movie/popular',{
                    params:{
                      api_key: process.env.REACT_APP_API_KEY,
                      language:'pt-BR',
                      page:1
                    }
                  }),
                  api.get('/movie/top_rated',{
                    params:{
                      api_key: process.env.REACT_APP_API_KEY,
                      language:'pt-BR',
                      page:1
                    }
                  }),
              ])

              const nowList = getListMovies(15, nowData.data.results);
              const popularList = getListMovies(15, popularData.data.results);
              const topList = getListMovies(10, topData.data.results);
              
              setMovie(nowList);
              setPopular(popularList);
              setTop(topList);
              setLoading(false);
        }
    
        getMovies();
        
      }, [])

      // if(movie.length === 0){
      //   return(
      //       <>
      //       <div className='row-header-skeleton'></div>
      //     <div className='row-cards'>
      //      {Array(10).fill().map((data,index)=>{ return(
      //       <Link to={'/'} className='btn-movie' key={index}>
      //        <div key={index} className='movie-card-skeleton'></div>
      //       </Link>
      //     )
      //     })}
      //     </div>
      //     </>
      //   )
      // }

  
  return (   
        <>     
         {loading?(<div className='row-header-skeleton'></div>):(
          <h2 className='row-header'>No Cinema</h2>
         )}
          <div className='row-cards' ref={tes}>
    
          {loading ?(<>
            {Array(10).fill().map((data,index)=>{ return(
                  <Link to={'/'} className='btn-movie' key={index}>
                   <div key={index} className='movie-card-skeleton'></div>
                  </Link>
                )
                })}
    
          </>):(<>
    
                {movie?.map(movie => {
                    return (
                      <Link  to={`/detail/${movie.id}`} className='btn-movie'
                     key={movie.id}>
                     <img className='movie-card'
                       src={movie.poster_path?`${baseImg}${movie.poster_path}`:'null'}
                       alt={movie.name} />
                       </Link>
                    )
                    })
                   }           
          </>)}
    
          </div>
          {loading?(<div className='row-header-skeleton'></div>):(
          <h2 className='row-header'>Popular</h2>
         )}
          <div className='row-cards' ref={tes1}>
    
    {loading ?(<>
      {Array(10).fill().map((data,index)=>{ return(
            <Link to={'/'} className='btn-movie' key={index}>
             <div key={index} className='movie-card-skeleton'></div>
            </Link>
          )
          })}

    </>):(<>
          {popular?.map(movie => {
              return (
                <Link  to={`/detail/${movie.id}`} className='btn-movie'
               key={movie.id}>
               <img className='movie-card'
                 src={movie.poster_path?`${baseImg}${movie.poster_path}`:'null'}
                 alt={movie.name} />
                 </Link>
              )
              })
             } 
    </>)}

    </div>
    {loading?(<div className='row-header-skeleton'></div>):(
          <h2 className='row-header'>Bem-Avaliados</h2>
         )}
    <div className='row-cards' ref={tes2}>
    
    {loading ?(<>
      {Array(10).fill().map((data,index)=>{ return(
            <Link to={'/'} className='btn-movie' key={index}>
             <div key={index} className='movie-card-skeleton'></div>
            </Link>
          )
          })}

    </>):(<>
  
          {top?.map(movie => {
              return (
                <Link  to={`/detail/${movie.id}`} className='btn-movie'
               key={movie.id}>
               <img className='movie-card'
                 src={movie.poster_path?`${baseImg}${movie.poster_path}`:'null'}
                 alt={movie.name} />
                 </Link>
              )
              })
             }
        
    </>)}

    </div>
          
</>
    
  );

}
