import { Icon } from "@iconify/react";
import "./MonthlyTopicLayout.scss";
import React from "react";

const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

const MonthlyTopicLayout = ({ children, title }) => {
  return (
    <div className="monthly-topic-layout">
      <div className="monthly-topic-layout__header">
        <h1 className="monthly-topic-layout__header__prefix">
          <Icon className="monthly-topic-layout__header__prefix__icon" icon="icons8:idea" />
          tip of the month ({months[new Date().getMonth() % 12]}):
        </h1>
        <h2 className="monthly-topic-layout__header__title">{`${title}`.toLowerCase()}</h2>
      </div>
      <div className="monthly-topic-layout__content">{children}</div>
      <div className="monthly-topic-layout__footer">
        <p>Yours in good health,</p>
        <p>Dr. Glenn Hadlock</p>
      </div>
    </div>
  );
};

const BackAndRibPainTopic = () => {
  return (
    <MonthlyTopicLayout title="MID BACK AND RIB PAIN">
      <p>
        The 'mid back' is technically the 'thoracic' region which starts at the base of the neck and continues down to the very bottom of the rib cage
        (twelve spinal bones below). Thoracic area pain can involve the thoracic spine, muscles of the mid back, muscles or bones in the shoulder
        girdle, rib articulations with the spine or even a referred pain from an internal organ. So, while mid back pain may seem to be a simple
        diagnosis, it is very important to first determine the origin of the pain before embarking on any treatment protocol. Once determined, a
        decision can be made about the next step to take.
      </p>
      <p>
        I often have a patient say: “Doc, I threw a rib out!” They are often partially right! What generally has happened: the spot where the end of
        the rib (rib head) connects to the spine has either become slightly displaced or it might simply have become 'stuck.' In any case, an
        appropriately delivered manipulation of that joint may either realign or free-up the joint respectively. Rib head misalignments or
        'subluxations' can result in a number of different presenting symptoms that can mimic other conditions, including a variety of visceral
        (internal organs) pains. If I determine there is a 'rib fixation' or 'rib subluxation,' there are several different 'adjustment' or
        'manipulation' techniques that can be used to remedy the problem which will help you get back to the things you love to do… pain free!!
      </p>
    </MonthlyTopicLayout>
  );
};

const HeadachesTopic = () => {
  return (
    <MonthlyTopicLayout title="HEADACHES">
      <p>
        Everyone knows when they have a headache. But the type of headache and its cause or origin are often poorly understood. While this general
        symptom of “headache” is common, an accurate diagnosis of the type of headache is important to match a proper treatment protocol to eliminate
        or reduce these headaches. The term “migraine headache" is loosely used by many when, in fact, you might be simply experiencing a severe
        headache that could be better described with a proper diagnosis. Interestingly, a very high percentage of headaches are “cervicogenic,”
        meaning that the origin of the pain has started in the neck. A poignant example is when tightening of the muscles in the neck which are
        attached to the back of the head, pull enough to cause pain in scalp muscles – resulting in a headache. “Spinal adjustments,” massage, or a
        combination of both may be an effective treatment approach in this type of headache.
      </p>
      <p>
        The most important thing to start with is a proper diagnosis. Beginning with an evaluation by a skilled and experienced Doctor of Chiropractic
        can assist you in determining the best course of action.
      </p>
    </MonthlyTopicLayout>
  );
};

const NeckPainTopic = () => {
  return (
    <MonthlyTopicLayout title="Neck Pain">
      <p>
        Neck pain is a very common symptom which can arise from a variety of different origins. In the most common cases, the pain can arise from a
        muscle or tendon strain, a ligament sprain, or direct nerve impingement resulting in sharp, dull, achy or burning pain. When I’m trying to
        find the cause of a patient’s neck pain, I first determine the origin of the pain which can produce clues as to how best to reduce or
        eliminate the pain. In the case of a simple muscle strain, massage may be the best approach. Most scenarios however, are a bit more complex –
        revealing a combination of direct nerve impingement accompanied by muscular symptoms. A treatment known as a “spinal adjustment” may be
        employed to free up stuck spinal vertebrae which are causing nerve interference. When these “subluxations” (misaligned and/or stuck vertebra
        which impinge a nerve, disrupting the electrical signal from flowing properly) are eliminated, pain will likely subside or go away entirely.
        In some cases, a combination of “spinal adjustments” and massage complement one another well by addressing both the impinged (pinched) nerve
        and muscular components.
      </p>
      <p>
        Other complications that can surface when neck pain originates from a pinched nerve are progressive symptoms such as pain, numbness or
        tingling in the arm(s), hands and/or fingers. When these additional symptoms occur in the upper extremities, they are often associated with
        the original nerve impingement that started in the neck. This is explained by the fact that the mid and lower parts of the neck supply the
        nerve signals which go into these upper extremities. This complex condition is known as “cervical-brachial syndrome.” When these symptoms
        arise (with or without neck pain), It is important to rule out other causes of extremity symptoms, such as carpal tunnel syndrome. Either way,
        restoring efficient nerve transmission from the neck into the arms and hands will go a long way to maximizing cervical (neck) range of motion
        and optimal function of the arms, forearms, hands and fingers.
      </p>
    </MonthlyTopicLayout>
  );
};

