import {
    Datagrid,
    List,
    ReferenceField,
    TextField, Edit,
    ReferenceInput,
    SimpleForm,
    TextInput,
    Create,
    useRecordContext
} from 'react-admin';

const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"` : ''}</span>
}

const postFilters = [
    <TextInput source='q' label="Search" alwaysOn />,
    <ReferenceInput source='userId' label='User' reference='superadmin/users' />
]

export const PostList = () => (
    <List filters={postFilters}>
        <Datagrid rowClick="edit">
            {/* ReferenceField 尝试引用某个资源的某个预定的字段，在这里这个资源在App.tsx的<Admin></Admin>下定义为<Resource name='users' list={UserList} recordRepresentation="name" />。*/}
            {/* 也就是说这里的会用userId的值, 去查询资源'users'的值, 并且有且仅有显示一个字段, 具体显示什么字段由这个Recource定义 */}
            {/* 而Recource的值定义为'name'， 也就是说会返回资源名称为'users'的字段'name' */}
            <ReferenceField source="userId" reference="superadmin/users" />
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

export const PostEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="superadmin/users" />
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Edit>
);

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source='userId' reference='users' />
            <TextInput source='title' />
            <TextInput source='body' multiline rows={5} />
        </SimpleForm>
    </Create>
)
