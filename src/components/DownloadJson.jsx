import React from 'react';

export default function DownloadJson() {
  const user = {
    "id": "123456",
    "name": "Pepito Mora"
  };

  const handleDownloadJson = () => {
    const jsonString = JSON.stringify(user, null, 2); // Formatear JSON con indentación de 2 espacios
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'user_data.json'; // Nombre del archivo que se descargará
    link.click();
    URL.revokeObjectURL(url); // Liberar la URL creada
  };

  return (
    <button onClick={handleDownloadJson}>Descargar</button>
  );
}
