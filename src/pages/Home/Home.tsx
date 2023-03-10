import { Section, HomeContainer } from '../../components';
import { useFriends, useDetails } from './hooks';
import { useAppNavigation } from '../../shared/hooks';

export const Home = () => {
  const { friends, isLoading, isError } = useFriends();
  const { isDisabled } = useDetails();
  const { navigation } = useAppNavigation();

  return (
    <Section>
      <HomeContainer
        title="Friends"
        data={friends}
        isError={isError}
        isDisabled={isDisabled}
        isLoading={isLoading}
        onClick={() => navigation('/details')}
      />
    </Section>
  );
};
