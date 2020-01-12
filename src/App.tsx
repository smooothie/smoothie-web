import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import SignIn from 'components/SignIn';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <SignIn />
    </>
  );
};

export default App;
