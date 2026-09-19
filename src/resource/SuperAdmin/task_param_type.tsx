import {
    Datagrid,
    List,
    TextField, Edit,
    SimpleForm,
    TextInput,
    Create,
} from 'react-admin';

export const TaskParamTypeList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source='type' />
                <TextField source='defult_value' />
            </Datagrid>
        </List>
    );
}

export const TaskParamTypeEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source='type' />
            <TextInput source='defult_value' />
        </SimpleForm>
    </Edit>
);

export const TaskParamTypeCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source='type' />
            <TextInput source='defult_value' />
        </SimpleForm>
    </Create>
)