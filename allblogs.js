let result = document.getElementById("add-blogs");
let loader = document.getElementById("loader");
loader.style.display = "block";
fetch("https://script.google.com/macros/s/AKfycbwZwDaWhg5SrIwCod1nD-ATY4WZwJswXCKkrEMzWjSJ3lhrk7OfrpffOntBM3ZJxb34/exec")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        loader.style.display = "none";
        // console.log(data.content);
        
        let arr=data.content.slice(1);
        console.log(arr);
        arr.forEach(item => {

            let div = document.createElement("div");
            div.classList.add("col-12","col-md-4","col-lg-3");
            result.appendChild(div);

            let div1 = document.createElement("div");
            div1.classList.add("card","mb-3","shadow");
            // div1.setAttribute("style","width: 18rem;");
            div.appendChild(div1);

            let img = document.createElement("img");
            img.src = item[1];
            img.classList.add("card-img-top");
            div1.appendChild(img);

            let div2 = document.createElement("div");
            div2.classList.add("card-body");
            div1.appendChild(div2); 

            let h5 = document.createElement("h5");  
            h5.classList.add("card-title");
            h5.innerText = item[2];
            div2.appendChild(h5);

            let p = document.createElement("p");
            p.classList.add("card-text");
            p.innerText = item[3];
            div2.appendChild(p);

            let button = document.createElement("button");
            button.classList.add("btn","btn-primary");
            button.textContent = "Read More";
            div2.appendChild(button);
            var serializedArray=JSON.stringify(item);
            button.onclick = function(){
                window.location.href = 'displayblog.html?data=' + encodeURIComponent(serializedArray);
            };

        });
        document.getElementById("footerid").style.display="block";
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        
    });