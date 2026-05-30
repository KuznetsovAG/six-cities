import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './store/rootStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
