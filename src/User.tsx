import { Admin, Resource } from "react-admin";
import { Dashboard } from "./Dashboard"
import { MyLayout } from "./MyLayout"
import { authProvider } from "./authProvider"
import { dataProvider } from "./dataProvider"
import { WebServiceList, WebServiceShow } from "./resource/User/web_service";



export const User = () => (
    <>
        <Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider} layout={MyLayout}>
            <Resource options={{ label: 'WebService' }} name="user/services/web_service" list={WebServiceList} show={WebServiceShow} />
            {/* <Resource name="user/services/web_service/results" list={WebServiceResultList} /> */}
        </Admin>

    </>
)
