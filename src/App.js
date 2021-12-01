import useFormulario from './Hooks/useFormulario';
import Input from './components/Input';
import Card from './components/Card';
import Container from './components/Container'


function App() {
  const [formu, handleChange] = useFormulario({ name: '', lastname: '' })
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
          </form>
        </div>
      </Card>
    </Container>
  );
}

export default App;
