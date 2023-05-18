
import { SuperAdmin } from "./SuperAdmin"
import { User } from "./User"

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


const App = () => (
    <>
        {localStorage.getItem('role') === 'SuperAdmin' &&
            <>
                <SuperAdmin />
            </>
        }

        {localStorage.getItem('role') === 'Admin' &&
            <>

            </>
        }

        {localStorage.getItem('role') === 'User' &&
            <>
                <User />
            </>
        }
    </>
)

export default App
