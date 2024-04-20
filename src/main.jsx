import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/useTransition/App'
import './index.css';
import ErrorBoundry from '@/Error/ErrorBoundry';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundry>
    <App />
  </ErrorBoundry>
)
