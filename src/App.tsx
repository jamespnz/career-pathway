import { LanguageProvider } from '@/context/LanguageContext';
import { RouterProvider, useRouter } from '@/context/RouterContext';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import Level4Page from '@/pages/Level4Page';
import Level5Page from '@/pages/Level5Page';
import FoodTechPage from '@/pages/FoodTechPage';
import NZWorkPage from '@/pages/NZWorkPage';
import TimelinePage from '@/pages/TimelinePage';
import EmployerMapPage from '@/pages/EmployerMapPage';
import DecisionMatrixPage from '@/pages/DecisionMatrixPage';
import ExecutiveSummaryPage from '@/pages/ExecutiveSummaryPage';

function PageRenderer() {
  const { page } = useRouter();
  switch (page) {
    case 'home':
      return <HomePage />;
    case 'level4':
      return <Level4Page />;
    case 'level5':
      return <Level5Page />;
    case 'foodtech':
      return <FoodTechPage />;
    case 'nzwork':
      return <NZWorkPage />;
    case 'timeline':
      return <TimelinePage />;
    case 'map':
      return <EmployerMapPage />;
    case 'matrix':
      return <DecisionMatrixPage />;
    case 'summary':
      return <ExecutiveSummaryPage />;
    default:
      return <HomePage />;
  }
}

function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <Layout>
          <PageRenderer />
        </Layout>
      </RouterProvider>
    </LanguageProvider>
  );
}

export default App;
