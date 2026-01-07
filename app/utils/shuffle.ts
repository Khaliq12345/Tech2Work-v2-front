export default function (array: any[]): any[] {
  // Start from the last element and work backward
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index j from 0 to i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));

    // Swap element array[i] with element array[j]
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
