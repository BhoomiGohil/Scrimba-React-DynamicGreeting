function MainContent() {
  const firstName = "Bhoomi";
  const lastName = "Gohil";

  const date = new Date();
  const hours = date.getHours();

  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return (
    <div>
      <h1>
        Good {timeOfDay} {firstName} {lastName}!
      </h1>
      <h1>It is currently about {hours % 12} o'clock!</h1>
    </div>
  );
}

export default MainContent;
