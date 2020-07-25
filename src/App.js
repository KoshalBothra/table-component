import React from 'react';
import './App.css';
import CustomizedTables from './table';
function App() {
  
  function createData(sno, prodname, SKU, sprice, mrp,unit,type) {
    return { sno, prodname, SKU, sprice, mrp,unit,type };
  }
  
  const rows = [
    createData(1,'Brittania White Bread','B1993932',40.00,46.00,'/Pc','Regular'),
    createData(2,'Brittania White Bread','B1993932',40.00,46.00,'/Pc','Regular'),
    createData(3,'Brittania White Bread','B1993932',40.00,46.00,'/Pc','Regular'),
    createData(4,'Brittania White Bread','B1993932',40.00,46.00,'/Pc','Regular'),
    createData(5,'Brittania White Bread','B1993932',40.00,46.00,'/Pc','Regular'),
    createData(6,'Brittania White Bread','B1993932',40.00,46.00,'/Pc','Regular'),
    createData(7,'Brittania White Bread','B1993932',40.00,46.00,'/Pc','Regular'),
    createData(8,'Brittania White Bread','B1993932',40.00,46.00,'/Pc','Regular'),
  ];


  return (
    <div className="App">
      <CustomizedTables data={rows}/>
    </div>
  );
}

export default App;
