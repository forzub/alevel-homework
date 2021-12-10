import React, { Fragment, useState } from 'react';
import MyInput from './MyInput';

const RangeToInput = (props) => {

    const [myState, setMyState] = useState( { value: 50 } );

    const ChangeValue = (val) => {
        setMyState( {...myState,  value: val} );
    }

    return (
        <Fragment>
            <div className="ri_sect">
                <div className="ri_wrp">
                    <div className="ri-range-bx">
                        <MyInput type='range' min='0' max='100' step="1" onChange={e => ChangeValue(e.target.value)} onInput={e => ChangeValue(e.target.value)} value={myState.value} />
                    </div>
                    <div className="ri-input-bx">
                        <MyInput type='text' value={myState.value} onChange={() => null} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}




export default RangeToInput;