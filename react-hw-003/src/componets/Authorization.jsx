import React, { Fragment,  useState } from 'react';
import MyButton from './MyButton';
import MyInput from './MyInput';


const Authorization = () => {

    const [myState, setMyState] = useState( { username: '', password: '', message: '' } );

    const SubmitForm = (e) => {
        e.preventDefault();
        if((myState.username === '') || (myState.password === '')){
            setMyState( {...myState, message:`не заполнено поле ${ !myState.username ? 'юзер найм' : 'пароль'}` } );
            return;
        }else{
            console.log('user name', myState.username);
            console.log('password', myState.password);
        }    
    }
    return (
        <Fragment>
            <div className="aform-sect">
                <div className="aform-wrp">
                    <form className="aform" id='aform' onSubmit={event => SubmitForm(event)}>
                        <div className="aform-in-bx">
                            <label htmlFor="uname" className="aform-label">User Name</label>
                            <MyInput name='uname' value={myState.username} onChange={event => setMyState({...myState, username: event.target.value}) } />
                        </div>
                        <div className="aform-in-bx">
                            <label htmlFor="upas" className="aform-label">Password</label>
                            <MyInput name='upas' value={myState.password} onChange={event => setMyState({...myState, password: event.target.value}) } />
                        </div>
                        <div className="aform-btn-bx">
                            <MyButton type='submit' form='aform'>Submit</MyButton>
                        </div>
                    </form>
                    <div className="aform-mess">{myState.message}</div>
                </div>
            </div>
        </Fragment>
    );

}


export default Authorization;