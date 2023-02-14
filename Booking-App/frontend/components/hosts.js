import Link from "next/link";

export default function Hosts({ hosts }) {
  let randomNumber = Math.floor(Math.random() * 100);
  return (
    <div className="main">
      {hosts.map((host, index) => (
        <Link href={`/hosts/${host._id}`} key={index} className="hosts-card">
          <div>
            <img
              src={`https://picsum.photos/id/${randomNumber}/300/300`}
              className="card-image"
            />
            <strong>
              {host.country}, {host.city}
            </strong>
            <p>
              <strong>{host.overnightStayPrice}₺</strong> night
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
