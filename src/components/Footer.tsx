import { Link } from 'react-router-dom';


const Footer: React.FC = () => {
  return (
    <footer className="bg-smalt-700 text-white text-center p-4">
      <p>&copy; 2023 <Link to="/" className="font-bold font-titre">SBSB</Link> | Réalisé avec passion et amour par <a href="https://salim.link" className="font-bold font-titre" target="_blank">SALIM BENFARHAT</a>. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;