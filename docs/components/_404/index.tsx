import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function _404() {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    switch (location.pathname) {
      case "/forgot-password":
      case "/resend-verification":
      case "/reset-password":
      case "/sign-in":
      case "/sign-up":
      case "/verify":
        navigate(`/pages${location.pathname}`);
        return;
    }
    navigate("/");
  });

  return null;
}
