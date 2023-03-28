import Section from 'components/Section/Section';
import css from './footer.module.css';
export const Footer = () => {
  return (
    <Section>
      <div className={css.footerdStyle}>
        <p className={css.footerdTitle}> Make with love about for use...</p>
        <p className={css.footerdTitle}>Developer: Bobryshev Anton</p>
        <p className={css.footerdTitle}>e-mail: antonpiligrim@gmail.com</p>
      </div>
    </Section>
  );
};
export default Footer;
