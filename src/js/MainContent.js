function MainContent() {
  // Define user's first and last name
  const firstName = "First and";
  const lastName = "Last Name";

  // Get the current date and extract the hour
  const date = new Date();
  const hours = date.getHours();

  let timeOfDay;

  // Determine the time of day based on the current hour
  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  // Return JSX displaying a greeting message and the current hour
  return (
    <div className="container">
      <h1>
        Good {timeOfDay} {firstName} {lastName}!
      </h1>
      <h1>It is currently about {hours % 12} o'clock!</h1>
    </div>
  );
}

export default MainContent;
