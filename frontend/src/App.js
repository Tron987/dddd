import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from '../src/componets/Auth';
import Dashboard from './componets/Auth';
import FileUpload from './componets/FileUpload';
import FileList from './componets/FileList';
import { Provider } from 'react-redux';
import store from './store';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<FileUpload />} />
        <Route path="/files" element={<FileList />} />
      </Routes>
    </Router>
  );
}
export default App;
