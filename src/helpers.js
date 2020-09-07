function choice(items) {
	const randNum = Math.floor(Math.random() * items.length);
	return items[randNum];
}

function remove(items, item) {
	const found = items.find((e) => e === item);
	items.splice(items.indexOf(found), 1);
	return items;
}
export { choice, remove };
