import {
    Datagrid,
    List,
    TextField, Edit,
    SimpleForm,
    TextInput,
    Create,
    ReferenceField,
    ReferenceInput,
    NumberField,
    NumberInput,
} from 'react-admin';

export const TaskQueueList = () => {
    // const record = useRecordContext();

    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <NumberField source="sequence" />
                <ReferenceField label="Task" source="task_id" reference="superadmin/tasks" />
                <ReferenceField label="Client" source="client_id" reference="superadmin/clients" />
                <ReferenceField label="Service" source="service_id" reference="superadmin/services" />
            </Datagrid>
        </List >
    );
}

export const TaskQueueEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <NumberInput source="sequence" />
            <ReferenceInput label="Task" source="task_id" reference="superadmin/tasks" />
            <ReferenceInput label="Client" source="client_id" reference="superadmin/clients" />
            <ReferenceInput label="Service" source="service_id" reference="superadmin/services" />
        </SimpleForm>
    </Edit>
);

export const TaskQueueCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="sequence" />
            <ReferenceInput label="Task" source="task_id" reference="superadmin/tasks" />
            <ReferenceInput label="Client" source="client_id" reference="superadmin/clients" />
            <ReferenceInput label="Service" source="service_id" reference="superadmin/services" />
        </SimpleForm>
    </Create>
)