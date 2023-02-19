import Card from "../components/Card"
import Input from "../components/Input"
import Button from "../components/Button"
import Form from "../components/Form"
import Alert from '../components/Alert'

import { useAuthContext } from "../contexts/AuthContext"

const Login = () => {

    const { state, login } = useAuthContext()

    const onLogin = (data) => {
        login(data)
    }

    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-slate-100">
            <Card>
                <Form className="flex flex-col gap-3 w-96" mode="raw" onSubmit={onLogin}>
                    <h2 className="text-2xl"> Login </h2>
                    {
                        state.error && <Alert> {state.error} </Alert>
                    }
                    <Input name="phone" placeholder="Phone"/>
                    <Input name="password" placeholder="Password"/>
                    <Button disabled={state.status == 'pending'}> { state.status == 'pending' ? 'Loading' : 'Login' } </Button>
                </Form>
            </Card>
        </div>
    )
}

export default Login