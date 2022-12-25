import GenericView from "../GenericView/GenericView";
export default function AboutView() {
  return (
    <GenericView title={"About us"} banner="https://images.pexels.com/photos/4506161/pexels-photo-4506161.jpeg">
      <p>
        Dr. Glenn Hadlock is a trained chiropractic physician with prior experience in the emergency medical field. His chiropractic training was
        received in Marietta Georgia, at Life University where he graduated Valedictorian of his class in 2001. Dr. Hadlock is a native Floridian who
        grew up in Sarasota and is a 1980 Sarasota High School Alumnus.
      </p>
      <br />
      <p>
        After receiving a Bachelor of Science degree from Florida State University he served as an infantry officer in the United States Marine Corps.
        Returning to Florida, Glenn was employed by the City of Bradenton as an Emergency Medical Technician and professional Fire Fighter. It was
        during his career as a firemedic, that Glenn recognized a desire to help people with a natural healing approach and found chiropractic to be
        the ideal bridge between patient and optimal health.
      </p>
    </GenericView>
  );
}
