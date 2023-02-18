import Card from "../components/Card"
import Input from "../components/Input"
import Button from "../components/Button"
import Form from "../components/Form"
import Alert from '../components/Alert'

import { useAuthContext } from "../contexts/AuthContext"

const Register = () => {

    const { state, register } = useAuthContext()

    const onRegister = (data) => {
        console.log(data)
        register(data)
    }

    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-slate-100">
            <Card>
                <Form className="flex flex-col gap-3 w-96" onSubmit={onRegister}>
                    <h2 className="text-2xl"> Register </h2>
                    {
                        state.error && <Alert> {state.error} </Alert>
                    }
                    <Input name="name" placeholder="Name"/>
                    <Input name="surname" placeholder="Surname"/>
                    <Input name="phone" placeholder="Phone"/>
                    <Input name="password" placeholder="Password"/>
                    <Input name="passwordConfirm" placeholder="Password Confirm"/>
                    <Button disabled={state.status == 'pending'}> { state.status == 'pending' ? 'Loading' : 'Register' } </Button>
                </Form>
            </Card>
        </div>
    )
}

export default Register