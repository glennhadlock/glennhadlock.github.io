import GenericView from "../GenericView/GenericView";
import GMap from "../../components/GMap";
export default function ContactView() {
  return (
    <GenericView title="contact us" banner="https://images.pexels.com/photos/4506078/pexels-photo-4506078.jpeg">
      <p>Glenn A. Hadlock, D.C. - Chiropractic Physician</p>
      <table>
        <tbody>
          <tr>
            <td>Telephone</td>
            <td>
              <b>941-925-1517</b>
            </td>
          </tr>
          <tr>
            <td>Address</td>
            <td>
              <b>5664 Bee Ridge Road, Suite 102 Sarasota, FL 34233</b>
            </td>
          </tr>
          <tr>
            <td>Information</td>
            <td>
              <b>Please Contact us for appointments, questions or any other concerns. Looking forward to helping you live "Pain Free"!</b>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <h3>Please stop by our location!</h3>
      <p>5664 Bee Ridge Road, Suite 102 Sarasota, FL 34233</p>
      <br />
      <p>Located at RIDGEGATE MEDICAL CENTER</p>
      <br />
      <GMap />
    </GenericView>
  );
}
