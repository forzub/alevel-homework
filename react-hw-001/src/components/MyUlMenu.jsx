import React from 'react';
import MyLiMenu from './MyLiMenu'

const MyUlMenu = ( {list=[], linkProps={}, liProps={}, ...props} ) => {

  if(!list.length){
    return (
      <ul
        {...props}>    
      </ul>
    )
  }

  return (
    <ul {...props}>
          {
              list.map( (listitem, index) => {
                //console.log(listitem);
                return <MyLiMenu href={listitem.href} key={index} linkProps={linkProps} liProps={liProps} >{listitem.text} </MyLiMenu>
              }
                
              )
          }
    </ul>
   
  );
}


export default MyUlMenu;