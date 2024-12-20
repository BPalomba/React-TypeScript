import { useForm } from "../../hooks/useForm";

export const FormComponent = () => {
    const {values, handleChange, resetForm} = useForm({email: '', name: '', edad: 0});

    const {email, name, edad} = values;

    const handleSubmitForm = () => {
        console.log(values);
    }

    const handleResetForm = () => {
        resetForm();
    }

  return (
    <div>
        <div>
            <h2>Formulario</h2>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <input value={email} onChange={handleChange}  type="email" name="email" placeholder="example@example.com"/>
            <input value={name}  onChange={handleChange} type="text" name="name" placeholder="Nombre"/>
            <input value={edad}  onChange={handleChange} type="number"  name="edad" placeholder="Edad"/>
        </div>
        <div>
            <button onClick={handleSubmitForm}>Enviar</button>
            <button onClick={handleResetForm}>Resetear</button>
        </div>
    </div>
  )
}