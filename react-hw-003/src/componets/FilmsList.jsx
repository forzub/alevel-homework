import React, { Fragment, useEffect, useState } from 'react';
import MyButton from './MyButton';
import MyInput from './MyInput';


const FilmsList = () => {
    const [MyState, setMyState] = useState({
        searchValue: '',
        sortsfilms: [],
        films: []
    });

    

    const searchChange = (event) => {
        let arr = [];
        arr = MyState.films.filter(itm => itm.name.includes(event.target.value));
        setMyState( { ...MyState, sortsfilms: [...arr], searchValue: event.target.value } );
    }

    const sortByField = (field) => {
        return (a, b) => a[field] > b[field] ? 1 : -1;
    }

    const clicSortBtn = (field) => {
       // console.log('->>', MyState.films);
        let arrTmp = [...MyState.films];
        arrTmp.sort(sortByField(field));
        setMyState( { ...MyState, sortsfilms: [...arrTmp] } );
    }

    const ReadURL = () => {

        const url = 'http://api.tvmaze.com/shows';
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let arr = [];
                let arrLen = 20;

                if (data.length < arrLen) { arrLen = data.length }
                for (let i = 0; i < arrLen; i++) {
                    arr.push({
                        name: data[i].name,
                        year: data[i].premiered.slice(0, 4),
                        rating: data[i].rating.average
                    });
                }
                setMyState(MyState => ({ ...MyState, sortsfilms: [...arr], films: [...arr]  }));
            });
            
    }


    useEffect( ReadURL, [] );

 
    return (
        <Fragment>
            <div className="mf_sect">
                <div className="mf_wrp">
                    <div className="mf_service_bx">
                        <div className="mf_search_bx">
                            <MyInput placeholder='enter a name to search' onChange={event => searchChange(event)} value={MyState.searchValue} />
                        </div>
                        <div className="mf_sort_bx">
                            <MyButton className='btn service_btn' onClick={() => { clicSortBtn('name') }} >Sort by name</MyButton>
                            <MyButton className='btn service_btn' onClick={() => { clicSortBtn('year') }} >Sort by year</MyButton>
                            <MyButton className='btn service_btn' onClick={() => { clicSortBtn('rating') }} >Sort by rating</MyButton>
                        </div>
                    </div>
                    <div className="mf_list_bx">
                        <ul className="mf_list">
                            {

                                (MyState.sortsfilms.length) && (() => {

                                    return (
                                        <li><span className='show_item show_name'>Title: </span>
                                            <span className='show_item show_year'>Year: </span>
                                            <span className='show_item show_runtime'>Rating: </span></li>
                                    )
                                })()
                            }
                            {
                                (MyState.sortsfilms.length === 0) ? 'films not found' :
                                    MyState.sortsfilms.map((el, index) => {
                                        // console.log('--->', this.state.sortsfilms.length);
                                        return (
                                            <li key={index}>
                                                <span className='show_item show_name'>{el.name}</span>
                                                <span className='show_item show_year'>{(el.year) ? el.year : 'unknown'}</span>
                                                <span className='show_item show_duration'>{el.rating} </span>
                                            </li>
                                        );
                                    }
                                    )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default FilmsList;