import React, { useState } from 'react';
import MyButton from '../componets/basic/MyButton';
import MyInput from '../componets/basic/MyInput';
import MovieListCreator from '../componets/MovieListCreator';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';


export const normolizeData = (data) => {
    let arr = [];
    let arrLen = 20;
    
    if (data.length < arrLen) { arrLen = data.length }
    for (let i = 0; i < arrLen; i++) {
        
        arr.push({
            id: data[i].id,
            name: data[i].name,
            year: data[i].premiered.slice(0, 4),
            rating: data[i].rating.average
        });
        
    }
    
    return arr;
}

const sortByField = (field) => {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

const filterSortFn = (movies, sort, search) => {
    let newMovie = [...movies];
    if (search.length > 0) {
        newMovie = newMovie.filter(
            (movie) => movie.name.toLowerCase().includes(search.toLowerCase())
        );
    }
    if(sort.length){ newMovie.sort(sortByField(sort));}

    return newMovie;
}




const Movies = ({movies}) => {
    
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [searchparams, setSearchParams] = useSearchParams();



    const searchChange = (event) => {
        setSearch(event.target.value);
    }

    

    const clicSortBtn = (field) => {
        setSort(field);
    }

    useEffect( () =>{
        setSearchParams({sort});   
    }
       ,[sort]);



    return (
        <>
            <div className="mf_sect">
                <div className="mf_wrp">
                    <div className="mf_service_bx">
                        <div className="mf_search_bx">
                            <MyInput placeholder='enter a name to search' onChange={event => searchChange(event)} value={search} />
                        </div>
                        <div className="mf_sort_bx">
                            <MyButton className='btn service_btn' onClick={() => { clicSortBtn('name') }} >Sort by name</MyButton>
                            <MyButton className='btn service_btn' onClick={() => { clicSortBtn('year') }} >Sort by year</MyButton>
                            <MyButton className='btn service_btn' onClick={() => { clicSortBtn('rating') }} >Sort by rating</MyButton>
                        </div>
                    </div>
                    <MovieListCreator movies={ filterSortFn(movies,sort,search) }/>
                </div>
            </div>
        </>
    );
}


export default Movies;