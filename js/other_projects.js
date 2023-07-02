async function get_repos(){
    let result = await fetch("https://api.github.com/users/ali-haidir/repos");
    let responce = await result.json();

    return responce;
}

(async function () {
    try {
        console.log('before promice');
        let repos = await get_repos();
        let length = repos.length;
        let half_length = length/2;
        console.log(repos);

        for_best_projects(repos);
        for_other_projects(repos);

        console.log('after promise')

    }catch(err){
        console.error(err.message);
    }
})();

async function for_archive(){

    try {
        console.log('before promice');
        let repos = await get_repos();
        let length = repos.length;
        let half_length = length/2;

        // for_best_projects(repos);
        for_other_projects(repos);

        console.log('after promise')

    }catch(err){
        console.error(err.message);
    }

}
// 0308089
function for_best_projects(data){
    console.log("somthing")
    const container = document.getElementById("best_projects");
    data.forEach((result , idx)=>{
        const content = `
        <div class="portfolio-box">
        
        <img src="./images/me.jpeg" alt="" />
        <div class="portfolio-layer">
        <h4>${result.name}</h4>
        <p>
        ${result.description}
        </p>
        <a id="latest_projects_anchor" href="https://github.com/"> <i class="bx bx-link-external"></i></a>
        </div>
        </div>
        `;


        if(result.description !=null){
            if(result.description.includes("TF-")){
                console.log("hello")
                container.innerHTML +=content;
            }else{
                console.log("nothing")
            }
        }
        
    });
}


// 0308089
function for_other_projects(data){
    const container = document.getElementById("other_projects");
    data.forEach((result , idx)=>{
        const content = `
        <div class="portfolio-box">
        
        <img src="./images/projects_placeholder.png" alt="" />
        <div class="portfolio-layer">
        <h4>${result.name}</h4>
        <p>
        ${result.description}
        </p>
        <a id="latest_projects_anchor" href="https://github.com/"><i class="bx bx-link-external"></i></a>
        </div>
        </div>
        `;

        if(result.description !=null){
            if(result.description.includes("Monte")){
                console.log("hello")
                container.innerHTML +=content;
            }else{
                console.log("nothing")
            }
        }
    });
}