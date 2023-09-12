import { Link } from 'react-router-dom';
import { Container } from '../Container';
import { Navigation } from '../Navigation';
import { Toggler } from '../UI/Toggler';

import './index.scss';

export const Header = () => {
  return (
    <header>
      <Container>
        <Link to={'/'} style={{ display: 'flex', alignItems: 'center' }}>
          <img
            style={{ width: '30px' }}
            src="/img/icons/10675340_keyboard_technology_key_typing_letter_icon.svg"
          />
          <h2>TypeSpeed</h2>
        </Link>
        <Navigation />
        <Toggler
          leftSideContent={
            <img style={{ width: '20px' }} src="/img/icons/9024829_sun_light_icon.svg" />
          }
          rightSideContent={
            <img style={{ width: '14px' }} src="/img/icons/9040501_moon_icon.svg" />
          }
        />
      </Container>
    </header>
  );
};
