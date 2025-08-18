import { useEffect } from "react";

interface ExternalRedirectProps {
  to: string;
}

const ExternalRedirect = ({ to }: ExternalRedirectProps) => {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return null;
};

export default ExternalRedirect;
