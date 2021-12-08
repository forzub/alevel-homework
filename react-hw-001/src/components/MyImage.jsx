import React, { Fragment} from 'react';
import notImage from '../img/not_img.png';


function MyImage( {src, alt='image',  ...props} ) {
 
 src = src || notImage;
 
  return (
    <Fragment>
      <img
        src={src}
        alt={alt}
        {...props}
      />
    </Fragment>
  );
}




export default MyImage;