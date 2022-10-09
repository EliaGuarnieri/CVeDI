import { useRouter } from "next/router";
import React from "react";

export default function Index() {
  const router = useRouter();
  console.log(router);

  React.useEffect(() => {
    router.push("/lezioni");
  }, []);

  return null;
}
