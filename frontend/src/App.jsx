import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// import HTMLGenerator from './components/page/main/HtmlGenerator';
// import NoTemplates from './components/page/addition/NoTemplate';
// import CreateTemplate from './components/page/main/CreateTemplate';
import LoginPage from './components/page/login/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateTemplate from './components/page/main/CreateTemplate';
import HTMLGenerator from './components/page/main/HtmlGenerator';
import PreviewPage from './components/page/main/PreviewPage';
import ProtectedRoute from './routes/ProtectedRoute';
import NotFound from './routes/NotFound';
function App() {
  const [count, setCount] = useState(0);
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/main" element={<CreateTemplate />}></Route>
          <Route path="/detail/:id" element={<HTMLGenerator />}></Route>
          <Route path="/preview/:id" element={<PreviewPage />}></Route>
          <Route path="/m" element={<HTMLGenerator />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
