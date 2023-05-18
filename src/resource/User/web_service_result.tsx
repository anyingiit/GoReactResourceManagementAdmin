import {
    BooleanField,
    Datagrid,
    DateField,
    List,
    TextField,
} from 'react-admin';

export const WebServiceResultList = () => {
    return (
        <List>
            <Datagrid>
                <TextField source='id' />
                <TextField source='service_id' />
                <BooleanField source='succeed' />
                <DateField source="created_at" showTime />
            </Datagrid>
        </List>
    );
}

