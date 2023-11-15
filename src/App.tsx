import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }
  const nameList = [
    {
      first: 'Laila',
      last: 'Cahyani'
    },
    {
      first: 'Anatasya',
      last: 'Berlian'
    },
    {
      first: 'Carolenia',
      last: 'Anggita'
    },
  ]
  return (
    <div className="App">
      <Greet name='Candra' messageCount={15} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
