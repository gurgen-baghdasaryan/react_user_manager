import useFormulario from './Hooks/useFormulario';


function App() {
  const [formu, handleChange] = useFormulario({name: ''})
  console.log(formu);
  return (
    <form >
      <input
        name="name"
        placeholder="Nombre"
        value={formu.name}
        onChange={handleChange}
      />
    </form>
  );
}

export default App;
