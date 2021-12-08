import React, { Fragment, Component } from 'react';
import MyButton from './MyButton';
import MyInput from './MyInput';

class FilmsList extends Component {
    constructor(props) {
        super(props);
        this.films = [];

        this.state = {
            searchValue: '',
            sortsfilms: [],
        }
    }

    ChangeValue = (val) => {
        this.setState({ value: val });
    }

    searchChange = (event) => {
        let arr = [];
        arr = this.films.filter(itm => itm.name.includes(event.target.value));
        this.setState({ ...this.state,  sortsfilms: [...arr], searchValue: event.target.value });
    }

    sortByField = (field) => {
        return (a, b) => a[field] > b[field] ? 1 : -1;
      }
    
    clicSortBtn = (field) => {
        let arrTmp = [...this.films];
        arrTmp.sort(this.sortByField(field));
        this.setState({ ...this.state, sortsfilms: [...arrTmp] });
    }


    componentDidMount() {
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
                        runtime: data[i].runtime 
                    });
                }
                this.setState({ ...this.state, sortsfilms: [...arr] });
                this.films = [...arr];

                //console.log('>>>', this.state.sortsfilms);
            });
    }


    render() {
        return (
            <Fragment>
                <div className="mf_sect">
                    <div className="mf_wrp">
                        <div className="mf_service_bx">
                            <div className="mf_search_bx">
                                <MyInput placeholder='enter a name to search' onChange={event => this.searchChange(event)} value={this.state.searchValue} />
                            </div>
                            <div className="mf_sort_bx">
                                <MyButton className='btn service_btn' onClick={()=>{ this.clicSortBtn('name') }} >Sort by name</MyButton>
                                <MyButton className='btn service_btn' onClick={()=>{ this.clicSortBtn('year') }} >Sort by year</MyButton>
                                <MyButton className='btn service_btn' onClick={()=>{ this.clicSortBtn('runtime') }} >Sort by runtime</MyButton>
                            </div>
                        </div>
                        <div className="mf_list_bx">
                            <ul className="mf_list">
                                {

                                    (this.state.sortsfilms.length) && (() => {
                                        // console.log('>>>', this.state.sortsfilms.length);
                                        return (
                                            <li><span className='show_item show_name'>Title: </span>
                                                <span className='show_item show_year'>Year: </span>
                                                <span className='show_item show_runtime'>Runtime, min: </span></li>
                                        )
                                    })()
                                }
                                {
                                    (this.state.sortsfilms.length === 0) ? 'films not found' :
                                        this.state.sortsfilms.map((el, index) => {
                                            // console.log('--->', this.state.sortsfilms.length);
                                            return (
                                                <li key={index}>
                                                    <span className='show_item show_name'>{el.name}</span>
                                                    <span className='show_item show_year'>{(el.year) ? el.year : 'unknown'}</span>
                                                    <span className='show_item show_duration'>{el.runtime} </span>
                                                </li>
                                            );
                                            //console.log('---->', el.name)
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
}

export default FilmsList;