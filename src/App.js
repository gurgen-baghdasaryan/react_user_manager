import useFormulario from './Hooks/useFormulario';
import Input from './components/Input';


function App() {
  const [formu, handleChange] = useFormulario({ name: '', lastname: '' })
  console.log(formu);
  return (
    <form >
      <Input label='Nombre' name='name' value={formu.name} onChange={handleChange} />
      <Input label='Apellido' name='lastname' value={formu.lastname} onChange={handleChange} />
    </form>
  );
}

export default App;
