import { useState, useEffect, useRef } from 'react';

interface Item {
    url: string,
    code: string
    description: string,
    date: Date
}

const StackedList: React.FC = () => {

    const [items, setItems] = useState<Item[]>([]);
    const [displayItems, setDisplayItems] = useState<Item[]>([]);
    const [numItems, setNumItems] = useState(3);
    const sentinelRef = useRef(null);

     // Récupérer les données du fichier JSON
    useEffect(() => {
        fetch('/links.json')
            .then(response => response.json())
            .then(data => {
                setItems(data);
                setDisplayItems(data.slice(0, 3));
            });
    }, []);
  
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setNumItems(prevNumItems => prevNumItems + 3);
        }
      });
  
      if (sentinelRef.current) {
        observer.observe(sentinelRef.current);
      }
  
      return () => observer.disconnect();
    }, []);
  
    useEffect(() => {
      setDisplayItems(items.slice(0, numItems));
    }, [numItems]);
  
    return (
        <section className="bg-smalt-100 dark:bg-smalt-800 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-2xl mx-auto space-y-6">
                    <div className="bg-white dark:bg-smalt-950 rounded-lg shadow-sm">
                        <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-800">
                            <h3 className="text-lg text-smalt-700 font-extrabold font-titre">All My Links</h3>
                        </div>
                        <div className="space-y-4 p-6">
                            {displayItems.map((item, index) => (
                                <div key={index}>
                                    <div className="flex items-center justify-between">
                                        <a href={`http://localhost:5173/${item.code}`} onClick={(e) => {
                                            e.preventDefault();
                                            const url = item.url.startsWith('http') ? item.url : `http://${item.url}`;
                                            window.location.href = url;
                                        }} className="flex items-center space-x-4">
                                            <div className="flex-shrink-0 text-smalt-900 dark:text-smalt-800 font-texte">sbsb.fr/<b className="font-medium truncate">{item.code}</b></div>
                                        </a>
                                        <button 
                                            onClick={() => navigator.clipboard.writeText(`https://sbsb.fr/${item.code}`)} 
                                            title="Copier" 
                                            className="block w-full rounded bg-smalt-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-smalt-700 focus:outline-none focus:ring active:bg-smalt-500 sm:w-auto font-texte" >
                                            Copier
                                        </button>
                                    </div>
                                    <div className="text-smalt-500 dark:text-smalt-400 text-sm truncate font-texte">{item.description}</div>
                                </div>
                            ))}
                            <div ref={sentinelRef}></div>
                        </div>
                        {numItems >= items.length && <p className="space-y-4 p-6 text-center text-smalt-950 font-texte">Il n'y a plus d'URL à charger.</p>}
                    </div>
                </div>
            </div>
            
        </section>
    );
};
  
export default StackedList;