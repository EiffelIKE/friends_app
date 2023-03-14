import { useNavigate } from 'react-router-dom';
import { Section, HomeContainer } from '../../components';
import { useFriends, useDetails } from './hooks';

export const Home = () => {
  const { friends, isLoading, isError } = useFriends();
  const { isDisabled } = useDetails();
  const navigate = useNavigate();

  return (
    <Section>
      <HomeContainer
        title="Friends"
        data={friends}
        isError={isError}
        isDisabled={isDisabled}
        isLoading={isLoading}
        onClick={() => navigate('/details')}
      />
    </Section>
  );
};
