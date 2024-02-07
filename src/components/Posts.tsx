import { List, Datagrid, TextField, ReferenceField, Edit, SimpleForm, ReferenceInput, TextInput, Create, useRecordContext } from "react-admin";

export const PostList = () => (
    <List filters={postFilters}>
        <Datagrid>
            <ReferenceField source="user_id" reference="users" link="show" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

export const PostEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" isRequired/>
            <TextInput source="title" isRequired/>
            <TextInput source="body" isRequired/>
        </SimpleForm>
    </Edit>
)

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Create>
)

const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const postFilters = [
    <TextInput source="q" label="Buscar" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];
