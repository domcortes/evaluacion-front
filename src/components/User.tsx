import { List, Datagrid, TextField, EmailField, TextInput, ReferenceInput, SimpleForm, Create, PasswordInput, DateField } from "react-admin";

export const UserList = () => (
    <List filters={userFilters}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <DateField source="created_at" label="Created At" />
            <DateField source="updated_at" label="Updated At" />
        </Datagrid>
    </List>
);

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <PasswordInput source="password" />
        </SimpleForm>
    </Create>
)

const userFilters = [
    <TextInput source="q" label="Buscar" alwaysOn />,
    <ReferenceInput source="name" label="Usuario" reference="users" />,
];