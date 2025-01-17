import React, { useState } from 'react';
import { render } from 'react-dom';
import './hamburger.css';

// Zadání 1: Přichystej si stavovou proměnnou s výchozí hodnotou `false`, ve které bude uloženo, jestli je menu otevřené nebo nikoliv.
// Zadání 2: Po kliknutí na button změň stav z `true` na `false` nebo obráceně.
// Zadání 3: Nerenderuj `ul`, pokud je stav `false`.
// Zadání 4: Pokud je menu zavřené nech mu jen třídu `hamburger`. Pro otevřené přidej navíc `hamburger--otevrene`.

export const Uloha5 = () => {
  const [menuOtevrene, setmenuOtevrene] = useState(false);

  const zmenitStav = () => {
    if (menuOtevrene === false) {
      setmenuOtevrene(true);
    } else if (menuOtevrene === true) {
      setmenuOtevrene(false);
    }
    console.log(menuOtevrene);
  };

  return (
    <>
      <button onClick={zmenitStav} className="hamburger" aria-label="menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul>
        <li>
          <a href="#o-nas">O nás</a>
        </li>
        <li>
          <a href="#co-delame">Co děláme</a>
        </li>
        <li>
          <a href="#kontakty">Kontakty</a>
        </li>
        <li>
          <a href="#cenik">Ceník</a>
        </li>
      </ul>
    </>
  );
};
