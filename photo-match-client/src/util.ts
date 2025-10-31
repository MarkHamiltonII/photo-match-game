export function getRandomNonRepeatingItemsFromList<T>(list: T[], count: number): T[] {
  // Create a shallow copy of the original list to avoid modifying it
  const shuffledList = [...list]; 

  // Fisher-Yates shuffle algorithm
  for (let i = shuffledList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]]; // Swap elements
  }

  // Return the first 'count' elements from the shuffled list
  return shuffledList.slice(0, count);
}

export function getRandomItemFromList<T>(list: T[]): T {
    const [item] = getRandomNonRepeatingItemsFromList(list, 1);
    return item;
}