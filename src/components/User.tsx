import { List, Datagrid, TextField, EmailField, TextInput, ReferenceInput, SimpleForm, Create, PasswordInput, SelectInput } from "react-admin";
const roles = [
    { id: 'administrador', name: 'administrador' },
    { id: 'editor', name: 'editor' },
    { id: 'invitado', name: 'invitado' },
];

export const UserList = () => (
    <List filters={userFilters}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="role" />
        </Datagrid>
    </List>
);

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <PasswordInput source="password" />
            <SelectInput source="role" choices={roles} label="Selecciona un rol" />
        </SimpleForm>
    </Create>
)

const userFilters = [
    <TextInput source="q" label="Buscar" alwaysOn />,
    <ReferenceInput source="name" label="Usuario" reference="users" />,
];