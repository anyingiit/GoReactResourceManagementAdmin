import { Admin, Resource } from "react-admin"
import { Dashboard } from "./Dashboard"
import { MyLayout } from "./MyLayout"
import { authProvider } from "./authProvider"
import { RoleEdit, RoleCreate } from "./base"
import { dataProvider } from "./dataProvider"
import { ClientList, ClienEdit, ClienCreate } from "./resource/SuperAdmin/client"
import { ClienSessiontList, ClienSessionEdit, ClienSessionCreate } from "./resource/SuperAdmin/client_session"
import { InvateClientList, InvateClientEdit, InvateClientCreate } from "./resource/SuperAdmin/invate_client"
import { RoleList } from "./resource/SuperAdmin/role"
import { ServiceList, ServiceEdit, ServiceCreate } from "./resource/SuperAdmin/service"
import { SysList } from "./resource/SuperAdmin/sys"
import { TaskList, TaskEdit, TaskCreate } from "./resource/SuperAdmin/task"
import { TaskQueueList, TaskQueueEdit, TaskQueueCreate } from "./resource/SuperAdmin/task_queue"
import { TaskQueueResultList, TaskQueueResultEdit, TaskQueueResultCreate } from "./resource/SuperAdmin/task_queue_result"
import { UserList, UserEdit, UserCreate } from "./resource/SuperAdmin/users"
import { WebServiceList, WebServiceCreate } from "./resource/SuperAdmin/web_service"
import { WebServiceTypeList, WebServiceTypeEdit, WebServiceTypeCreate } from "./resource/SuperAdmin/web_service_type"
import UserIcon from '@mui/icons-material/Group'

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


const App = () => (
    <Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider} layout={MyLayout}>
        {localStorage.getItem('role') === 'SuperAdmin' &&
            <>
                {/* <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} /> */}
                {/* recordRepresentation 当通过ReferenceField组件引用该组件的值时，返回的时键为'name'的值 */}
                <Resource options={{ label: 'Sys' }} name='superadmin/sys' list={SysList} />

                <Resource options={{ label: 'Roles' }} name='superadmin/roles' list={RoleList} edit={RoleEdit} create={RoleCreate} recordRepresentation="name" />
                <Resource options={{ label: 'Users' }} name='superadmin/users' list={UserList} edit={UserEdit} create={UserCreate} recordRepresentation="name" icon={UserIcon} />


                <Resource options={{ label: 'Clients' }} name='superadmin/clients' list={ClientList} edit={ClienEdit} create={ClienCreate} recordRepresentation="name" />
                <Resource options={{ label: 'InvateClients' }} name='superadmin/invate_clients' list={InvateClientList} edit={InvateClientEdit} create={InvateClientCreate} recordRepresentation="invate_code" />
                <Resource options={{ label: 'ClientSessions' }} name='superadmin/client_sessions' list={ClienSessiontList} edit={ClienSessionEdit} create={ClienSessionCreate} recordRepresentation="uuid" />

                <Resource options={{ label: 'Tasks' }} name='superadmin/tasks' list={TaskList} edit={TaskEdit} create={TaskCreate} recordRepresentation="name" />
                {/* <Resource name='task_param_types' list={TaskParamTypeList} edit={TaskParamTypeEdit} create={TaskParamTypeCreate} recordRepresentation="type" /> */}
                {/* <Resource name='task_param_values' list={TaskParamValueList} edit={TaskParamValueEdit} create={TaskParamValueCreate} recordRepresentation="value" /> */}
                <Resource options={{ label: 'TaskQueues' }} name='superadmin/task_queues' list={TaskQueueList} edit={TaskQueueEdit} create={TaskQueueCreate} />
                <Resource options={{ label: 'TaskQueueResults' }} name='superadmin/task_queue_results' list={TaskQueueResultList} edit={TaskQueueResultEdit} create={TaskQueueResultCreate} />


                <Resource options={{ label: 'Services' }} name='superadmin/services' list={ServiceList} edit={ServiceEdit} create={ServiceCreate} recordRepresentation="name" />
                {/* <Resource name='service_statuses' list={ServiceStatusList} edit={ServiceStatusEdit} create={ServiceStatusCreate} /> */}
                <Resource options={{ label: 'WebServiceTypes' }} name='superadmin/web_service_types' list={WebServiceTypeList} edit={WebServiceTypeEdit} create={WebServiceTypeCreate} recordRepresentation="name" />
                <Resource options={{ label: 'WebServices' }} name='superadmin/web_services' list={WebServiceList} edit={WebServiceList} create={WebServiceCreate} recordRepresentation="host" />
            </>
        }

        {localStorage.getItem('role') === 'Admin' &&
            <>

            </>
        }

        {localStorage.getItem('role') === 'User' &&
            <>
                <Resource name="user/services" />
            </>
        }



    </Admin>
)

export default App
