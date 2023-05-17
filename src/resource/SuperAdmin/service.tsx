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
    FunctionField,
} from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';

export const ServiceList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source='name' />
                <TextField source='description' />
                <TextField source='owner_id' />
                <TextField source='owner_type' />
                <ReferenceField source="client_id" reference="superadmin/clients" />
            </Datagrid>
        </List>
    );
}

export const ServiceEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source='name' />
            <TextInput source='description' />
            <TextInput source='owner_id' />
            <TextInput source='owner_type' />
            <ReferenceInput source="client_id" reference="superadmin/clients" />
        </SimpleForm>
    </Edit>
);

export const ServiceCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source='name' />
            <TextInput source='description' />
            <TextInput source='owner_id' />
            <TextInput source='owner_type' />
            <ReferenceInput source="client_id" reference="superadmin/clients" />
        </SimpleForm>
    </Create>
)