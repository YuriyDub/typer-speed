import { Link } from 'react-router-dom';
import { Button } from '../UI/Button';

import './index.scss';

export const Navigation = () => {
  return (
    <nav>
      <Link to={'warm-up'}>
        <Button>Warm-up</Button>
      </Link>
      <Link to={'challenges'}>
        <Button>Challenges</Button>	
      </Link>
      <Link to={'records'}>
        <Button>Records</Button>
      </Link>
    </nav>
  );
};
