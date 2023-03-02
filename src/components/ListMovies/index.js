import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { baseImg } from '../../services/api';
import { useHorizontalScroll } from '../../utils/scrollHorizontal';
import { Link } from 'react-router-dom';
import { getListMovies } from '../../utils/movie';
import './index.css';

export default function ListMovie() {
    const [loading, setLoading] = useState(true)
    const [movie, setMovie]=useState([]);
    const [popular, setPopular]=useState([]);
    const [top, setTop]=useState([]);

    const scrollMov = useHorizontalScroll();
    const scrollPop = useHorizontalScroll();
    const scrollTop = useHorizontalScroll();

    useEffect(() => {
      
        async function getMovies() {
         
            const [nowData, popularData, topData] = await Promise.all([
                api.get('/movie/now_playing',{
                    params:{
                      api_key: '5bf5177de87a5166f67da9c486e2b2cb',
                      language:'pt-BR',
                      page:1
                    }
                  }),
                  api.get('/movie/popular',{
                    params:{
                      api_key: '5bf5177de87a5166f67da9c486e2b2cb',
                      language:'pt-BR',
                      page:1
                    }
                  }),
                  api.get('/movie/top_rated',{
                    params:{
                      api_key: '5bf5177de87a5166f67da9c486e2b2cb',
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

  return (   
        <>   

         {loading?(<div className='row-header-skeleton'></div>):(
          <h2 className='row-header'>No Cinema</h2>
         )}
          <div className='row-cards' ref={scrollMov}>
    
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
          <div className='row-cards' ref={scrollPop}>
    
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
    <div className='row-cards' ref={scrollTop}>
    
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
