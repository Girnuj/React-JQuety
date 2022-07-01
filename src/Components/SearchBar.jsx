import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city , setCity] = useState('')
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');//borra el dato del input, l ovacia
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value= {city}
        onChange={e => setCity(e.target.value)}//´por cada tecla se va a ir cambiando el value y los capturamos
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
