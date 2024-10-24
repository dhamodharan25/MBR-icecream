let outputContainer = document.getElementById("appending-container");
let addButton = document.getElementById("temp-add-button");
let options = document.getElementById("choice");
let input = document.getElementById("user-input");
let form = document.getElementById("form-container");
let addBut = document.getElementById("add-button-id");
let thumbnailContainer = document.getElementById("thumbnail-container");

addBut.onclick=function(){
    let inputElement1 = document.createElement("input");
    inputElement1.classList.add("d-none");
    inputElement1.name = "field1";
    inputElement1.type = "text";
    inputElement1.value = document.getElementById("blog-number").value;
    form.appendChild(inputElement1);

    let inputElement2 = document.createElement("input");
    inputElement2.classList.add("d-none");
    inputElement2.name = "field2";
    inputElement2.type = "text";
    inputElement2.value = document.getElementById("thumbnail-url").value;
    form.appendChild(inputElement2);

    let inputElement3 = document.createElement("input");
    inputElement3.classList.add("d-none");
    inputElement3.name = "field3";
    inputElement3.type = "text";
    inputElement3.value = document.getElementById("blog-title").value;
    form.appendChild(inputElement3);

    let inputElement4 = document.createElement("input");
    inputElement4.classList.add("d-none");
    inputElement4.name = "field4";
    inputElement4.type = "text";
    inputElement4.value = document.getElementById("blog-description").value;
    form.appendChild(inputElement4);

    let div = document.createElement("div");
    div.classList.add("card","mb-3","shadow");
    thumbnailContainer.appendChild(div);

    let img = document.createElement("img");
    img.src = document.getElementById("thumbnail-url").value;
    img.classList.add("card-img-top");
    div.appendChild(img);

    let div1 = document.createElement("div");
    div1.classList.add("card-body");
    div.appendChild(div1);

    let h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.textContent = document.getElementById("blog-title").value;
    div1.appendChild(h5);

    let p = document.createElement("p");
    p.classList.add("card-text");
    p.textContent = document.getElementById("blog-description").value;
    div1.appendChild(p);

}
let i=5;
addButton.onclick=function(){
    let inputElement = document.createElement("input");
    inputElement.classList.add("d-none");
    inputElement.name = "field"+i;
    inputElement.type = "text";
    if(options.value==1 && input.value!=""){
        let headingElement = document.createElement("h1");
        headingElement.textContent = input.value;
        inputElement.value = "h#"+input.value;        
        outputContainer.appendChild(headingElement);
        form.appendChild(inputElement);
    }
    else if(options.value==2 && input.value!=""){
        let subheadingElement = document.createElement("h3");
        subheadingElement.textContent = input.value;
        inputElement.value = "s#"+input.value;
        outputContainer.appendChild(subheadingElement);
        form.appendChild(inputElement);
    }
    else if(options.value==3 && input.value!=""){
        let paragraphElement = document.createElement("p");
        paragraphElement.textContent = input.value;
        inputElement.value = "p#"+input.value;
        outputContainer.appendChild(paragraphElement);
        form.appendChild(inputElement);
    }
    else if(options.value==4 && input.value!=""){
        let imageElement = document.createElement("img");
        imageElement.classList.add("img-fluid");
        imageElement.src = input.value;
        inputElement.value = "i#"+input.value;
        outputContainer.appendChild(imageElement);
        form.appendChild(inputElement);
    }
    else{
        alert("Invalid option");
    }
    input.value="";
    options.value=0;
    i++;
}


  
  
  