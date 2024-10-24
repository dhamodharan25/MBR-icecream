document.addEventListener("DOMContentLoaded", function() {
    let output = document.getElementById("home-cont");
    const urlParams = new URLSearchParams(window.location.search);
    const serializedArray = urlParams.get('data');

    var array = JSON.parse(decodeURIComponent(serializedArray));
    console.log(array);

        let div1 = document.createElement("div");
        div1.classList.add("row");
        output.appendChild(div1);
        
        let div2 = document.createElement("div");
        div2.id = "dynamic-container";
        div2.classList.add("col-12","col-md-8","shadow","card","p-sm-2","p-md-5");
        div1.appendChild(div2);

        let content = array.slice(4);

        content.forEach(item => {
            let text = item.split("#");
            if(text[0]=="h"){
                let heading = document.createElement("h1");
                heading.textContent = text[1];
                div2.appendChild(heading);
            }
            else if(text[0]=="p"){
                let para = document.createElement("p");
                para.textContent = text[1];
                div2.appendChild(para);}
            else if(text[0]=="s"){
                let subheading = document.createElement("h3");
                subheading.textContent = text[1];
                div2.appendChild(subheading);
            }
            else if(text[0]=="i"){
                let image = document.createElement("img");
                image.src = text[1];
                div2.appendChild(image);
            }
        });

        let div3 = document.createElement("div");
        div3.classList.add("col-12","col-md-4");
        div1.appendChild(div3);

        let div4 = document.createElement("div");
        div4.classList.add("card","mb-3","shadow");
        div3.appendChild(div4);

        let img = document.createElement("img");
        img.src = array[1];
        img.classList.add("card-img-top");
        div4.appendChild(img);

        let div5 = document.createElement("div");
        div5.classList.add("card-body");
        div4.appendChild(div5);

        let h5 = document.createElement("h5");
        h5.classList.add("card-title");
        h5.textContent = array[2];
        div5.appendChild(h5);

        let p = document.createElement("p");
        p.classList.add("card-text");
        p.textContent = array[3];
        div5.appendChild(p);

        let h1 = document.createElement("h1");
        h1.classList.add("fs-3","mt-4","mb-3");
        h1.textContent = "Trending Blogs";
        div3.appendChild(h1);



        const listGroup = document.createElement('ol');
        listGroup.classList.add('list-group', 'list-group-numbered','shadow');


        const listGroupItems = [
        { subheading: 'Innovative Ice Cream Flavors', content: 'Discover the latest innovations in ice cream flavors and how they are transforming the industry.', badgeCount: './blog1.html' },
        { subheading: 'Sustainability in Ice Cream Production', content: 'Learn about our commitment to sustainability and the eco-friendly practices we employ in our ice cream production.', badgeCount: './blog2.html'},
        { subheading: 'Trends in Ice Cream Design', content: 'Stay ahead of the curve with our insights into the latest trends in ice cream design and presentation.', badgeCount: './blog3.html' }
        ];
        listGroupItems.forEach(item => {
            const listGroupItem = document.createElement('a');
            listGroupItem.style.textDecoration="none";
            listGroupItem.href=item.badgeCount;
            listGroupItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start');
            const contentContainer = document.createElement('div');
            contentContainer.classList.add('ms-2', 'me-auto');
            const subheading = document.createElement('div');
            subheading.classList.add('fw-bold');
            subheading.textContent = item.subheading;
            const contentText = document.createTextNode(item.content);
            contentContainer.appendChild(subheading);
            contentContainer.appendChild(contentText);
            listGroupItem.appendChild(contentContainer);
            listGroup.appendChild(listGroupItem);
        });

        div3.appendChild(listGroup);


});








