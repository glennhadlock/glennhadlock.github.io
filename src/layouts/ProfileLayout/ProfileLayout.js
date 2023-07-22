import "./ProfileLayout.scss";
import classNames from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProfileLayout = ({ portraitURL, name, role, children, className }) => {
  return (
    <div className={classNames("portrait-layout", className)}>
      <div className="portrait-layout__image-container">
        <LazyLoadImage className="portrait-layout__image-container__image" src={portraitURL} />
      </div>
      <div className="portrait-layout__text">
        <h1 className="portrait-layout__text__header">
          <span className="portrait-layout__text__header__name">{name}</span>,&nbsp;
          <span className="portrait-layout__text__header__role">{role}</span>
        </h1>
        <div className="portrait-layout__text__bio">{children}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;
