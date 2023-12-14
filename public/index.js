fetch('/api/options')
	.then((res) => res.json())
	.then((arr) => {
		let text = '';
		for (let index = 0; index < arr.length; index++) {
			let newtext = `
			<div class="card-info center p-3">
				<img src="${arr[index].img}" class="img-card" alt="pc" />
				<p>
					${arr[index].text}
				</p>
			</div>
			`;
			text = text + newtext;
		}
		document.getElementById('cardElem').innerHTML = text;
	});

fetch('/api/comment')
	.then((res) => res.json())
	.then((arr) => {
		let text = '';
		for (let index = 0; index < arr.length; index++) {
			let newtext = `
			<div class="card-info-comm center p-3">
				<h3>${arr[index].name}</h3>
				<p>
					${arr[index].comentario}
				</p>
			</div>
			`;
			text = text + newtext;
		}
		document.getElementById('comm').innerHTML = text;
	});

const target = document.querySelectorAll('[data-target]');
const content = document.querySelectorAll('[data-content]');

target.forEach((target) => {
	target.addEventListener('click', () => {
		content.forEach((c) => {
			c.classList.remove('active');
			c.classList.remove('cotizacion');
		});

		const t = document.querySelector(target.dataset.target);
		t.classList.add('active');
	});
});
