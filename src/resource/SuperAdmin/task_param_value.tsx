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

export const TaskParamValueList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source='value' />
                <ReferenceField source="task_param_type_id" reference="superadmin/task_param_types" />
            </Datagrid>
        </List>
    );
}

export const TaskParamValueEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source='value' />
            <ReferenceInput source="task_param_type_id" reference="superadmin/task_param_types" />
        </SimpleForm>
    </Edit>
);

export const TaskParamValueCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source='value' />
            <ReferenceInput source="task_param_type_id" reference="superadmin/task_param_types" />
        </SimpleForm>
    </Create>
)