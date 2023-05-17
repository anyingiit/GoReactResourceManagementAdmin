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

export const TaskQueueResultList = () => {
    // const record = useRecordContext();

    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="succeed" />
                <NumberField source="detail" />
                <ReferenceField label="Task Queue" source="task_queue_id" reference="task_queues" />
            </Datagrid>
        </List >
    );
}

export const TaskQueueResultEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="succeed" />
            <NumberInput source="detail" />
            <ReferenceInput label="Task Queue" source="task_queue_id" reference="task_queues" />
        </SimpleForm>
    </Edit>
);

export const TaskQueueResultCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="sequence" />
            <TextInput source="succeed" />
            <NumberInput source="detail" />
            <ReferenceInput label="Task Queue" source="task_queue_id" reference="task_queues" />
        </SimpleForm>
    </Create>
)