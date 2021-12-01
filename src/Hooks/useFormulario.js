import {useState} from 'react'


const useFormulario = (inicial) => {
    const [formu, setFormu] = useState(inicial)

    const handleChange = (e) => {

        setFormu({

            ...formu,
            [e.target.name]: e.target.value

        })
    }
    const reset = ( ) => {
        setFormu(inicial)
    }

    return [formu, handleChange, reset]
    
}

export default useFormulario

