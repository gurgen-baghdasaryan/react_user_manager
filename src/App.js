import { useState } from 'react';

import useFormulario from './Hooks/useFormulario';
import Input from './components/Input';
import Card from './components/Card';
import Container from './components/Container'
import Button from './components/Button';



function App() {
  const [user, setUser] = useState([])
  const [formu, handleChange, reset] = useFormulario({ 
   name: '',
   lastname: '',
   email:'', 
  })

  const submit = (e)=> {
    e.preventDefault()
    setUser([
      ...user, 
      formu,
    ])
    reset();
  }


  return (
    <div style={{marginTop:'15%'}}>
    <Container>
      <Card>
        <div style={{padding:20}}>
          <form onSubmit={submit }>
            <Input
              label='Nombre'
              name='name' value={formu.name}
              onChange={handleChange}
              placeholder="Nombre"
            />
            <Input
              label='Apellido'
              name='lastname'
              value={formu.lastname}
              onChange={handleChange}
              placeholder="Name"
              placeholder="Apellido"

            />
            <Input
            label='Correo'
            name='email'
            value={formu.email}
            onChange={handleChange}
            placeholder="Correo"
          />
          <Button >Enviar</Button>
          </form>
        </div>
        <Card>
          <ul>
            {user.map(user => 
              <li key={user.email}>{`${user.name}, ${user.lastname}, ${user.email}`}</li>
              
              )}
          </ul>
        </Card>
      </Card>
    </Container>
    </div>
  );
}

export default App;
