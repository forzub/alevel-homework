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
        this.setState({ ...this.state, searchValue: event.target.value });

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
                
                if(data.length < arrLen) {arrLen = data.length}
                for(let i = 0; i < arrLen; i++){
                    arr.push(data[i]);
                }
                this.setState({...this.state, sortsfilms: [...arr]});
                this.films = [...arr];

                console.log('>>>', this.state.sortsfilms);  
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
                                <MyButton className='btn service_btn' >Sort by name</MyButton>
                                <MyButton className='btn service_btn' >Sort by year</MyButton>
                                <MyButton className='btn service_btn' >Sort by duration</MyButton>
                            </div>
                        </div>
                        <div className="mf_list_bx">
                            <ul className="mf_list">
                                {
                                    
                                     (this.state.sortsfilms.length === 0) ? 'films not found' : this.state.sortsfilms.map((el) => {
                                       return(
                                       <li>
                                            <span className='show_item show_name'><i>Title: </i>{el.name}</span>
                                            <span className='show_item show_year'><i>Year: </i>{(el.premiered) ? el.premiered.slice(0,4) : 'unknown' }</span>
                                            <span className='show_item show_duration'><i>Runtime: </i>{el.runtime} min</span>
                                        </li>
                                        );
                                        //console.log('---->', el.name)
                                     })
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