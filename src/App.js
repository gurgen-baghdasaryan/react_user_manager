import useFormulario from './Hooks/useFormulario';
import Input from './components/Input';
import Card from './components/Card';


function App() {
  const [formu, handleChange] = useFormulario({ name: '', lastname: '' })
  console.log(formu);
  return (
    <form >
      <Card>
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
      </Card>
    </form>
  );
}

export default App;
