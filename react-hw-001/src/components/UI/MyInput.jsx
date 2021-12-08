import React, { Fragment, useState} from 'react';

function MyInput( {type='text', ...props} ) {
 
    const [value, setValue] = useState('');

    return (
    <Fragment>
        <input 
            type={type}
            onChange={event => setValue(event.target.value)}
            value={value} 
            {...props} 
            
        />
    </Fragment>
  );
}

export default MyInput;