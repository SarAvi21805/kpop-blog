import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import KpopCard from "../components/KpopCard";

const List = () => {
    const [groups, setGroups] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setGroups(data));
    }, []);

    // Filtro de búsqueda
    const filteredGroups = groups.filter(g => 
    g.name.toLowerCase().includes(search.toLowerCase())
  );

  // Función para ir a uno aleatorio
  const handleRandom = () => {
    if (groups.length > 0) {
      const randomIndex = Math.floor(Math.random() * groups.length);
      const randomGroup = groups[randomIndex];
      navigate(`/items/${randomGroup.id}`);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Explora Grupos de K-Pop</h2>
      
      <input 
        type="text" 
        placeholder="Buscar por nombre..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '8px', marginRight: '10px' }}
      />
      
      <button onClick={handleRandom} style={{ padding: '8px', cursor: 'pointer' }}>
        Grupo Aleatorio
      </button>

      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {filteredGroups.map(group => (
          <KpopCard key={group.id} group={group} />
        ))}
      </div>
      
      {filteredGroups.length === 0 && <p>No se encontraron resultados.</p>}
    </div>
  );
};

export default List;