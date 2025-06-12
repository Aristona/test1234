import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { HomePage } from './containers/HomePage';
import { UserPage } from './containers/UserPage';

import './App.scss';

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <Router>
        <section className="app-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users/:username" element={<UserPage />} />
          </Routes>
        </section>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
