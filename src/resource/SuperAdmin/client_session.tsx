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

export const ClienSessiontList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <ReferenceField source="client_id" reference="superadmin/clients" />
                <TextField source='uuid' />
            </Datagrid>
        </List>
    );
}

export const ClienSessionEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <ReferenceInput source="client_id" reference="superadmin/clients" />
            <TextInput source='uuid' />
        </SimpleForm>
    </Edit>
);

export const ClienSessionCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="client_id" reference="superadmin/clients" />
            <TextInput source='uuid' />
        </SimpleForm>
    </Create>
)