
import { DeleteButton, SaveButton, Toolbar } from 'react-admin';

const CustomToolbar = () => (
  <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
    <SaveButton />
    <DeleteButton mutationMode="pessimistic" />
  </Toolbar>
)

export default CustomToolbar;

