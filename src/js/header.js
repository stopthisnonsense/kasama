window.addEventListener(
	'load',
	() => {
		// let headers = document.querySelectorAll('.header');
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
		// 	if (scrollValue > item.offsetHeight / 2) {
		// 		item.classList.add(className);
		// 	} else {
		// 		if (item.classList.contains(className)) {
		// 			item.classList.remove(className);
		// 		}
		// 	}
		// };
		// const iterateToScroll = (items, className) => {
		// 	for (let i = 0; i < items.length; i++) {
		// 		window.addEventListener('scroll', () => {
		// 			// console.log(`scroll is ${window.scrollY}`, items[i].offsetHeight);
		// 			classScrollToggle(items[i], className);
		// 		});
		// 	}
		// };
		// iterateToScroll(headers, 'header--active');
		// // iterateToScroll(document.querySelectorAll('.footer'), 'footer--active');
		// // console.log(headerHeights);
	},
	false
);
