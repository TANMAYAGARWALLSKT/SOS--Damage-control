import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Firebase/firebaseconfig";

function Sos() {
  const [longitude, setlongitude] = useState(null);
  const [latitude, setlatitude] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(Savelocation);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function Savelocation(position) {
    setlongitude(position.coords.latitude);
    setlatitude(position.coords.longitude);
    handleInput();
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setDate(new Date().toLocaleDateString());
  }, []);

  const handleInput = async () => {
    try {
      await addDoc(collection(db, "Location"), {
        latitude: latitude,
        longitude: longitude,
        date: date,
        time: time,
      });
      alert("Successfully added");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" flex flex-wrap gap-10 justify-center items-center relative w-[90%]">
      <div
        onClick={() => {
          getLocation();
        }}
        className="bg-red-600/70 shadow shadow-sos w-72 h-72 rounded-full text-5xl relative flex justify-center items-center font-bold text-white"
      >
        SOS
      </div>

      {longitude && (
        <div className=" flex  text-white gap-10  h-64 rounded-3xl bg-white/10 relative  flex-wrap  justify-center items-center text-3xl p-10">
          {longitude}
          <br />
          {latitude}
        </div>
      )}
    </div>
  );
}

export default Sos;
