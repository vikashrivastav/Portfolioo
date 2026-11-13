"use client";

import { useEffect, useState } from "react";

/** Live IST clock for the footer. */
export default function FooterClock() {
  const [now, setNow] = useState<string>("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit", minute: "2-digit", second: "2-digit",
      hour12: true, timeZone: "Asia/Kolkata",
    });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="ist-clock" title="Local time in Bengaluru, India">
      <i aria-hidden="true" />
      BLR · {now || "--:--:--"} IST
    </span>
  );
}
