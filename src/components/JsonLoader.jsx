import React, { useState } from 'react';

const JsonLoader = () => {
  const [data, setData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const json = JSON.parse(e.target.result);
      setData(json);
    };
    
    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" accept=".json" onChange={handleFileUpload} />
      {data && (
        <div>
          <h2>Modulos:</h2>
          <ul>
            {data.modulos.map((modulo) => (
              <li key={modulo.id}>
                {modulo.id}: {modulo.nombre}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default JsonLoader;
