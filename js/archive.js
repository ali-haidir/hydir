async function get_repos(){
    let result = await fetch("https://api.github.com/users/ali-haidir/repos");
    let responce = await result.json();

    return responce;
}


(async function () {
    try {
        
        let repos = await get_repos();
        let length = repos.length;
        let half_length = length/2;
        console.log(repos);

        
        for_other_projects(repos);

        

    }catch(err){
        console.error(err.message);
    }
})();

function for_other_projects(data){
    const container = document.getElementById("other_projects");
    data.forEach((result , idx)=>{
        const content = `
        <div class="portfolio-box">
        
        <img src="/images/me.jpeg" alt="" />
        <div class="portfolio-layer">
        <h4>${result.name}</h4>
        <p>
        ${result.description}
        </p>
        <a id="latest_projects_anchor" href="https://github.com/"><i class="bx bx-link-external"></i></a>
        </div>
        </div>
        `;

        if(idx <=data.length -1){
            container.innerHTML += content;
        }else{
            console.log("nothing")
        }
    });
}