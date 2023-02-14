import { useRouter } from "next/router";

export default function Host() {
  const router = useRouter();
  const { url } = router.query;

  return;
}
