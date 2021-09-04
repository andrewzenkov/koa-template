export const takeRandomFromArray = (arr = []) => {
	return arr[Math.floor(Math.random() * arr.length)];
};

