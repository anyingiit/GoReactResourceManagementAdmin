import {
    Datagrid,
    List,
    TextField, Edit,
    SimpleForm,
    TextInput,
    Create,
    DateField,
} from 'react-admin';

export const RoleList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source='name' />
                <TextField source='description' />
                <DateField source="created_at" showTime />
                <DateField source="updated_at" showTime />
                <DateField source="deleted_at" showTime />
            </Datagrid>
        </List>
    );
}

export const RoleEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

export const RoleCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
)