const SciaticaTopic = () => {
  return (
    <MonthlyTopicLayout title="Sciatica">
      <p>
        Sciatica - a term often misused - is characterized by pain, weakness, numbness or tingling in the thigh, lower leg or foot and is a result of
        compression of all or part of the sciatic nerve which originates in the low back. The sciatic nerve is the largest nerve in the body and
        extends from the low back down both legs into the feet. Symptoms can sometimes be felt along the entire path of the nerve, but often present
        only along certain spots along its path (depending on where the nerve is being compressed). For example, it is not uncommon to experience an
        irritating ache in the back of the thigh or the outside edge of a calf only. One would think the pain or other symptoms would be along the
        entire course of the nerve, but our nerve system does not always convey signals in this fashion. The key to successfully eliminating the
        sciatica is to remove the pressure that is being placed on the nerve. Depending on the location of the impingement, what is causing the nerve
        pressure as well as severity of this compression will all be factors which will have a bearing on a doctors decision about how to remedy the
        problem.
      </p>
      <p>
        Although there are multiple factors to consider, my primary tool for addressing sciatica include hands on spinal adjustments which provide
        several benefits to the affected area including the restoration of mechanical mobility in a particular joint, increased fluid transfer in and
        around the joint, potential endorphin release and ultimately the elimination of nerve compression. Other components of treatment provided are
        various forms of therapy which may include gentle massage, neuromuscular therapy, deep tissue massage, trigger point therapy, passive
        stretching techniques as well as other treatment modalities.
      </p>
    </MonthlyTopicLayout>
  );
};

const ShoulderTopic = () => {
  return (
    <MonthlyTopicLayout title="THE SHOULDER and the ROTATOR CUFF">
      <p>
        Shoulder problems, including pain, weakness and range of motion limitations, can be very detrimental to our ability to enjoy sports,
        recreational activities or even perform tasks essential to our work or simple ADL’s (Activities of Daily Living). If you cannot reach up into
        a cupboard to retrieve a can of food or cannot bring your tennis racquet above your head to strike the ball, life can be difficult and even
        un-fun!
      </p>
      <p>
        So, to keep things simple, I will describe how the shoulder works, some of the main muscles that are part of the shoulder and what the
        “rotator cuff” actually is.
      </p>
      <p>
        The “shoulder girdle” is a term that encompasses the bones, muscles and tendons that make up the shoulder area collectively. The shoulder
        joint is unique in that – unlike most joints, having ligaments which couple one bone to another – the shoulder joint is held together with a
        collective group of muscles known as the “rotator cuff.” So, this ‘cuff’ often thought of as one entity is actually four different muscles
        that aid in moving the shoulder or upper arm in different directions. Of these four muscles, one is more likely to be torn and require
        surgical repair. This muscle called ‘supraspinatus’ is responsible for the initial movement of lifting your arm away from your side (or rib
        cage). Two muscles that are part of the shoulder – but not part of the rotator cuff – include the biceps muscle and deltoid muscle. The
        deltoid muscle picks up where supraspinatus leaves off – lifting the upper arm high away from the rib cage in a motion known as abduction.
      </p>
      <p>
        Understanding how to assess a shoulder injury properly, the reason for shoulder range of motion limitations and why pain is felt in various
        locations of the shoulder, requires a certain skill set and level of experience to arrive at a proper diagnosis. Once diagnosed, a proper
        course of action can be established with a goal of full recovery from the shoulder injury. In many cases, non-invasive treatment options –
        provided in our clinic – can be employed successfully to get you back to the things you love to do, pain free, in a reasonable amount of time.{" "}
      </p>
      .
    </MonthlyTopicLayout>
  );
};

const MonthlyTopics = () => {
  return (
    <MonthlyTopicsContainer>
      <BackAndRibPainTopic />
      <HeadachesTopic />
      <NeckPainTopic />
      <SciaticaTopic />
      <ShoulderTopic />
    </MonthlyTopicsContainer>
  );
};

const MonthlyTopicsContainer = ({ children }) => {
  function rotateComponentsByMonth() {
    const numChildren = React.Children.count(children);
    const monthIndex = new Date().getMonth();
    const childIndex = monthIndex % numChildren;
    return children[childIndex];
  }
  return <div>{rotateComponentsByMonth()}</div>;
};

export default MonthlyTopics;
