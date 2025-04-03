import { NextPage } from 'next';
import Head from 'next/head';
import OnboardingWizard from '../components/OnboardingWizard';

const OnboardingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>DisasterPrep - Onboarding</title>
        <meta name="description" content="Complete your profile to get personalized disaster alerts and resources" />
      </Head>
      
      <main>
        <OnboardingWizard />
      </main>
    </>
  );
};

export default OnboardingPage; 