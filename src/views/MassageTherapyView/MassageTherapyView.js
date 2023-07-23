import "./MassageTherapyView.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import GenericView from "../GenericView/GenericView";
import getMedia from "../../utils/getMedia.js";

const MassageTherapyView = () => {
  return (
    <GenericView className="massage-therapy-view" title={"Massage therapy"}>
      <LazyLoadImage className="massage-therapy-view__portrait" src={getMedia("ally-small.jpg")} />
      <p>Hello! I’m Allison and these are my twin stars! </p>
      <p>I am privileged to work as a Massage Therapist alongside my dad in his Chiropractic practice. My motto is:</p>
      <blockquote className="massage-therapy-view__motto">MOVEMENT IN STILLNESS</blockquote>
      <p>
        <b>What does that mean to me?</b>
      </p>
      <p>
        The body loves movement, that's why we feel so good when we exercise! Movement is what keeps our body in flow... from the flow of blood and
        lymph nourishing and flushing our system, to the unsticking of our fascia and releasing of tight muscles for pain relief and greater range of
        motion, to getting our neurons firing in new pathways and our happy hormones boosting! Movement assists the body in its never-ending journey
        of maintaining homeostasis, the internal balance and optimal flow where our bodies want to be!{" "}
      </p>
      <p>
        The body, of course, also needs rest on our homeostasis quest. As a massage therapist, I offer a relaxation experience that allows your body
        to pause and sink deeply into its “rest, digest, and restore” state…while I provide that beneficial movement your body loves so much by
        pushing on your muscles!{" "}
      </p>
      <p>
        To me, “movement in stillness” is where massage lives and what massage essentially is – you bring the stillness and I bring you the movement.{" "}
      </p>
      <LazyLoadImage className="massage-therapy-view__card" src={getMedia("twin-stars-square.jpg")} />
      <p>
        Massage is a practice that assists the body to holistic wellness...I hope to serve you on your wellness journey. I am so thankful to be able
        to serve and to offer...
      </p>
      <p>massage therapy</p>
      to calm the nervous system facilitate healing and promote wellness for all people
      <p>Allison Hadlock, LMT </p>
      <p>Text me directly at 941-867-0683</p>
      <p>Follow me on Facebook and Instagram! </p>
      <a
        className="massage-therapy-view__link"
        target="blank_"
        rel="noreferrer"
        href="https://linktr.ee/twinstarsmassagetherapy?utm_source=linktree_profile_share&ltsid=e41c0227-f27a-4c42-9fa3-1b52119c20a3"
      >
        Links
      </a>
    </GenericView>
  );
};

export default MassageTherapyView;
