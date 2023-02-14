import axios from "axios";
import Hosts from "../components/hosts";

axios.defaults.baseURL = "http://localhost:3001";

export default function Home({ hosts }) {
  // console.table(hosts);
  return (
    <>
      <Hosts hosts={hosts} />
    </>
  );
}

// export async function getStaticProps() {
//   const fetchHosts = "http://localhost:3001/hosts";
//   const responce = await fetch(fetchHosts);
//   const hosts = await responce.json();
//   return {
//     props: {
//       hosts,
//     },
//   };
// }

export async function getStaticProps() {
  const request = await axios.get("/hosts");
  const hosts = request.data;
  return {
    props: {
      hosts,
    },
  };
}
