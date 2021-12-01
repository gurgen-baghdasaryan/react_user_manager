import {useState} from 'react'


const useFormulario = (inicial) => {
    const [formu, setFormu] = useState(inicial)

    const handleChange = (e) => {

        setFormu({

            ...formu,
            [e.target.name]: e.target.value

        })
    }

    return [formu, handleChange]
    
}

export default useFormulario

