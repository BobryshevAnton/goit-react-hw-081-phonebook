import Section from 'components/Section/Section';
import { HomeComp } from 'components/Home/HomeComp';
import { Helmet } from 'react-helmet';
export const Home = () => {
  return (
    <Section>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomeComp />
    </Section>
  );
};
export default Home;
