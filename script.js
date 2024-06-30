let form=document.querySelector("form");
let conatiner=document.querySelector(".container")

const displaySearch=async(url)=>{
    let shows=await fetch(url);
    let showsData=await shows.json();

    console.log(showsData)
    if(showsData.length!=0){
        showsData.forEach(e => {
            let card=document.createElement("div");
            let image=document.createElement("img");
            let info=document.createElement("div");
            card.setAttribute("class","card");
            info.setAttribute("class","info");
            try{
                image.setAttribute("src",e.show.image.medium)
            }
            catch(e){
                console.log("Image Not Found")
            }
            image.setAttribute("alt","Img")
            card.append(image);
            info.innerHTML=`<h2>${e.show.name}</h2>${e.show.summary}`
            card.append(info);
            
            conatiner.appendChild(card)
        });
    }
    else{
        conatiner.innerText="No Shows Avaliable :("
    }
}




form.addEventListener("submit",(e)=>{
    conatiner.innerHTML="";
    e.preventDefault();
    let query=form.elements.query.value;
    let url=`https://api.tvmaze.com/search/shows?q=${query}`;
    displaySearch(url);
})




