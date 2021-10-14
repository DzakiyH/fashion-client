const ArrayByIndex = (i, theArray) => {
  const currentIndex = 0;
  if (i === 0) {
    return theArray[currentIndex];
  } else if (i < 0) {
    return theArray[(currentIndex + theArray.length + i) % theArray.length];
  } else if (i > 0) {
    return theArray[(currentIndex + i) % theArray.length];
  }
};

export default ArrayByIndex;
