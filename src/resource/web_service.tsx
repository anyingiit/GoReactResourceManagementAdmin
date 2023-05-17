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

export const WebServiceList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="host" />
                <TextField source="port" />
                <ReferenceField source="web_service_type_id" reference="web_service_types" />
                <ReferenceField source="service_id" reference="services" />
            </Datagrid>
        </List>
    );
}

export const WebServiceEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="host" />
            <TextInput source="port" />
            <ReferenceInput source="web_service_type_id" reference="web_service_types" />
            <ReferenceInput source="service_id" reference="services" />
        </SimpleForm>
    </Edit>
);

export const WebServiceCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="host" />
            <TextInput source="port" />
            <ReferenceInput source="web_service_type_id" reference="web_service_types" />
            <ReferenceInput source="service_id" reference="services" />
        </SimpleForm>
    </Create>
)