
import { SuperAdmin } from "./SuperAdmin"
import { User } from "./User"

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


const App = () => (
    <>
        {localStorage.getItem('role') === 'SuperAdmin1' &&
            <>
                <SuperAdmin />
            </>
        }

        {localStorage.getItem('role') === 'Admin' &&
            <>

            </>
        }

        {localStorage.getItem('role') === 'SuperAdmin' &&
            <>
                <User />
            </>
        }
    </>
)

export default App
