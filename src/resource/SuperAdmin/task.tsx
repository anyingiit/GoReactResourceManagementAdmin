import {
    Datagrid,
    List,
    TextField, Edit,
    SimpleForm,
    TextInput,
    Create,
} from 'react-admin';

export const TaskList = () => {
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

export const TaskEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source='name' />
            <TextInput source='description' />
        </SimpleForm>
    </Edit>
);

export const TaskCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source='name' />
            <TextInput source='description' />
        </SimpleForm>
    </Create>
)