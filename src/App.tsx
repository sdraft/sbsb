import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import StackedList from './components/StackedList';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Hero />
        <StackedList />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
