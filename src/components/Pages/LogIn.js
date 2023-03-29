import Section from 'components/Section/Section';
import { Helmet } from 'react-helmet';

import SignIn from 'components/SignIn/SignIn';

export const LogIn = () => {
  return (
    <Section>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <SignIn />
    </Section>
  );
};
export default LogIn;
