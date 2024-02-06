import { Admin, Resource, ShowGuesser, EditGuesser } from "react-admin";
import { dataProvider } from "./providers/dataProvider";
import { PostCreate, PostEdit, PostList } from "./components/Posts";
import { UserList } from "./components/User";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from "./components/Dashboard";
import { authProvider } from "./providers/authProvider";

export const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" icon={UserIcon} />
  </Admin>
);