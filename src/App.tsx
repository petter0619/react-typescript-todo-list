import React from 'react';
import { useGlobalContext } from './appContext';
// Components
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import Footer from './components/Footer';
// Assets
import { footerQuote, headerTitle } from './assets/siteText.json';

const App: React.FC = () => {
  const { todos } = useGlobalContext();

  return (
    <main>
        <Header title={headerTitle}/>
        <section className="container">
          <Form />
          <List
            todoArray={todos}
          />
        </section>
        <Footer quote={footerQuote}/>
      </main>
  );
}

export default App;
