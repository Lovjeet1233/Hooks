import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [fullName, setFullName] = useState('Lovjeet');

  const handleNameChange = () => {
    setFullName((prevName) => (prevName === 'Lovjeet' ? 'Dev God' : 'Lovjeet'));
  };

  const [student, setStudent] = useState({
    name: "Lovjeet",
    class: "BTECH",
    gender: "Male",
    age: "20"
  });

  const NameChange = () => {
    setStudent((prevStudent) => ({ ...prevStudent, name: "Dev God" }));
  };

  const ClassChange = () => {
    setStudent((prevStudent) => ({ ...prevStudent, class: "PhD" }));
  };

  const GenderChange = () => {
    setStudent((prevStudent) => ({ ...prevStudent, gender: "Female" }));
  };

  const AgeChange = () => {
    setStudent((prevStudent) => ({ ...prevStudent, age: "25" }));
  };

//useEffect hook
const [count,setCount]=useState(0)

useEffect(()=>{
  setTimeout(()=>{
    setCount(count=>count+1)
  },2000)
})
//useRef hooks

  return (
    <>
    <h1>UseStateHook:</h1>
      <h1>My name is {fullName}</h1>
      <button onClick={handleNameChange}>Change Name</button>

      <h1>The student details are:</h1>
      <h2>Name: {student.name}</h2>
      <button onClick={NameChange}>Change Name</button>

      <h2>Class: {student.class}</h2>
      <button onClick={ClassChange}>Change Class</button>

      <h2>Gender: {student.gender}</h2>
      <button onClick={GenderChange}>Change Gender</button>

      <h2>Age: {student.age}</h2>
      <button onClick={AgeChange}>Change Age</button>

      <h1>UseEffectHook:</h1>
      <h2>this page was rendered {count} times</h2>
    </>
  );
}

export default App;
