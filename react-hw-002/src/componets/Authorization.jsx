import React, { Fragment, Component } from 'react';
import MyButton from './MyButton';
import MyInput from './MyInput';

class Authorization extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', message: '' }
    }

    SubmitForm = (e) => {
        e.preventDefault();
        if((this.state.username === '') || (this.state.password === '')){
            this.setState({...this.state, message:`не заполнено поле ${ !this.state.username ? 'юзер найм' : 'пароль'}` });
            return;
        }else{
            console.log('user name', this.state.username);
            console.log('password', this.state.password);
        }
        
    }

    render() {
        return (
            <Fragment>
                <div className="aform-sect">
                    <div className="aform-wrp">
                        <form className="aform" id='aform' onSubmit={event => this.SubmitForm(event)}>
                            <div className="aform-in-bx">
                                <label htmlFor="uname" className="aform-label">User Name</label>
                                <MyInput name='uname' value={this.state.username} onChange={event => this.setState({...this.state, username: event.target.value}) } />
                            </div>
                            <div className="aform-in-bx">
                                <label htmlFor="upas" className="aform-label">Password</label>
                                <MyInput name='upas' value={this.state.password} onChange={event => this.setState({...this.state, password: event.target.value}) } />
                            </div>
                            <div className="aform-btn-bx">
                                <MyButton type='submit' form='aform'>Submit</MyButton>
                            </div>
                        </form>
                        <div className="aform-mess">{this.state.message}</div>
                    </div>
                </div>
            </Fragment>
        );
    }
}




export default Authorization;