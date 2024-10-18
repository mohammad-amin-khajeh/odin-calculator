const operations = {
	add: document.getElementById("add"),
	subtract: document.getElementById("subtract"),
	divide: document.getElementById("divide"),
	multiply: document.getElementById("multiply"),
	equal: document.getElementById("equal"),
};

const opers = document.querySelectorAll(".operation");

const display = document.getElementById("display");
const numbers = document.getElementsByClassName("number");

for (const number of numbers) {
	number.addEventListener(
		"click",
		(e) => (display.innerText += e.target.innerText),
	);
}

const float = document.getElementById("float");

float.addEventListener("click", () =>
	!display.innerText.includes(".") ? (display.innerText += ".") : "",
);

opers.forEach((operation) =>
	operation.addEventListener("click", (e) =>
		!"+÷×-".includes(display.innerText[display.innerText.length - 1])
			? (display.innerText += e.target.innerText)
			: "",
	),
);
