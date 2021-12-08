import React, { Fragment} from 'react';
import styleCSS from './Footer.module.css';
import MyUlMenu from './MyUlMenu';

function Footer() {
  
  const footelListLeft = [
    {text:'Все о Google', href: '#'},
    {text:'Реклама', href: '#'},
    {text:'Для бизнеса', href: '#'},
    {text:'Как работает Google поиск', href: '#'},
  ];
  const footelListRight = [
    {text:'Конфиденциальность', href: '#'},
    {text:'Условия', href: '#'},
    {text:'Настройки', href: '#'},
  ];
  

  return (
    <Fragment>
      <footer className={styleCSS.footer}> 
        <div className={styleCSS.ft1}>Украина</div> 
        <div className={styleCSS.ft2}>
          <MyUlMenu 
            list={footelListLeft}  
            className={`${styleCSS.left_menu} ${styleCSS.ul}`} 
            linkProps={{className: `${styleCSS.li_link}`}}
            liProps={{className: `${styleCSS.li}`}} 
            style={{color:'black'}} 
          />
          <MyUlMenu list={footelListRight} className={`${styleCSS.right_menu} ${styleCSS.ul}`} linkProps={{className: `${styleCSS.li_link}` }}   />
        </div> 
      </footer>
    </Fragment>
  );
}

// 
// 
export default Footer;