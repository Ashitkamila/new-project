import './App.css';

import Login from './component/Login';

import AddEmployee from './component/AddEmployee';

import Registration from './component/Registration';
import UpdateEmployee from './component/UpdateEmployee';

function App() {
  return (
    <div className="App">

      <Registration/>
      <Login/>
      {/* <Registration/> */}
      <UpdateEmployee />
      <AddEmployee/>
    </div>
  );
}

export default App;
