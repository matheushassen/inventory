
import './App.css'
import AddDevice from './assets/components/AddDevice'
import ListDevices from './assets/components/ListDevices'

function App() {


  return (
    <div className="App">
      <header>
        <h1>Inventory Test</h1>
      </header>


        <ListDevices></ListDevices>
        <AddDevice></AddDevice>
   
    </div>
  )
}

export default App
