import { RichTextInput } from "ra-input-rich-text";
import { List, Datagrid, TextField, ReferenceField, Edit, SimpleForm, ReferenceInput, TextInput, Create, useRecordContext, RichTextField } from "react-admin";

export const PostList = () => (
    <List filters={postFilters}>
        <Datagrid rowClick="edit">
            <ReferenceField source="user_id" reference="users" link="show" />
            <TextField source="title" />
            <RichTextField source="body" />
        </Datagrid>
    </List>
);

export const PostEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <TextInput source="title" isRequired/>
            <RichTextInput source="body" label="Contenido" />
        </SimpleForm>
    </Edit>
)

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <RichTextInput source="body" label="Contenido" />
        </SimpleForm>
    </Create>
)

const PostTitle = () => {
    const record = useRecordContext();
    return <span>Edicion de post {record ? `"${record.title}"` : ''}</span>;
};

const postFilters = [
    <TextInput source="q" label="Buscar" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];
