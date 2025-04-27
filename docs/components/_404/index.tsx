import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

export default function _404(): undefined {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
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
}
