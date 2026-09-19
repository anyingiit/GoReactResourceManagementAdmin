import {
    Datagrid,
    List,
    TextField, Edit,
    SimpleForm,
    TextInput,
    Create,
} from 'react-admin';

export const ClientList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source='name' />
                <TextField source='description' />
            </Datagrid>
        </List>
    );
}

export const ClienEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

export const ClienCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
)