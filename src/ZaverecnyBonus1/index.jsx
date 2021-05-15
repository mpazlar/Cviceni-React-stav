import React from 'react';

// Zadání 1: Pomocí události `change` na vstupním políčku a vlastnosti `event.target.value` ukládej do stavu, co uživatel napsal.
// Zadání 2: Mezi tagy `<b></b>` vlož napsaný text.
// Zadání 3. V dalším odstavci `<p>` zobraz, kolik má text znaků.
// Zadání 4. Poslední odstavec zobraz pouze v případě, že je text kratší než 8 znaků.

export const ZaverecnyBonus1 = () => {
  let napsal = '';
  let zizala = 'hehe';

  const handleChange = (event) => {
    napsal = event.target.value;
    zizala = napsal;
  };
  return (
    <>
      <label>
        Napiš něco: <input onChange={handleChange} />
      </label>
      <p>
        Do políčka výše uživatel napsal: <b>{zizala}</b>
      </p>
      <p>Počet znaků: 0</p>
      <p>Jako heslo by text neobstál.</p>
    </>
  );
};
