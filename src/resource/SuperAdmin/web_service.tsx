import {
    Datagrid,
    List,
    TextField, Edit,
    SimpleForm,
    TextInput,
    Create,
    ReferenceField,
    ReferenceInput,
} from 'react-admin';

export const WebServiceList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="host" />
                <TextField source="port" />
                <ReferenceField source="web_service_type_id" reference="superadmin/web_service_types" />
                <ReferenceField source="service_id" reference="superadmin/services" />
            </Datagrid>
        </List>
    );
}

export const WebServiceEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="host" />
            <TextInput source="port" />
            <ReferenceInput source="web_service_type_id" reference="superadmin/web_service_types" />
            <ReferenceInput source="service_id" reference="superadmin/services" />
        </SimpleForm>
    </Edit>
);

export const WebServiceCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="host" />
            <TextInput source="port" />
            <ReferenceInput source="web_service_type_id" reference="superadmin/web_service_types" />
            <ReferenceInput source="service_id" reference="superadmin/services" />
        </SimpleForm>
    </Create>
)