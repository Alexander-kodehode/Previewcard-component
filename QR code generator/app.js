const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generate8tn = wrapper.querySelector(".form button");

generate8tn.addEventListener("click", () => {
    let qrValue = qrInput.qrValue;
    console.log(qrValue);
    wrapper.classList.add("active");
});


