window.addEventListener(
	'load',
	() => {
		// let footers = document.querySelectorAll('.footer');
		// // let headerHeights = (headers) => {
		// // 	console.log(headers);
		// // 	headerHeight = headers.getBoundingClientRect();
		// // 	return headerHeight.height;
		// // };
		// const classScrollToggle = (
		// 	item,
		// 	className,
		// 	scrollValue = window.scrollY
		// ) => {
		// 	if (scrollValue < scrollValue - item.offsetHeight) {
		// 		if (item.classList.contains(className)) {
		// 			item.classList.remove(className);
		// 		}
		// 	} else {
		// 		item.classList.add(className);
		// 	}
		// };
		// const iterateToScroll = (items, className) => {
		// 	for (let i = 0; i < items.length; i++) {
		// 		window.addEventListener('scroll', () => {
		// 			console.log(
		// 				`scroll is ${window.scrollY}`,
		// 				document.body.scrollHeight - items[i].offsetHeight
		// 			);
		// 			classScrollToggle(items[i], className);
		// 		});
		// 	}
		// };
		// iterateToScroll(footers, 'footer--active');
		// // iterateToScroll(document.querySelectorAll('.footer'), 'footer--active');
		// // console.log(headerHeights);
	},
	false
);
