import "./MainView.scss";
import GenericView from "../GenericView/GenericView";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MonthlyTopics from "../../layouts/MonthlyTopicLayout/MonthlyTopicLayout";
export default function MainView() {
  return (
    <GenericView title={"Glenn A. Hadlock, D.C. – Chiropractor"} banner="https://d2cqospqxtt8fw.cloudfront.net/glenn-hadlock/glenn-ally.jpg">
      <div className="main-view__image-container">
        <LazyLoadImage className="main-view__image-container__image" src="https://d2cqospqxtt8fw.cloudfront.net/glenn-hadlock/glenn-ally.jpg" />
        <span className="main-view__image-container__caption">Father-daughter team Glenn Hadlock, DC and Allison Hadlock, LMT</span>
      </div>
      <h3>Dr. Hadlock’s approach is simple:</h3>
      <blockquote>“Help people to be able to do the things they love to do... pain free."</blockquote>
      <br />
      <MonthlyTopics />
      <br />
      <p>Call for available appointments including Saturdays.</p>
      <br />
      <h2>
        Contact Dr. Hadlock Today! <b>at (941) 925-1517</b>
      </h2>
    </GenericView>
  );
}
