import React, { useState, useEffect } from "react";

function App() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-30T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div
        className="container min-h-screen min-w-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('./crs.png')" }}
      >
        <nav className="flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-x-20 w-full p-5 md:p-10 relative">
          <img
            src="./image1.png"
            alt="LINCOLN & CONTINENTAL Club Europa"
            className="w-[70px] md:w-[100px]"
          />
          <h1 className="nav-title text-2xl md:text-4xl lg:text-5xl text-white text-center">
            LINCOLN & CONTINENTAL Club Europa
          </h1>
        </nav>
        <div className="middle flex flex-col justify-center items-center gap-y-6 md:gap-y-8 mt-[5vh] md:mt-[10vh] text-center relative px-4">
          <div className="Heading flex flex-col gap-5 md:gap-8 text-white">
            <h2 className="welcome text-xl md:text-2xl lg:text-3xl">
              Welcome to the LINCOLN & CONTINENTAL Club Europa
            </h2>
            <h3 className="exp text-lg md:text-xl lg:text-2xl font-semibold">
              Experience the Pinnacle of Royal Elegance: LINCOLN & CONTINENTAL
              Club Europa is Coming Soon, Bringing You the World's Most Unique
              and Prestigious Cars
            </h3>
          </div>
          <div className="countdown my-6 md:my-8">
            {timeLeft.days !== undefined ? (
              <div className="flex justify-center items-center gap-x-3 md:gap-x-5 lg:gap-x-7">
                <span className="bg-[#445874] p-3 md:p-4 rounded-xl text-gray-100 font-semibold text-sm md:text-base lg:text-lg">
                  {timeLeft.days} <strong>Days</strong>
                </span>
                <span className="bg-[#445874] p-3 md:p-4 rounded-xl text-gray-100 font-semibold text-sm md:text-base lg:text-lg">
                  {timeLeft.hours} Hours
                </span>
                <span className="bg-[#445874] p-3 md:p-4 rounded-xl text-gray-100 font-semibold text-sm md:text-base lg:text-lg">
                  {timeLeft.minutes} Minutes
                </span>
                <span className="bg-[#445874] p-3 md:p-4 rounded-xl text-gray-100 font-semibold text-sm md:text-base lg:text-lg">
                  {timeLeft.seconds} Seconds
                </span>
              </div>
            ) : (
              <div className="text-white">Time's up!</div>
            )}
          </div>
          <div>
            <h3 className="coming-soon text-3xl md:text-4xl lg:text-5xl text-white">
              Coming Soon on 30 December
            </h3>
          </div>
          <div className="contact mt-8 text-white text-sm md:text-base">
            © 2024 LINCOLN & CONTINENTAL Club Europa. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
