import React from 'react';
import styles from './App.module.scss';
import { Header } from './components/Header/Header';
import { AppRouting } from './routes/Routing';

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <AppRouting />
    </div>
  );
}

export default App;
