// nav active part :
let firstLinks = document.querySelector(".first");
let links = document.querySelectorAll(".links  li a");

window.onload = function () {
	firstLinks.classList.add("active");
	// check if there is a link  contains notifications :
	links.forEach((e, index) => {
		if (e.parentNode.classList.contains("contain")) {
			let elements = e.parentNode.querySelectorAll(".element");
			let notification = e.parentNode.querySelector(".notification");
			if (elements.length > 9) {
				notification.textContent = "+9";
			} else {
				notification.textContent = elements.length;
			}
		}
	});
};
links.forEach((e) => {
	e.onclick = (event) => {
		event.preventDefault();

		links.forEach((ele) => {
			ele.parentNode.classList.remove("active");
			links.forEach((element) => {
				element.parentNode.classList.add("done");
			});
		});
		e.parentNode.classList.add("active");
		if (e.parentNode.classList.contains("contain")) {
			let notice = e.parentNode.querySelector(".notice");
			e.parentNode.classList.toggle("show");
			notice.parentNode.classList.remove("done");
			let notificationSpan = notice.parentNode.querySelector(".notification");
			notificationSpan.classList.add("shown");
		}
		if (e.classList.contains("them_btn")) {
			// show the thes section
			let them_box = document.querySelector(".them");
			them_box.style.visibility = "initial";
		}
	};
});

// postes links ;
let postLinks = document.querySelectorAll(".post .icons .colored");

postLinks.forEach((element) => {
	element.addEventListener("click", (event) => {
		event.preventDefault();
		let elementStyle = window.getComputedStyle(element);

		if (elementStyle.getPropertyValue("color") == "rgb(0, 0, 0)") {
			element.style.color = "red";
		} else {
			element.style.color = "rgb(0,0,0)";
		}
	});
});

// right side section :

// add the shadow to the right messages box :

let messages = document.querySelector(".message-link a span");
let right_messages_box = document.querySelector(".right .messages");
messages.onclick = (event) => {
	event.preventDefault();
	right_messages_box.classList.add("focused");
	// remove the shadow after two seconds
	setTimeout(() => {
		right_messages_box.classList.remove("focused");
	}, 2000);
};

// messages filter :
let messages_filter = document.querySelectorAll(".categories li");
let messages_elements = document.querySelectorAll(".right .messages .list .element");

messages_filter.forEach((element) => {
	// remmove focused class from all elements :
	element.addEventListener("click", function (event) {
		messages_filter.forEach((ele) => {
			ele.classList.remove("focused");
		});
		// qdd the focused to the current element
		event.target.classList.add("focused");
		// filtering the messages :
		if (element.innerText === "Primary") {
			// remove hidden class from all elements:
			messages_elements.forEach((e) => {
				e.classList.remove("hidden");
			});
		}
		if (element.innerText !== "Primary") {
			// remove hidden class from all elements:
			messages_elements.forEach((e) => {
				e.classList.remove("hidden");
			});
			messages_elements.forEach((e) => {
				if (!e.classList.contains(element.innerHTML)) {
					e.classList.add("hidden");
				}
			});
		}
	});
});

// requests  section:
messages_filter[messages_filter.length - 1].addEventListener("click", () => {
	messages_filter[messages_filter.length - 1].classList.remove("active");
});
// searching bar:

let search_bar = document.querySelector(".right .messages input");
search_bar.addEventListener("input", () => {
	messages_elements.forEach((ele) => {
		ele.classList.remove("hidden");
	});
	messages_elements.forEach((ele) => {
		if (!ele.querySelector(".content p  span").innerText.includes(search_bar.value)) {
			ele.classList.add("hidden");
		}
	});
});

// thems part :
//  hide the thems section :
let them_box = document.querySelector(".them");
them_box.addEventListener("click", function (event) {
	if (event.target.classList.contains("them")) {
		them_box.style.visibility = "hidden";
	}
});
// change the font :
let font_btns = document.querySelectorAll(".them .them_container .font span");
font_btns.forEach((e, index) => {
	e.addEventListener("click", function (event) {
		font_btns.forEach((element) => {
			element.classList.remove("active");
		});
		event.currentTarget.classList.add("active");
		let html = document.querySelector("html");
		let html_Style = window.getComputedStyle(html);
		let font = html_Style.getPropertyValue("font-size");
		let newFont = 16 + (+font.slice(0, font.length - 2) * index) / 15 + "px";

		html.style.fontSize = newFont;
	});
});

// change the primary color :
let color_btns = document.querySelectorAll(".them .them_container .color .bar span");
color_btns.forEach((ele) => {
	ele.onclick = () => {
		document.body.style.setProperty("--color-primary", window.getComputedStyle(ele).getPropertyValue("background-color"));
		// remove the active class from all btns
		color_btns.forEach((e) => {
			e.classList.remove("active");
		});
		ele.classList.add("active");
	};
});

// change the background :
let backgroundColor_btns = document.querySelectorAll(".background .color");
backgroundColor_btns.forEach((element) => {
	element.addEventListener("click", () => {
		// remove the focused class from all elements :
		backgroundColor_btns.forEach((ele) => {
			ele.classList.remove("focused");
		});
		element.classList.add("focused");
		let color = window.getComputedStyle(element).getPropertyValue("background-color");
		document.body.style.setProperty("--color-lighte", "hsl(252, 30%, 95%)");
		document.body.style.setProperty("--color-white", "hsl(252, 30%, 100%)");
		document.body.style.setProperty("--color-dark", "hsl(252, 30%, 17%)");
		document.body.style.setProperty("--color-black", "hsl(252, 30%, 10%)");
		if (color === "rgb(21, 18, 33)") {
			document.body.style.setProperty("--color-white", color);
			document.body.style.setProperty("--color-lighte", "rgb(36, 30, 56)");
			document.body.style.setProperty("--color-dark", "white");
			document.body.style.setProperty("--color-black", "white");
		} else {
			if (color === "rgb(36, 30, 56)") {
				document.body.style.setProperty("--color-white", color);
				document.body.style.setProperty("--color-lighte", "rgb(21, 18, 33)");
				document.body.style.setProperty("--color-dark", "white");
				document.body.style.setProperty("--color-black", "white");
			} else {
				document.body.style.setProperty("--color-white", "hsl(252, 30%, 100%)");
				document.body.style.setProperty("--color-lighte", "hsl(252, 30%, 95%)");
				document.body.style.setProperty("--color-dark", "hsl(252, 30%, 17%)");
				document.body.style.setProperty("--color-black", "hsl(252, 30%, 10%)");
			}
		}
	});
});
