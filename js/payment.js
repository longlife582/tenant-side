const popup = document.getElementsByClassName("popup")[0];
const btn4 = document.getElementsByClassName("btn3")[0];
const btn = document.querySelector(".btn-pay1");

btn.addEventListener("click", () => {
  popup.classList.add("popup-active");
});

btn4.addEventListener("click", () => {
  popup.classList.remove("popup-active");
});

const payment = document.getElementById("paymentForm");
// const email = document.getElementById("email").value
// const amount = document.getElementById("amount").value
// const matNum = document.getElementById("mat").value

payment.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {
  e.preventDefault();
  let handler = PaystackPop.setup({
    key: "pk_test_4dc56f2213335f1656157336f667e37e20b53d5c",
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    amount: document.getElementById("amount").value * 100,
    ref: "" + Math.floor(Math.random() * 1000000000 + 1),
    onClose: function () {
      alert("Window closed.");
    },
    callback: function (response) {
      let message = "Payment complete! Reference: " + response.reference;
      alert(message);
    },
  });
  handler.openIframe();

  payment.reset();
}
