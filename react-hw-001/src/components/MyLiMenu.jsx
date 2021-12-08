import React, { Fragment} from 'react';
import Link from './Link'

function MyLiMenu( {href='#', children, linkProps={}, liProps={}, ...props} ) {
 
    
     return (
       <Fragment>
         <li {...props} {...liProps}> <Link href={href} {...linkProps}>{children}</Link> </li>
       </Fragment>
     );
   }


export default MyLiMenu;