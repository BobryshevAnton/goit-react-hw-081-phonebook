import SignUp from 'components/SignUp/SignUp';
import { Helmet } from 'react-helmet';
import Section from 'components/Section/Section';

export const Register = () => {
  return (
    <Section>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <SignUp />
    </Section>
  );
};
export default Register;
