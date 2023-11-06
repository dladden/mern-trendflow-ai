import { pageLinks } from '../data';
import LandingNavbarLink from './LandingNavbarLink';
const LandingNavbarLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return (
          <LandingNavbarLink key={link.id} link={link} itemClass={itemClass} />
        );
      })}
    </ul>
  );
};
export default LandingNavbarLinks;
