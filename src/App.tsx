import { Admin, Resource, ShowGuesser, EditGuesser } from "react-admin";
import { dataProvider } from "./providers/dataProvider";
import { dataProvider2 } from "./providers/dataProvider2";
import { PostCreate, PostEdit, PostList } from "./components/Posts";
import { UserCreate, UserList } from "./components/User";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from "./components/Dashboard";

export const App = () => (
  <Admin dataProvider={dataProvider2} dashboard={Dashboard}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} create={UserCreate} show={ShowGuesser} recordRepresentation="name" icon={UserIcon} />
  </Admin>
);