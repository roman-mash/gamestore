export const getPlatforms = (arr) => {
  let platformsArray = [];
  arr.forEach((item) => {
    platformsArray.push(item.platform.name);
  });
  return platformsArray.join(', ');
};
