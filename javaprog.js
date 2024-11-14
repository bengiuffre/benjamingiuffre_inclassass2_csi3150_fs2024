function toggleVisibility(imageId, buttonId) {
  const image = document.getElementById(imageId);
  const button = document.getElementById(buttonId);
  const isVisible = image.style.display === "block";
  image.style.display = isVisible ? "none" : "block";
  button.textContent = isVisible
    ? buttonId.charAt(buttonId.length - 1)
    : "Hide Result";
}
