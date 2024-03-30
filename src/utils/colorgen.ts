export function generateRandomColorHex() {
  const bgClasses = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "pink",
    "yellow",
    "blue",
    // Add more Tailwind background classes as needed
  ];

  // Generate a random index within the range of bgClasses array length
  const randomIndex = Math.floor(Math.random() * bgClasses.length);

  // Retrieve the random background class from the array
  const randomBgClass = bgClasses[randomIndex];

  return randomBgClass;
}
