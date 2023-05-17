import {
    Datagrid,
    List,
    TextField, Edit,
    SimpleForm,
    TextInput,
    Create,
    SimpleList,
    ReferenceInput,
    ReferenceField,
    BooleanField,
    BooleanInput,
    FunctionField,
    NumberField,
    NumberInput,
} from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';

export const UserList = () => {
    const isSmail = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    return (
        <List>
            {isSmail ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.username}
                />
            ) : (
                <Datagrid rowClick="edit">
                    <NumberField source="id" />
                    <TextField source='username' />
                    <TextField source='name' />
                    <NumberField source='age' />
                    <NumberField source='must_change_password' />
                    <ReferenceField source="role_id" reference="roles" />

                    {/* <EmailField source="email" />
                    <TextField source="phone" />
                    <TextField source="website" />
                    <MyUrlField source='website' />
                    <TextField source="company.name" /> */}
                </Datagrid>
            )}
        </List>
    );
}

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            {/* <ReferenceInput source="userId" reference="users" /> */}
            <NumberInput source="id" disabled />
            <TextInput source="username" />
            <TextInput source='name' />
            <NumberInput source='age' />
            <NumberInput source='must_change_password' />
            <ReferenceInput source="role_id" reference="roles" />

            {/* <TextInput source="body" multiline rows={5} /> */}
        </SimpleForm>
    </Edit>
);

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source='username' />
            <TextInput source='name' />
            <NumberInput source='age' />
            <NumberInput source='must_change_password' />
            <ReferenceInput source="role_id" reference="roles" />

        </SimpleForm>
    </Create>
)