import {
    Datagrid,
    List,
    TextField, Edit,
    SimpleForm,
    TextInput,
    Create,
    SimpleList,
    DateField,
} from 'react-admin';

export const SysList = () => {
    return (
        <List>
            <Datagrid rowClick="edit" bulkActionButtons={false}>
                <TextField source="id" />
                <DateField source="created_at" showTime />
                <DateField source="updated_at" showTime />
                <DateField source="deleted_at" showTime />
            </Datagrid>
        </List>
    );
}

export const SysEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
        </SimpleForm>
    </Edit>
);

export const SysCreate = () => (
    <Create>
        <SimpleForm>
        </SimpleForm>
    </Create>
)