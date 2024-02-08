import { List, Datagrid, TextField, Edit, SimpleForm, TextInput, Create, useRecordContext } from "react-admin";
import CustomToolbar from "./CustomToolbar";

export const CategoryList = () => (
    <List filters={postFilters}>
        <Datagrid rowClick="edit">
            <TextField source="title" />
        </Datagrid>
    </List>
);

export const CategoryEdit = () => (
    <Edit title={<CategoryTitle />}>
      <SimpleForm toolbar={<CustomToolbar/>}>
        <TextInput source="title" isRequired />
      </SimpleForm>
    </Edit>
  );

export const CategoryCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" />
        </SimpleForm>
    </Create>
)

const CategoryTitle = () => {
    const record = useRecordContext();
    return <span>Categoria {record ? `"${record.title}"` : ''}</span>;
};

const postFilters = [
    <TextInput source="q" label="Buscar" alwaysOn />,
];
