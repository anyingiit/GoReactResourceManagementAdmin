import { Datagrid, EmailField, List, SimpleList, TextField, UrlField } from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';
import MyUrlField from './MyUrlField';

export const UserList = () => {
    const isSmail = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    return (
        <List>
            {isSmail ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.username}
                    tertiaryText={(record) => record.email}
                />
            ) : (
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="name" />
                    <EmailField source="email" />
                    <TextField source="phone" />
                    <TextField source="website" />
                    <MyUrlField source='website' />
                    <TextField source="company.name" />
                </Datagrid>
            )}
        </List>
    );
}
