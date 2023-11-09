import { socialLinks } from '../data';
import LandingNavbarLinks from './LandingNavbarLinks';
import LandingNavbarSocials from './LandingNavbarSocials';
import Logo from './Logo';
const LandingNavbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Logo />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}

        <LandingNavbarLinks parentClass="nav-links" itemClass="nav-link" />
        <span className="vertical-line"></span>
        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return (
              <LandingNavbarSocials
                {...link}
                key={link.id}
                itemClass="nav-icon"
              />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default LandingNavbar;
