import { RichTextInput } from "ra-input-rich-text";
import { CreateButton, Tab } from 'react-admin';
import { List, Datagrid, TextField, ReferenceField, Edit, SimpleForm, ReferenceInput, TextInput, Create, useRecordContext, RichTextField, Show, TabbedShowLayout, SelectInput } from "react-admin";
import { useNavigate } from 'react-router-dom';
import { CommentsCreate, CommentsList } from "./Comments";

export const PostList = (props) => {
    const navigate = useNavigate();

    const handlePostClick = (id) => {
        localStorage.setItem('postId', id);
        navigate(`/posts/${id}/show`);
    };

    return (
        <List {...props} filters={postFilters}>
            <Datagrid rowClick={(id) => handlePostClick(id)}>
                <ReferenceField source="user_id" reference="users" link="show" />
                <TextField source="title" />
                <RichTextField source="body" />
            </Datagrid>
        </List>
    );
};

export const PostEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <ReferenceField source="category_id" reference="categories" />
            <TextInput source="title" isRequired />
            <RichTextInput source="body" label="Contenido" />
        </SimpleForm>
    </Edit>
)

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <ReferenceInput label="Categoría" source="categoryId" reference="categories">
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput source="title" />
            <RichTextInput source="body" label="Contenido" />
        </SimpleForm>
    </Create>
)

export const PostShow = (props) => {
    return (
        <Show>
            <TabbedShowLayout>
                <Tab label="contenido">
                    <TextField label="Título" source="title" />
                    <RichTextField label="Contenido" source="body" />
                </Tab>
                <Tab label="comentarios">
                    <CommentsList />
                </Tab>
            </TabbedShowLayout>
        </Show>
    );
};


const PostTitle = () => {
    const record = useRecordContext();
    return <span>Edicion de post {record ? `"${record.title}"` : ''}</span>;
};

const postFilters = [
    <TextInput source="q" label="Buscar" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];
