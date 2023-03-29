import css from './homeComp.module.css';

export const HomeComp = () => {
  return (
    <div className={css.homeConteiner}>
      {/* <h1 className={css.homeTitle}>Welcome to study platform for IT</h1> */}
      <h1 className={css.homeTitle}>You are welcome!!!</h1>
      <a href="https://www.edu.goit.global/ru/homepage">
        {/* <img
          className={css.homeImg}
          src="https://web-dev-goit.s3.eu-north-1.amazonaws.com/app/uploads/2023/02/23091402/preview_main_1200x630.jpg"
          alt=""
        /> */}
        <span role="img" aria-label="Greeting icon" className={css.homeImg}>
          💁‍♀️
        </span>
        <h1 className={css.homeTitle}>"Klick to pictures, now"</h1>
      </a>
    </div>
  );
};
