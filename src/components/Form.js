import React from 'react'
import useFormulario from '../Hooks/useFormulario';
import Input from './Input';
import Button from './Button';


const Form = ({submit}) => {


    const [formu, handleChange, reset] = useFormulario({ 
        name: '',
        lastname: '',
        email:'', 
       })


    const handleSubmit = (e) => {
        e.preventDefault()
        submit(formu)
        reset()
    }     

    
    return (
        <form onSubmit={handleSubmit }>
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
          placeholder="Apellido"

        />
        <Input
        label='Correo'
        name='email'
        value={formu.email}
        onChange={handleChange}
        placeholder="Correo"
      />
      <Button>Enviar</Button>
      </form>
    )
}

export default Form
