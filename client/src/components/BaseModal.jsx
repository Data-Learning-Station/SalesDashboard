import Card from './Card'

const BaseModal = ({ children }) => {
    return (
        <div className="fixed top-0 left-0 bg-black/40 w-screen h-screen flex justify-center items-center ">
            <Card>
                {children}
            </Card>
        </div>
    )
}

export default BaseModal