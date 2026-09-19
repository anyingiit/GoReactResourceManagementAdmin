import {
    Datagrid,
    List,
    TextField, Edit,
    SimpleForm,
    TextInput,
    Create,
} from 'react-admin';

export const WebServiceTypeList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="protocol" />
            </Datagrid>
        </List>
    );
}

export const WebServiceTypeEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <TextInput source="protocol" />
        </SimpleForm>
    </Edit>
);

export const WebServiceTypeCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="protocol" />
        </SimpleForm>
    </Create>
)