// app/index.tsx

import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = "dfdsf";
      setAuthenticated(!!token);
    };
    checkAuth();
  }, []);

  if (authenticated === null) return null;

  return authenticated ? (
    <Redirect href="/(tabs)/home" />
  ) : (
    <Redirect href="/login" />
  );
}
