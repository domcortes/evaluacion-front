import { Create, CreateButton, Datagrid, ReferenceManyField, SimpleForm, TextField, TextInput, Toolbar } from "react-admin";

export const CommentsList = () => (
    <ReferenceManyField reference="comments" target="posts_id">
        <Datagrid>
            <TextField source="comment" />
        </Datagrid>
    </ReferenceManyField>
);

export const CommentsCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="comment" />
        </SimpleForm>
    </Create>
);
