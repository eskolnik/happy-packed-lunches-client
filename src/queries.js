// replace with real fetches
const mockData = n => `{ "streak": ${n} }`;
const fetchStreakData = () => Promise.resolve(mockData(1));
const postStreakUpdate = () => Promise.resolve(mockData(2));
const postStreakReset = () => Promise.resolve(mockData(0));

export { fetchStreakData, postStreakReset, postStreakUpdate };
