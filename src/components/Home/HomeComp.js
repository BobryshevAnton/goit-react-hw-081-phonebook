import css from './homeComp.module.css';

export const HomeComp = () => {
  return (
    <div className={css.homeConteiner}>
      <h1 className={css.homeTitle}>You are welcome!!!</h1>
      <a href="https://www.edu.goit.global/ru/homepage">
        <span role="img" aria-label="Greeting icon" className={css.homeImg}>
          💁‍♀️
        </span>
        <h1 className={css.homeTitle}>"Klick to pictures, now"</h1>
      </a>
    </div>
  );
};
