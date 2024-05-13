import { createRoot } from 'react-dom/client';
import App from './App';

// Assurez-vous que l'élément avec l'id 'app' existe dans votre fichier index.html
const container = document.getElementById('app');

// Vérifiez que 'container' n'est pas null avant de créer la racine
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error('L\'élément racine #app est introuvable dans le DOM');
}