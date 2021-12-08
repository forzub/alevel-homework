import React, { Fragment} from 'react';

function Link( {href='#', children,  ...props} ) {
  return (
    <Fragment>
      <a href={href} {...props}>{children}</a>
    </Fragment>
  );
}

export default Link;
