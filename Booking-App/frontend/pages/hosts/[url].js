import DatePicker from "../../components/datepicker";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

export default function HostDetail({ host }) {
  let randomNumber = Math.floor(Math.random() * 100);

  return (
    <>
      <strong>
        {host.city}, {host.country}
      </strong>

      <img
        src={`https://picsum.photos/id/${randomNumber}/300/300`}
        className="card-image"
      />
      <p>Entire home hosted by {host.name}</p>
      <div>
        <span>{host.numberOfGuests} guests . </span>
        <span>{host.numberOfBedroom} bedrooms . </span>
        <span>{host.numberOfBed} beds . </span>
        <span>{host.numberOfBath} baths </span>
      </div>
      <div>
        <span>{host.overnightStayPrice}₺</span>
      </div>
      <DatePicker />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const request = await axios(`/hosts/${params.url}`);
  const host = await request.data;

  return {
    props: {
      host,
    },
  };
}
