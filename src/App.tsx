import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

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
      {/* Basic Props */}
      <Greet name='Candra' isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      {/* Advanced Props */}
      <Status status='error' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leoo</Heading>
      </Oscar>
    </div>
  );
}

export default App;
