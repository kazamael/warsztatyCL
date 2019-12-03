document.addEventListener('DOMContentLoaded', function () {

    const input1 = document.querySelector(".product:nth-of-type(1)");
    const input2 = document.querySelector(".product:nth-of-type(2)");
    const total=document.querySelector(".total-price");
    const productsPrice = 0.5;
    const ordersPrice = 0.25;
    let totalCounter1=0;
    let totalCounter2=0;
    let totalCounter3=0;
    let totalCounter4=0;
    let totalCounter5=0;
    let totalCounter=totalCounter1+totalCounter2+totalCounter3+totalCounter4+totalCounter5;

    input1.addEventListener("input", function () {
        const product = document.getElementsByClassName("result-item-products")[0];
        if(input1.value<0|| input1.value.isNaN){
            alert("tylko cyfry >=0")
        } else {

            product.querySelector("li:nth-of-type(2)").innerHTML = input1.value + " * " + "$" + productsPrice;
            product.querySelector("li:nth-of-type(3)").innerHTML = "$" + input1.value * productsPrice;
            product.classList.remove("display-none");
            totalCounter1 = input1.value * productsPrice;
            let totalCounter = totalCounter1 + totalCounter2 + totalCounter3 + totalCounter4 + totalCounter5;
            total.innerHTML = "$" + totalCounter;
        }
    })
    input2.addEventListener("input", function () {
        const product = document.getElementsByClassName("result-item-order")[0];
        if(input1.value<0|| input1.value.isNaN){
            alert("tylko cyfry >=0")
        } else {
            product.querySelector("li:nth-of-type(2)").innerHTML = input2.value + " * " + "$" + ordersPrice;
            product.querySelector("li:nth-of-type(3)").innerHTML = "$" + input2.value * ordersPrice;
            product.classList.remove("display-none");
            totalCounter2 = input2.value * ordersPrice;
            let totalCounter = totalCounter1 + totalCounter2 + totalCounter3 + totalCounter4 + totalCounter5;
            total.innerHTML = "$" + totalCounter;
        }
    })


    const dropdown=document.querySelector(".drop-btn");
    const bundleBtn=document.querySelectorAll(".dropdown-content a");

    dropdown.addEventListener("click",function (e) {
        e.preventDefault()
        document.querySelector(".dropdown-content").classList.remove("display-none");
        document.querySelector(".checkbox1").classList.add("display-none");
        document.querySelector(".checkbox2").classList.add("display-none");
        for(let i=0;i<bundleBtn.length;i++){
            bundleBtn[i].addEventListener("click", function () {
                const product = document.getElementsByClassName("result-item-package")[0];
                product.classList.remove("display-none");
                product.querySelector("li:nth-of-type(3)").innerHTML = "$"+this.dataset.price;
                dropdown.innerText=this.innerText;
                dropdown.style.color="#000000";
                document.querySelector(".dropdown-content").classList.add("display-none");
                document.querySelector(".checkbox1").classList.remove("display-none");
                document.querySelector(".checkbox2").classList.remove("display-none");
                totalCounter3=parseFloat(this.dataset.price);
                let totalCounter=totalCounter1+totalCounter2+totalCounter3+totalCounter4+totalCounter5;
                total.innerHTML="$"+totalCounter;

            })
        }
    })

    const checkbox1Btn=document.querySelector(".checkbox1");
    const checkbox2Btn=document.querySelector(".checkbox2");


    checkbox1Btn.querySelector("input").addEventListener("click",function () {
        if(totalCounter4===0){
            const product = document.getElementsByClassName("result-item-accounting")[0];
            product.classList.remove("display-none");
            totalCounter4=35;
            let totalCounter=totalCounter1+totalCounter2+totalCounter3+totalCounter4+totalCounter5;
            total.innerHTML="$"+totalCounter;

        }
        else {
            const product = document.getElementsByClassName("result-item-accounting")[0];
            product.classList.add("display-none");
            totalCounter4=0;
            let totalCounter=totalCounter1+totalCounter2+totalCounter3+totalCounter4+totalCounter5;
            total.innerHTML="$"+totalCounter;
        }
    })
    checkbox2Btn.querySelector("input").addEventListener("click",function () {
        if(totalCounter5===0){
            const product = document.getElementsByClassName("result-item-terminal")[0];
            product.classList.remove("display-none");
            totalCounter5=5;
            let totalCounter=totalCounter1+totalCounter2+totalCounter3+totalCounter4+totalCounter5;
            total.innerHTML="$"+totalCounter;

        }
        else {
            const product = document.getElementsByClassName("result-item-terminal")[0];
            product.classList.add("display-none");
            totalCounter5=0;
            let totalCounter=totalCounter1+totalCounter2+totalCounter3+totalCounter4+totalCounter5;
            total.innerHTML="$"+totalCounter;
        }
    })


    const backBtn=document.querySelector(".calc-box").querySelector("button");

    backBtn.addEventListener("click", function () {

    })

});