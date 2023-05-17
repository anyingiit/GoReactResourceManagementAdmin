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
} from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';

export const ServiceStatusList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <ReferenceField source="service_id" reference="services" />
                <ReferenceField source="task_queue_id" reference="task_queues" />
            </Datagrid>
        </List>
    );
}

export const ServiceStatusEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <ReferenceInput source="service_id" reference="services" />
            <ReferenceInput source="task_result_id" reference="task_results" />
        </SimpleForm>
    </Edit>
);

export const ServiceStatusCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="service_id" reference="services" />
            <ReferenceInput source="task_result_id" reference="task_results" />
        </SimpleForm>
    </Create>
)