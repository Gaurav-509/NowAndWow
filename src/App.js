import Directory from './components/directory/directory.component.jsx';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component.jsx';
import Shop from './pages/shop/shop.component.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Directory />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
