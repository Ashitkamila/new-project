import './App.css';
import AddEmployee from './component/AddEmployee';
import Registration from './component/Registration';
import UpdateEmployee from './component/UpdateEmployee';

function App() {
  return (
    <div className="App">
      {/* <Registration/> */}
      <UpdateEmployee />
      <AddEmployee/>
    </div>
  );
}

export default App;
