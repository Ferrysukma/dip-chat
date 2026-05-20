const TimeFormater = new Date().toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "numeric",
  hour12: true, // Set to false for 24-hour format
});

export default TimeFormater;
