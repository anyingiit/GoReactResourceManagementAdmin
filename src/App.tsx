import { Admin, EditGuesser, ListGuesser, Resource } from 'react-admin';
import jsonServerProvider from "ra-data-json-server";
import { UserCreate, UserEdit, UserList } from './resource/users';
import { PostCreate, PostEdit, PostList } from './resource/posts';
import PostIcon from '@mui/icons-material/Book'
import UserIcon from '@mui/icons-material/Group'
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';
import { MyLayout } from './MyLayout';
import { dataProvider } from './dataProvider';
import { RoleCreate, RoleEdit, RoleList } from './resource/role';
import { ClienCreate, ClienEdit, ClientList } from './resource/client';
import { ClienSessionCreate, ClienSessionEdit, ClienSessiontList } from './resource/client_session';
import { InvateClientCreate, InvateClientEdit, InvateClientList } from './resource/invate_client';
import { SysCreate, SysEdit, SysList } from './resource/sys';
import { TaskCreate, TaskEdit, TaskList } from './resource/task';
import { TaskParamTypeCreate, TaskParamTypeEdit, TaskParamTypeList } from './resource/task_param_type';
import { TaskQueueCreate, TaskQueueEdit, TaskQueueList } from './resource/task_queue';
import { TaskParamValueCreate, TaskParamValueEdit, TaskParamValueList } from './resource/task_param_value';
import { ServiceCreate, ServiceEdit, ServiceList } from './resource/service';
import { ServiceStatusCreate, ServiceStatusEdit, ServiceStatusList } from './resource/service_status';
import { WebServiceTypeCreate, WebServiceTypeEdit, WebServiceTypeList } from './resource/web_service_type';
import { WebServiceCreate, WebServiceList } from './resource/web_service';
import { TaskQueueResultCreate, TaskQueueResultEdit, TaskQueueResultList } from './resource/task_queue_result';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


const App = () => (
    <Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider} layout={MyLayout}>
        {/* <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} /> */}
        {/* recordRepresentation 当通过ReferenceField组件引用该组件的值时，返回的时键为'name'的值 */}
        <Resource name='sys' list={SysList} />

        <Resource name='roles' list={RoleList} edit={RoleEdit} create={RoleCreate} recordRepresentation="name" />
        <Resource name='users' list={UserList} edit={UserEdit} create={UserCreate} recordRepresentation="name" icon={UserIcon} />


        <Resource name='clients' list={ClientList} edit={ClienEdit} create={ClienCreate} recordRepresentation="name" />
        <Resource name='invate_clients' list={InvateClientList} edit={InvateClientEdit} create={InvateClientCreate} recordRepresentation="invate_code" />
        <Resource name='client_sessions' list={ClienSessiontList} edit={ClienSessionEdit} create={ClienSessionCreate} recordRepresentation="uuid" />

        <Resource name='tasks' list={TaskList} edit={TaskEdit} create={TaskCreate} recordRepresentation="name" />
        {/* <Resource name='task_param_types' list={TaskParamTypeList} edit={TaskParamTypeEdit} create={TaskParamTypeCreate} recordRepresentation="type" /> */}
        {/* <Resource name='task_param_values' list={TaskParamValueList} edit={TaskParamValueEdit} create={TaskParamValueCreate} recordRepresentation="value" /> */}
        <Resource name='task_queues' list={TaskQueueList} edit={TaskQueueEdit} create={TaskQueueCreate} />
        <Resource name='task_queue_results' list={TaskQueueResultList} edit={TaskQueueResultEdit} create={TaskQueueResultCreate} />


        <Resource name='services' list={ServiceList} edit={ServiceEdit} create={ServiceCreate} recordRepresentation="name" />
        {/* <Resource name='service_statuses' list={ServiceStatusList} edit={ServiceStatusEdit} create={ServiceStatusCreate} /> */}
        <Resource name='web_service_types' list={WebServiceTypeList} edit={WebServiceTypeEdit} create={WebServiceTypeCreate} recordRepresentation="name" />
        <Resource name='web_services' list={WebServiceList} edit={WebServiceList} create={WebServiceCreate} recordRepresentation="host" />

    </Admin>
)

export default App
