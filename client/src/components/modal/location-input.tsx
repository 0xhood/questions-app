import React, { useState, useEffect } from "react";

const LocationInput = ({
  onLocationChange,
}: {
  onLocationChange: (location: any) => void;
}) => {
  const [status, setStatus] = useState("getting your current Location");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        onLocationChange({
          latitude: position.coords.latitude.toString(),
          longitude: position.coords.longitude.toString(),
        });
        setStatus("your location is Done");
      },
      (error) => {
        setStatus("Error Getting Your location");
        console.error("Error fetching current position:", error);
      }
    );
  }, [onLocationChange]);

  return (
    <div>
      <p>{status}</p>
    </div>
  );
};

export default LocationInput;
