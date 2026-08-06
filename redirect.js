const currentScript = document.currentScript
const destinationValue = currentScript?.dataset.destination

if (destinationValue) {
  const destination = new URL(destinationValue)
  destination.search = window.location.search
  destination.hash = window.location.hash
  window.location.replace(destination)
}
