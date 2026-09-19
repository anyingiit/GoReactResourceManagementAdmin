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

export const InternalerviceList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <ReferenceField source="web_service_type_id" reference="superadmin/web_service_types" />
                <ReferenceField source="service_id" reference="superadmin/services" />
            </Datagrid>
        </List>
    );
}

export const InternalerviceEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <ReferenceInput source="service_id" reference="superadmin/services" />
        </SimpleForm>
    </Edit>
);

export const InternalServiceCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="service_id" reference="superadmin/services" />
        </SimpleForm>
    </Create>
)