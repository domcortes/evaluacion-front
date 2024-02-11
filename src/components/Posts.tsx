import { RichTextInput } from "ra-input-rich-text";
import { List, Datagrid, TextField, ReferenceField, Edit, SimpleForm, ReferenceInput, TextInput, Create, useRecordContext, RichTextField, Show, TopToolbar, EditButton, TabbedShowLayout, SelectInput } from "react-admin";
import { Link } from "react-router-dom";
import { List as ListIcon} from "@mui/icons-material";

export const PostList = () => (
    <List filters={postFilters}>
        <Datagrid rowClick="show">
            <ReferenceField source="user_id" reference="users" link="show" />
            <TextField source="title" />
            <RichTextField source="body" />
        </Datagrid>
    </List>
);

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

export const PostShow = () => (
    <Show actions={<PostShowActions />}>
        <TabbedShowLayout>
            <TabbedShowLayout.Tab label="contenido">
                <div className="card">
                    <div className="card-header text-center bg-dark text-white">
                        <TextField label="Titulo" source="title" /><br />
                    </div>
                    <div className="card-body">
                        <RichTextField label="Contenido" source="body" />
                    </div>
                </div>
            </TabbedShowLayout.Tab>
            <TabbedShowLayout.Tab label="comentarios">
                <div className="card">
                    <div className="card-header bg-primary text-center text-white">
                        Comentarios de <strong><PostName /></strong>
                    </div>
                    <div className="card-body">
                        text de prueba
                    </div>
                </div>
            </TabbedShowLayout.Tab>
        </TabbedShowLayout>
    </Show>
)

const PostTitle = () => {
    const record = useRecordContext();
    return <span>Edicion de post {record ? `"${record.title}"` : ''}</span>;
};

const PostShowActions = () => (
    <TopToolbar>
        <div className="btn-group">
            <EditButton className="btn" />
            <Link to="/posts" className="btn btn-outline-primary"><ListIcon/></Link>
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
