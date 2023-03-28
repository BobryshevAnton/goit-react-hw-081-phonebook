import css from './section.module.css';

export const Section = ({ children }) => {
  return <div className={css.section}>{children}</div>;
};
export default Section;
