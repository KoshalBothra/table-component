import React, { useState, useEffect } from "react";
import "./App.css";
import CustomizedTables from "./table";
function createData(sno, prodname, SKU, sprice, mrp, unit, type) {
  return { sno, prodname, SKU, sprice, mrp, unit, type };
}
const rows = [
  createData(
    1,
    "Brittania White Bread",
    "B1993932",
    40.0,
    1.0,
    "/Pc",
    "Regular"
  ),
  createData(
    2,
    "Brittania White Bread",
    "B1993932",
    40.0,
    25.0,
    "/Pc",
    "Regular"
  ),
  createData(
    3,
    "Brittania White Bread",
    "B1993932",
    40.0,
    14.0,
    "/Pc",
    "Regular"
  ),
  createData(
    4,
    "Brittania White Bread",
    "B1993932",
    40.0,
    72.0,
    "/Pc",
    "Regular"
  ),
  createData(
    5,
    "Brittania White Bread",
    "B1993932",
    40.0,
    91.0,
    "/Pc",
    "Regular"
  ),
  createData(
    6,
    "Brittania White Bread",
    "B1993932",
    40.0,
    10.0,
    "/Pc",
    "Regular"
  ),
  createData(
    7,
    "Brittania White Bread",
    "B1993932",
    40.0,
    18.0,
    "/Pc",
    "Regular"
  ),
  createData(
    8,
    "Brittania White Bread",
    "B1993932",
    40.0,
    7.0,
    "/Pc",
    "Regular"
  ),
];
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let temp = rows.sort((a, b) => {
      return a.mrp - b.mrp;
    });
    setData(temp);
  }, []);
  return (
    <div className="App">
      <CustomizedTables data={data} />
    </div>
  );
}

export default App;
