import { useEffect } from 'react';
import { Admin, Resource } from 'react-admin';
import { dataProvider } from './providers/dataProvider';
import { PostCreate, PostEdit, PostList } from './components/Posts';
import { UserCreate, UserList, UserShow } from './components/User';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import CategoryOutlined from '@mui/icons-material/CategoryOutlined';
import { Dashboard } from './components/Dashboard';
import { authProvider } from './providers/authProvider';
import { CategoryCreate, CategoryEdit, CategoryList } from './components/Categories';

export const App = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      authProvider.checkAuth()
        .then(() => {
          console.log('logeado');

        })
        .catch(() => {
          window.location.href = '/login';
        });
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Admin
      dataProvider={dataProvider(import.meta.env.VITE_REACT_APP_LARAVEL_SERVER_URL)}
      authProvider={authProvider}
      dashboard={Dashboard}
      customRoutes={[
        <Resource key="login" name="login" options={{ label: 'Login' }} icon={UserIcon} />,
      ]}
    >
      <Resource name="users" list={UserList} create={UserCreate} show={UserShow} recordRepresentation="name" icon={UserIcon} />
      <Resource name="categories" list={CategoryList} create={CategoryCreate} edit={CategoryEdit} icon={CategoryOutlined} />
      <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} icon={PostIcon} />
    </Admin>
  );
};

export default App;
