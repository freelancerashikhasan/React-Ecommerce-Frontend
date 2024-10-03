
import { createRoot } from 'react-dom/client'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';


createRoot(document.getElementById('content')).render(
  <AuthProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </AuthProvider>,
)
