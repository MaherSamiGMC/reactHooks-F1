import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import AddNewCity from './components/AddNewCity';
import ListOfCities from './components/ListOfCities';
import NavBar from './components/NavBar';
import { data } from './data';
import './style.css'


function App() {
const [cities, setCities] = useState(data)
const addNewCity=(x)=>{
  return setCities([...cities,x])
}
const filterCity=(x)=>{
  return setCities(cities.filter(el=> el.city.toLowerCase().includes(x.toLowerCase())))
}
  return (
    <>
      <NavBar filter={filterCity} />
      <AddNewCity addFunction={addNewCity} />
      <ListOfCities LOfCities={cities}  />
    </>
  );
}

export default App;
