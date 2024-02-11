import { Datagrid, FunctionField, List, ReferenceField, TextField } from "react-admin";

export const FullCommentList = () => {
    return (
        <List>
            <Datagrid>
                <ReferenceField source="user_id" reference="users" label="Comentado por">
                    <FunctionField render={(record: { title: any; }) => record && `${record.name}`} />
                </ReferenceField>
                <ReferenceField source="posts_id" reference="posts" label="Comentado por">
                    <FunctionField render={(record: { title: any; }) => record && `${record.title}`} />
                </ReferenceField>
                <TextField source="comment" />
            </Datagrid>
        </List>
    );
};