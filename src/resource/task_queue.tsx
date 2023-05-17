import {
    Datagrid,
    List,
    TextField, Edit,
    SimpleForm,
    TextInput,
    Create,
    SimpleList,
    ReferenceField,
    ReferenceInput,
    NumberField,
    NumberInput,
    useGetOne,
    FunctionField,
    useRecordContext,
} from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';

export const TaskQueueList = () => {
    // const record = useRecordContext();

    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <NumberField source="sequence" />
                <ReferenceField label="Task" source="task_id" reference="tasks" />
                <ReferenceField label="Client" source="client_id" reference="clients" />
                <ReferenceField label="Service" source="service_id" reference="services" />
            </Datagrid>
        </List >
    );
}

export const TaskQueueEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <NumberInput source="sequence" />
            <ReferenceInput label="Task" source="task_id" reference="tasks" />
            <ReferenceInput label="Client" source="client_id" reference="clients" />
            <ReferenceInput label="Service" source="service_id" reference="services" />
        </SimpleForm>
    </Edit>
);

export const TaskQueueCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="sequence" />
            <ReferenceInput label="Task" source="task_id" reference="tasks" />
            <ReferenceInput label="Client" source="client_id" reference="clients" />
            <ReferenceInput label="Service" source="service_id" reference="services" />
        </SimpleForm>
    </Create>
)