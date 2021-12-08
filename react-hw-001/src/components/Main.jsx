import React, { Fragment} from 'react';
import googleLogo from '../img/google-logo.png';
import searchPic from '../img/search.svg';
import styleCSS from './Main.module.css';
import MyImage from './MyImage'
import MyInput from './UI/MyInput'

function Main() {

const search_input_style = {
  backgroundImage: `url(${searchPic})`,
  backgroundRepeat: 'no-repeat'
}

  return (
    <Fragment>
      <main className={styleCSS.main}>
        <div className={styleCSS.main_img_bx}>
          <MyImage src={googleLogo} alt='gogle logo' className={styleCSS.google_logo_img} width='960' height='540' />
        </div>
        <div className={styleCSS.main_input_bx}>
          <MyInput className={styleCSS.search_input} placeholder='Введите поисковый запрос или URL' style={search_input_style} />
        </div>
      </main>
    </Fragment>
  );
}

export default Main;
