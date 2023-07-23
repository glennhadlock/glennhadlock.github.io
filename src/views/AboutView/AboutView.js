import "./AboutView.scss";
import ProfileLayout from "../../layouts/ProfileLayout/ProfileLayout";
import getMedia from "../../utils/getMedia";
import GenericView from "../GenericView/GenericView";

export default function AboutView() {
  return (
    <GenericView className="about-view" title={"About us"} banner="https://images.pexels.com/photos/4506161/pexels-photo-4506161.jpeg">
      <div className="about-view__profiles">
        <ProfileLayout name={"Glenn Hadlock"} role={"DC"} portraitURL={getMedia("glenn-square.jpg")}>
          <p>
            <b>Dr. Hadlock</b> is a native Floridian who grew up in Sarasota and graduated from Sarasota High School in 1980. After receiving his
            Bachelor of Science degree in Business Management from Florida State University he served as an officer in the United States Marine Corps.
            Returning to Florida, Glenn was employed by the City of Bradenton as an Emergency Medical Technician (EMT) and professional Fire Fighter.
          </p>
          <p>
            It was during his career as a Fire-medic, helping people in crisis, that Glenn recognized a need for a natural approach to health in the
            lives of many. Combining this understanding with exceptional results he experienced as a Chiropractic patient, he found Chiropractic to be
            the perfect bridge between patient and optimal health. He then attended Life University and graduated Valedictorian of his class from
            Life’s Chiropractic College in 2001.
          </p>
          <p>
            Returning to Sarasota, Dr. Hadlock practiced as an associate doctor before establishing his solo practice in 2009. Glenn and his wife
            Bethany have two daughters, Lorna is a cultural anthropologist and Allison works alongside her father as a Licensed Massage Therapist. Dr.
            Hadlock’s approach is simple: <i>I want to help people to be able to do the things they love to do... pain free.</i>
          </p>
        </ProfileLayout>
        <ProfileLayout name={"Allison Hadlock"} role={"LMT"} portraitURL={getMedia("ally-square.jpg")}>
          <p>
            <b>Allison Hadlock</b>, Dr. Hadlock’s youngest daughter, was born and raised in Sarasota. She grew up steeped in the arts of this vibrant
            community, and she received her Bachelor’s degree in English and Creative Writing from the University of South Florida. Allison has been
            in client service and care ever since she started working, from taking care of children, to animals, to being a caregiver for seniors and
            people with disabilities for four and a half years. The wellbeing of so many have been trusted in Allison’s hands, and she now shares that
            care, with her trusted hands, through the gift of massage therapy.
          </p>
          <p>
            Allison considers herself a life-long artist and a life-long mover. She is a dancer, singer, poet, aerial artist, walker of nature walks,
            roller blader, and a practitioner of yoga. Allison believes strongly in caring for the longevity, mobility and wellness of all bodies. She
            advocates for life-long movement exploration. As a holistic practitioner she also believes in caring for the mind, body, and spirit toward
            the intention of wellness, and she believes that massage can nurture all three.
          </p>
          <p>Text Allison at 941-867-0683</p>
        </ProfileLayout>
        <ProfileLayout name={"Leanne Lazzara"} role={"Lead Administrator"} portraitURL={getMedia("leanne-square.jpg")}>
          <p>
            <b>Leanne</b> is our administrative leader and our scheduler extraordinaire! A Sarasota native, Leanne has two children, two dogs, one
            husband, and one older brother... Dr. Glenn Hadlock! Leanne has been working with Dr. H since 2011. She enjoys our family environment and
            the social aspects of her job. As Leanne says, <i>it’s like bartending without the drinks!</i> You never know what kind of discussions we
            might get up to in the office, and she enjoys getting to know our patients and being a familiar face in a familiar place.
          </p>

          <p>
            Leanne loves boating, the beach, paddle boarding, and enjoying that Florida lifestyle. She is also an avid roadtripper and traveler, often
            to concerts across the country. The Southwest has a special place in her heart and she and her daughter enjoy trips there together.
          </p>
        </ProfileLayout>
        <ProfileLayout name={"Marie Hadlock"} role={"Administrator"} portraitURL={getMedia("marie-square.jpg")}>
          <p>
            <b>Marie</b> is our front desk matriarch…she is Leanne and Dr. Hadlock’s mother! She has been working in the office since 2019 and she
            adores working and everything she does. She says our patients are always so kind and fun to talk to, and she loves how her job keeps her
            feeling sharp and socially involved. As Marie says, <i>I just belong here!</i>.
          </p>

          <p>
            Born in Cleveland, Ohio, Marie grew up in Maples Heights, Ohio and came to St Petersburg, Florida when she was 21 years old. There she met
            her husband and eventually had her first child, Dr Hadlock! The Hadlock family moved to Sarasota in 1967, where Leanne was born, and they
            have been here ever since.
          </p>

          <p>
            Marie is a movie buff and she loves watching the classics, mysteries and romances. Her all-time favorite movie is{" "}
            <i>Gone with the Wind</i>.
          </p>
        </ProfileLayout>
        <ProfileLayout name={"Gordon Clark"} role={"LMT"} portraitURL={getMedia("gordon-square.jpg")}>
          <p>
            <b>Gordon</b> is a practicing orthopedic/sports massage and related soft tissue therapies since 1992. He works with active populations and
            competitive athletes to improve health, fitness and injury rehabilitation. His background includes working in an integrated medical
            practice and with sports teams in Hockey, Bicycle racing, Tennis, Soccer and NFL football players. Skilled in Orthopedic/Sports Massage,
            Pro Stretching Techniques, Soft Tissue Mobilization, Kinesiology Taping, Corrective Exercise, National Board Certified and Florida License
            MA 84768. Treatments designed to help you move better with professional quality therapy.
          </p>
        </ProfileLayout>
      </div>
    </GenericView>
  );
}
