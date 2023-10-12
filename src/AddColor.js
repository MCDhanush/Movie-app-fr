import { useState } from 'react';
import { ColorBox } from './ColorBox';

export function AddColor() {
  const [color, setColor] = useState('');
  const Styles = {
    background: color
  };

  const [colorList, setColorList] = useState(["red", "yellow", "Green"]);
  return (
    <>
      <input key={'colors'} input="text" style={Styles} onChange={(e) => setColor(e.target.value)} />

      <button onClick={() => setColorList([...colorList, color])}>button</button>
      <p>{color}</p>

      {colorList.map((e) => (
        <ColorBox color={e} />
      ))}
    </>
  );
}
