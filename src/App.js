import useFormulario from './Hooks/useFormulario';
import Input from './components/Input';
import Card from './components/Card';
import Container from './components/Container'
import Button from './components/Button';



function App() {
  const [formu, handleChange] = useFormulario({ 
   name: '',
   lastname: '',
   email:'', 
  })
  console.log(formu);
  return (
    <Container>
      <Card>
        <div style={{padding:20}}>
          <form>
            <Input
              label='Nombre'
              name='name' value={formu.name}
              onChange={handleChange}
            />
            <Input
              label='Apellido'
              name='lastname'
              value={formu.lastname}
              onChange={handleChange}
            />
            <Input
            label='Correo'
            name='email'
            value={formu.email}
            onChange={handleChange}
          />
          <Button >Enviar</Button>
          </form>
        </div>
      </Card>
    </Container>
  );
}

export default App;
