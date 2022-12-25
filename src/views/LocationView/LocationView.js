import GenericView from "../GenericView/GenericView";
import GMap from "../../components/GMap";

export default function LocationView() {
  return (
    <GenericView title="location" banner="https://images.pexels.com/photos/4506169/pexels-photo-4506169.jpeg">
      <h3>Please stop by our location!</h3>
      <p>5664 Bee Ridge Road, Suite 102 Sarasota, FL 34233</p>
      <br />
      <p>Located at RIDGEGATE MEDICAL CENTER</p>
      <br />
      <p>
        <b>941-925-1517</b>
      </p>
      <GMap />
    </GenericView>
  );
}
