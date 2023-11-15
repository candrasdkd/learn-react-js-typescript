import './App.css';
import Greet from './components/1-basicProps/Greet';
import Heading from './components/2-advancedProps/Heading';
import Oscar from './components/2-advancedProps/Oscar';
import Person from './components/1-basicProps/Person';
import PersonList from './components/1-basicProps/PersonList';
import Status from './components/2-advancedProps/Status';
import Button from './components/3-eventsprops/Button';
import Input from './components/3-eventsprops/Input';

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
      {/* <Greet name='Candra' messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}
      {/* Advanced Props */}
      {/* <Status status='error' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leoo</Heading>
      </Oscar> */}

      {/* Event Props */}
      <Button handleClick={(event, id) => {
        console.log('Button Click', event, id)
      }}
      />
      <Input value='' handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
