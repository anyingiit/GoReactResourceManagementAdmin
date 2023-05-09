import { Admin, EditGuesser, ListGuesser, Resource } from 'react-admin';
import jsonServerProvider from "ra-data-json-server";
import { UserList } from './users';
import { PostCreate, PostEdit, PostList } from './posts';
import PostIcon from '@mui/icons-material/Book'
import UserIcon from '@mui/icons-material/Group'
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


const App = () => (
    <Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider}>
        <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        {/* recordRepresentation 当通过ReferenceField组件引用该组件的值时，返回的时键为'name'的值 */}
        <Resource name='users' list={UserList} recordRepresentation="name" icon={UserIcon} />
    </Admin>
)

export default App
