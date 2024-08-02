let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let thumbnail = document.querySelectorAll('.thumbnail .item');

//
let countItem = items.length;
let itemActive = 0;

// event next
next.addEventListener('click', () => {
	itemActive++;

	console.log(itemActive);
	if (itemActive >= countItem) {
		itemActive = 0;
	}

	//
	showSlider();
});

// event back
prev.addEventListener('click', () => {
	itemActive--;

	if (itemActive <= 0) {
		itemActive = countItem - 1;
	}

	//
	showSlider();
});

// click on thumbnai
thumbnail.forEach((thumb, index) => {
	thumb.addEventListener('click', () => {
		itemActive = index;
		showSlider();
	});
});

// auto run
let refreshInterval = setInterval(() => {
	next.click();
}, 3000);

//
const showSlider = () => {
	// remove active old
	let activeItemOld = document.querySelector('.slider .list .item.active');
	let activeItemOldThumbnail = document.querySelector(
		'.slider .thumbnail .item.active',
	);

	activeItemOld.classList.remove('active');
	activeItemOldThumbnail.classList.remove('active');

	// active new item
	items[itemActive].classList.add('active');
	thumbnail[itemActive].classList.add('active');

	// cleat intetal
	clearInterval(refreshInterval);
	refreshInterval = setInterval(() => {
		next.click();
	}, 3000);
};
