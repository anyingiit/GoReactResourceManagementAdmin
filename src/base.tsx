import {
    Datagrid,
    List,
    TextField, Edit,
    SimpleForm,
    TextInput,
    Create,
    DateField,
} from 'react-admin';

export const BaseList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                {/* 需求，在这里接收多个Field */}
                <DateField source="created_at" showTime />
                <DateField source="update_at" showTime />
                <DateField source="delete_at" showTime />
            </Datagrid>
        </List>
    );
}

export const RoleEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
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