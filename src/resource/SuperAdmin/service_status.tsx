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

export const ServiceStatusList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <ReferenceField source="service_id" reference="superadmin/services" />
                <ReferenceField source="task_queue_id" reference="superadmin/task_queues" />
            </Datagrid>
        </List>
    );
}

export const ServiceStatusEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <ReferenceInput source="service_id" reference="superadmin/services" />
            <ReferenceInput source="task_result_id" reference="superadmin/task_results" />
        </SimpleForm>
    </Edit>
);

export const ServiceStatusCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="service_id" reference="superadmin/services" />
            <ReferenceInput source="task_result_id" reference="superadmin/task_results" />
        </SimpleForm>
    </Create>
)