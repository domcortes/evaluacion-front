import { Admin, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from "./providers/dataProvider";
import { PostCreate, PostEdit, PostList } from "./components/Posts";
import { UserCreate, UserList } from "./components/User";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from "./components/Dashboard";

export const App = () => (
  <Admin dataProvider={dataProvider(import.meta.env.VITE_REACT_APP_LARAVEL_SERVER_URL)} dashboard={Dashboard}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} create={UserCreate} show={ShowGuesser} recordRepresentation="name" icon={UserIcon} />
  </Admin>
);