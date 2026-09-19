import {
    Datagrid,
    List,
    TextField, Edit,
    SimpleForm,
    TextInput,
    Create,
    ReferenceField,
    ReferenceInput,
    DateField,
} from 'react-admin';

export const InvateClientList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <ReferenceField source="client_id" reference="superadmin/clients" />
                <TextField source='invate_code' />
                <DateField source="deleted_at" showTime />
            </Datagrid>
        </List>
    );
}

export const InvateClientEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <ReferenceInput source="client_id" reference="superadmin/clients" />
            <TextInput source='invate_code' />
        </SimpleForm>
    </Edit>
);

export const InvateClientCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="client_id" reference="superadmin/clients" />
            <TextInput source='invate_code' />
        </SimpleForm>
    </Create>
)