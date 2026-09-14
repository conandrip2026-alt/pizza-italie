const TZ = "America/Toronto";

export function getTorontoNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: TZ,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const weekday = get("weekday");
  const hour = Number(get("hour"));
  const minute = Number(get("minute"));
  return { weekday, hour, minute };
}

/** Open 16:00–04:00 America/Toronto, seven days. Closed at 04:00 sharp. */
export function isOpenNow(date = new Date()) {
  const { hour } = getTorontoNow(date);
  return hour >= 16 || hour < 4;
}

export function todayIndex(date = new Date()) {
  const { weekday } = getTorontoNow(date);
  const map: Record<string, number> = {
    Mon: 0,
    Tue: 1,
    Wed: 2,
    Thu: 3,
    Fri: 4,
    Sat: 5,
    Sun: 6,
  };
  return map[weekday] ?? 0;
}
