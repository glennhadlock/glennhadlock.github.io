import GenericView from "../GenericView/GenericView";

import { LoadScript } from "@react-google-maps/api";

import { GoogleMap, MarkerClusterer } from "@react-google-maps/api";

import { Marker } from "@react-google-maps/api";

const Pin = ({ position, index, clusterer }) => <Marker key={index} position={position} clusterer={clusterer} />;

const Map2 = ({ children }) => {
  const listings = [
    { lat: -31.56391, lng: 147.154312 },
    { lat: -33.718234, lng: 150.363181 },
    { lat: -33.727111, lng: 150.371124 },
    { lat: -33.848588, lng: 151.209834 },
    { lat: -33.851702, lng: 151.216968 },
    { lat: -34.671264, lng: 150.863657 },
    { lat: -35.304724, lng: 148.662905 },
    { lat: -36.817685, lng: 175.699196 },
    { lat: -36.828611, lng: 175.790222 },
    { lat: -37.75, lng: 145.116667 },
    { lat: -37.759859, lng: 145.128708 },
    { lat: -37.765015, lng: 145.133858 },
    { lat: -37.770104, lng: 145.143299 },
    { lat: -37.7737, lng: 145.145187 },
    { lat: -37.774785, lng: 145.137978 },
    { lat: -37.819616, lng: 144.968119 },
    { lat: -38.330766, lng: 144.695692 },
    { lat: -39.927193, lng: 175.053218 },
    { lat: -41.330162, lng: 174.865694 },
    { lat: -42.734358, lng: 147.439506 },
    { lat: -42.734358, lng: 147.501315 },
    { lat: -42.735258, lng: 147.438 },
    { lat: -43.999792, lng: 170.463352 },
  ];
  let testArray = [];
  for (let i = 0; i < listings.length; i++) {
    let location = listings[i];
    testArray.push(<Pin position={location} id={i} key={i} clusterer={listings} />);
  }

  const demoMapStyles = [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#e9e9e9",
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 29,
        },
        {
          weight: 0.2,
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 18,
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
        {
          lightness: 21,
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#dedede",
        },
        {
          lightness: 21,
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#ffffff",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          saturation: 36,
        },
        {
          color: "#333333",
        },
        {
          lightness: 40,
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#f2f2f2",
        },
        {
          lightness: 19,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#fefefe",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#fefefe",
        },
        {
          lightness: 17,
        },
        {
          weight: 1.2,
        },
      ],
    },
  ];

  return (
    <GoogleMap
      id="marker-example"
      mapContainerStyle={{
        height: "400px",
        width: "800px",
      }}
      zoom={15}
      center={{ lat: -42.735258, lng: 147.438 }}
      options={{ styles: demoMapStyles }}
    >
      <MarkerClusterer
        options={{
          imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
          styles: [],
        }}
      >
        {/* {listings} */}
        {(clusterer) =>
          [
            { lat: -31.56391, lng: 147.154312 },
            { lat: -33.718234, lng: 150.363181 },
            { lat: -33.727111, lng: 150.371124 },
            { lat: -33.848588, lng: 151.209834 },
            { lat: -33.851702, lng: 151.216968 },
            { lat: -34.671264, lng: 150.863657 },
            { lat: -35.304724, lng: 148.662905 },
            { lat: -36.817685, lng: 175.699196 },
            { lat: -36.828611, lng: 175.790222 },
            { lat: -37.75, lng: 145.116667 },
            { lat: -37.759859, lng: 145.128708 },
            { lat: -37.765015, lng: 145.133858 },
            { lat: -37.770104, lng: 145.143299 },
            { lat: -37.7737, lng: 145.145187 },
            { lat: -37.774785, lng: 145.137978 },
            { lat: -37.819616, lng: 144.968119 },
            { lat: -38.330766, lng: 144.695692 },
            { lat: -39.927193, lng: 175.053218 },
            { lat: -41.330162, lng: 174.865694 },
            { lat: -42.734358, lng: 147.439506 },
            { lat: -42.734358, lng: 147.501315 },
            { lat: -42.735258, lng: 147.438 },
            { lat: -43.999792, lng: 170.463352 },
          ].map((location, i) => <Pin key={i} position={location} clusterer={clusterer} />)
        }
      </MarkerClusterer>
    </GoogleMap>
  );
};

Map.defaultProps = {
  mapContainerStyle: {
    height: "400px",
    width: "800px",
  },
  children: null,
  onLoad: () => {},
  onDragEndFunc: () => {},
  onDragStartFunc: () => {},
  onZoomChangeFunc: () => {},
};

const MapContainer = ({ shownPin }) => {
  return <Map2 />;
};

function Map() {
  return (
    <div style={{ display: "flex", height: "calc(100vh - 50px)" }}>
      {/* Google maps has whitelisted codesandbox with overlay, so there is enough to pass an empty string, but for your own app, you need to provide your own api key. Please do not forget to restrict it for your own domain name. */}
      <MapContainer />
    </div>
  );
}

function MyMap() {
  return (
    <LoadScript id="script-loader" googleMapsApiKey={"AIzaSyBX1z5nvjcjzyxSMT-QCVS3ERu6Y3iNSb0"} language="en" region="EN" version="weekly">
      <Map />
      <Map />
      <Map />
    </LoadScript>
  );
}

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
      {/* <iframe
        width={600}
        height={450}
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ5dWbXx5Bw4gRx-wv1Fh_VzE&key=AIzaSyDPmXhl5Qe-JYGnzRIpHOOd04E0yKlIN2o"
      /> */}
      {/* <iframe
        width="834"
        height="411"
        frameBorder="0"
        // scrolling="no"
        marginHeight="0"
        marginWidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=834&amp;height=411&amp;hl=en&amp;q=5664%20Bee%20Ridge%20Road,%20Suite%20102%20Sarasota+(Glenn%20Hadlock,%20DC)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe> */}
    </GenericView>
  );
}
