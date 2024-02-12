import { RichTextInput } from "ra-input-rich-text";
import { Resource } from 'react-admin';
import { List, Datagrid, TextField, ReferenceField, Edit, SimpleForm, ReferenceInput, TextInput, Create, useRecordContext, RichTextField, Show, TopToolbar, EditButton, TabbedShowLayout, SelectInput } from "react-admin";
import { Link } from "react-router-dom";
import { List as ListIcon } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import { CommentsList } from "./Comments";

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
        <Show {...props}>
            <TabbedShowLayout>
                <TabbedShowLayout.Tab label="contenido">
                    {/* Contenido del post */}
                    <TextField label="Título" source="title" />
                    <RichTextField label="Contenido" source="body" />
                </TabbedShowLayout.Tab>
                <TabbedShowLayout.Tab label="comentarios">
                    <div className="card">
                        <div className="card-header bg-primary text-center text-white">
                            Comentarios de <strong><PostName /></strong>
                        </div>
                        <div className="card-body">
                            <Resource name="comments" list={CommentsList} />
                        </div>
                    </div>
                </TabbedShowLayout.Tab>
            </TabbedShowLayout>
        </Show>
    );
};


const PostTitle = () => {
    const record = useRecordContext();
    return <span>Edicion de post {record ? `"${record.title}"` : ''}</span>;
};

const PostShowActions = () => (
    <TopToolbar>
        <div className="btn-group">
            <EditButton className="btn" />
            <Link to="/posts" className="btn btn-outline-primary"><ListIcon /></Link>
        </div>
    </TopToolbar>
)

const PostName = () => {
    const record = useRecordContext();
    return <span>{record ? `${record.title}` : ''}</span>;
}

const postFilters = [
    <TextInput source="q" label="Buscar" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];
