import React from "react";
import { Link } from 'react-router-dom';

const MovieListCreator = ({ movies = [] }) => {

    return (
        <>
            <div className="mf_list_bx">
                <ul className="mf_list">
                    {
                        (movies.length) && (() => {

                            return (
                                <li>
                                    <span className='show_item show_id'>Id: </span>
                                    <span className='show_item show_name'>Title: </span>
                                    <span className='show_item show_year'>Year: </span>
                                    <span className='show_item show_runtime'>Rating: </span></li>
                            )
                        })()
                    }
                    {
                        (movies.length === 0) ? 'films not found' :
                            movies.map((el, index) => {
                                // console.log('--->', this.state.sortsfilms.length);
                                return (
                                    <li key={index}>
                                        <span className='show_item show_id'>{el.id}</span>
                                        <span className='show_item show_name'><Link to={`/movies/${el.id}`}>{el.name}</Link></span>
                                        <span className='show_item show_year'>{(el.year) ? el.year : 'unknown'}</span>
                                        <span className='show_item show_duration'>{el.rating} </span>
                                    </li>
                                );
                            }
                            )
                    }
                </ul>
            </div>
        </>
    );
}
export default MovieListCreator;