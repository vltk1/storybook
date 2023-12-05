import React from 'react';

export function PageAll({label}:any):any {
  let play:any = ()=> alert("glsds")
  return (
    <div>
      <div>cn lsdasd</div>
      <h2>Hello 222 {label}</h2>
      <ul>
        <li>Ga</li>
        <li>Vit</li>
        <li>Ngn</li>
        <li>Cua</li>
        <li>Ghe</li>
      </ul>
      <button onClick={play}>Play Game</button>
      
    </div>
  );
}
