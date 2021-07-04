import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import CommonHeader from './CommonHeader'
import DashboardContainer from '../src/DashboardContainer';

function Page() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <div className="App-header">
        <CommonHeader />
        <button type="button" onClick={() => changeLanguage('gn')}>
          German
        </button>
        <button type="button" onClick={() => changeLanguage('en')}>
          English
        </button>
        <DashboardContainer />
      </div>
    </div>
  );
}

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}