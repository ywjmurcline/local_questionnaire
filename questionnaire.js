let checker = {}

async function parseBTB(pageID, inst, qID){
    await fetch('snippet/BTB.html').then((response)=>response.text()).then(
        (text)=>{
            qID = pageID + "_" + qID;
            text = text.replace(new RegExp('{{qid}}','g'), qID);
            text = text.replace(new RegExp('{{title}}','g'), inst[1]);
            text = text.replace(new RegExp('{{description}}','g'), inst[2]);
            text = text.replace(new RegExp('{{placeholder}}','g'), inst[3]);
            // console.log(text)
            checker[qID]= {};
            checker[qID]["target"] = inst[4];
            checker[qID]["title"] = inst[1];

            // add to page content
            let page = document.getElementById(pageID);
            let currentHTML = page.innerHTML;
            page.innerHTML = currentHTML + text;
            // console.log(page);
        }
    )

}
async function parseFIB(pageID, inst, num, qID){
    await fetch('snippet/FIB.html').then((response)=>response.text()).then(
        (text)=>{
            qID = pageID + "_" + qID;
            text = text.replace(new RegExp('{{qid}}','g'), qID);
            text = text.replace(new RegExp('{{id}}','g'), num);
            text = text.replace(new RegExp('{{text}}','g'), inst[1]);
            text = text.replace(new RegExp('{{placeholder}}','g'), inst[2]);
            text = text.replace(new RegExp('{{type}}','g'), inst[3]);
            text = text.replace(new RegExp('{{alert}}','g'), inst[4]);
            // console.log(text)
            checker[qID]= {};
            checker[qID]["target"] = inst[5];
            checker[qID]["title"] = inst[1];

            // add to page content
            let page = document.getElementById(pageID);
            let currentHTML = page.innerHTML;
            page.innerHTML = currentHTML + text;
            // console.log(page);
        }
    )
}


async function parseFID(pageID, inst, num, qID){
    await fetch('snippet/FID.html').then((response)=>response.text()).then(
        (text)=>{
            qID = pageID + "_" + qID;
            text = text.replace(new RegExp('{{qid}}','g'), qID);
            text = text.replace(new RegExp('{{id}}','g'), num);
            text = text.replace(new RegExp('{{text}}','g'), inst[1]);
            text = text.replace(new RegExp('{{alert}}','g'), inst[2]);
            // console.log(text)
            checker[qID]= {};
            checker[qID]["target"] = inst[3];
            checker[qID]["title"] = inst[1];

            // add to page content
            let page = document.getElementById(pageID);
            let currentHTML = page.innerHTML;
            page.innerHTML = currentHTML + text;
            // console.log(page);
        }
    )
}
async function parseFT(pageID, inst, num, qID){
    await fetch('snippet/FT.html').then((response)=>response.text()).then(
        (text)=>{
            qID = pageID + "_" + qID;
            text = text.replace(new RegExp('{{qid}}','g'), qID);
            text = text.replace(new RegExp('{{id}}','g'), num);
            text = text.replace(new RegExp('{{text}}','g'), inst[1]);
            text = text.replace(new RegExp('{{from}}','g'), inst[2]);
            text = text.replace(new RegExp('{{to}}','g'), inst[3]);
            checker[qID]= {};
            checker[qID]["target"] = inst[4];
            checker[qID]["title"] = inst[1];
            // console.log(text)
            // add to page content
            let page = document.getElementById(pageID);
            let currentHTML = page.innerHTML;
            page.innerHTML = currentHTML + text;
            // console.log(page);
        }
    )
}

async function parseINS(pageID, inst){
    await fetch('snippet/INS.html').then((response)=>response.text()).then(
        (text)=>{
            text = text.replace(new RegExp('{{instruction}}','g'), inst[1]);
            // console.log(text)
            // add to page content
            let page = document.getElementById(pageID);
            let currentHTML = page.innerHTML;
            page.innerHTML = currentHTML + text;
            // console.log(page);
            
        }
    )
}
async function parseMCS5(pageID, inst, num, qID){
    await fetch('snippet/MCS-5.html').then((response)=>response.text()).then(
        (text)=>{
            qID = pageID + "_" + qID;
            text = text.replace(new RegExp('{{instruction}}','g'), inst[1]);
            text = text.replace(new RegExp('{{qid}}','g'), qID);
            text = text.replace(new RegExp('{{id}}','g'), num);
            text = text.replace(new RegExp('{{question}}','g'), inst[1]);
            for(let i = 0; i < 5; i++) {
                text = text.replace(new RegExp('{{text'+ (i+1) +'}}','g'), inst[3][i]);
                text = text.replace(new RegExp('{{num'+ (i+1) +'}}','g'), inst[2][i]);
            }
            checker[qID] = {}
            checker[qID]["title"] = inst[1];

            let page = document.getElementById(pageID);
            let currentHTML = page.innerHTML;
            page.innerHTML = currentHTML + text;
            
        }
    )
    
}
async function parseMCS7(pageID, inst, num, qID){
    await fetch('snippet/MCS-7.html').then((response)=>response.text()).then(
        (text)=>{
            qID = pageID + "_" + qID;
            text = text.replace(new RegExp('{{instruction}}','g'), inst[1]);
            text = text.replace(new RegExp('{{qid}}','g'), qID);
            text = text.replace(new RegExp('{{id}}','g'), num);
            text = text.replace(new RegExp('{{question}}','g'), inst[1]);
            for(let i = 0; i < 7; i++) {
                text = text.replace(new RegExp('{{text'+ (i+1) +'}}','g'), inst[3][i]);
                text = text.replace(new RegExp('{{num'+ (i+1) +'}}','g'), inst[2][i]);
            }
            checker[qID] = {}
            checker[qID]["title"] = inst[1];

            let page = document.getElementById(pageID);
            let currentHTML = page.innerHTML;
            page.innerHTML = currentHTML + text;
            
        }
    )
}

async function fillPage(pageID, list) {
    checker[pageID] = {};
    let qs = list["questions"];
    let str = "";
    let num = 1;
    for (let i = 0; i < Object.keys(qs).length; i++) {
        let content = qs[Object.keys(qs)[i]];
        if (content[0] == "INS") {
            console.log("INS");
            await parseINS(pageID, content);
        }
        else if (content[0] == "FIB") {
            console.log("FIB");
            await parseFIB(pageID, content, num, Object.keys(qs)[i]);
            num = num + 1;
            // await addFIBListener(Object.keys(qs)[i]);

        }
        else if (content[0] == "FID") {
            console.log("FID");
            await parseFID(pageID, content, num, Object.keys(qs)[i]);
            num = num + 1;
        }
        else if (content[0] == "FT") {
            console.log("FT");
            await parseFT(pageID, content, num, Object.keys(qs)[i]);
            num = num + 1;
        }
        else if (content[0] == "BTB") {
            console.log("BTB");
            await parseBTB(pageID, content, Object.keys(qs)[i]);
        }
        else if (content[0] == "MCS5") {
            console.log("MCS5");
            await parseMCS5(pageID, content, num, Object.keys(qs)[i]);
            num = num + 1;
        }
        else if (content[0] == "MCS7") {
            console.log("MCS7");
            await parseMCS7(pageID, content, num, Object.keys(qs)[i]);
            num = num + 1;
        }
    }
    return str;

}


let pages;
function initPages(q, len){
    let container = document.getElementsByClassName("container")[0];

    // make page
    let pageshtml = ""
    for(let i = 0; i < len; i++) {
        pageshtml += '<div class="page" id="' + Object.keys(q)[i] + '"></div>';
        checker[Object.keys(q)[i]] = {};
    }
    container.innerHTML = pageshtml;

    pages = document.getElementsByClassName("page");

    for (let i = 0; i < pages.length; i++) {
        if(i != 0){
            pages[i].style.display = 'none';
        }
        else {
            pages[i].style.display = 'block';
        }
    }
}


function finishCheck(pageID) {
    let q = document.getElementById(pageID).getElementsByClassName("question");
    console.log(q);
    for (let i = 0; i < q.length; i++) {
        let min = checker[q[i].id];
        console.log(q[i].classList)
        console.log(q[i].classList.contains("MCS-5"));
        if(q[i].classList.contains("MCS-7") || q[i].classList.contains("MCS-5")) {
            console.log(q[i].id, sessionStorage.getItem(q[i].id))
            if(sessionStorage.getItem(q[i].id) > 0) {
                console.log("answered");
                q[i].classList.remove("unfilled");
            }
            else {
                q[i].classList.add("unfilled");
                q[i].scrollIntoView({block: 'center'});
                return false;
            }
        }
        else {
            let inputs = q[i].querySelectorAll("input");
            console.log(inputs);
            let all_filled = true;
            for(let j = 0; j < inputs.length; j++) {
                if(inputs[j].value.trim() == "" && min != 0) {
                    q[i].classList.add("unfilled");
                    all_filled = false;
                    q[i].scrollIntoView({block: 'center'});
                    return false;
                }
            }
            if(all_filled) {
                q[i].classList.remove("unfilled");
            }
        }

    }
    return true;
}

async function writeResult(){
    let questions = document.getElementsByClassName("question");
    let content = ""
    for(let j = 0; j < questions.length; j++) {
        // console.log(questions[j].id)
        if(checker[questions[j].id]["title"] != "") {
            content += checker[questions[j].id]["title"] + "|";
        }
        else {
            content += questions[j].id + "|";
        }
        content += sessionStorage.getItem(questions[j].id) + "\n";
    }
    console.save(content, "output.txt")
}


// let prev = document.getElementById("prev");
let next = document.getElementById("next");
let currentPage = 0;



fetch('configure.json').then((response) => response.json()).then(
    (json) => {
        // console.log(json.questionaire);
        let q = json.questionaire;
        let len = Object.keys(q).length;
        
        // initiate page
        initPages(q, len);

        // fill questions
        for(let i = 0; i < len; i++) {
            fillPage(Object.keys(q)[i], q[Object.keys(q)[i]]);
        }   

        next.addEventListener("click", (e)=>{
            console.log("next clicked");
            e.preventDefault(); // this line prevents changing to the URL of the link href
            e.stopPropagation();
            let result = finishCheck(pages[currentPage].id);
            if(result == true) {
                if (currentPage != pages.length-1){
                    pages[currentPage].style.display = 'none';
                    currentPage += 1;
                    pages[currentPage].style.display = 'block';
                    
                }
                else if (currentPage == pages.length-1){
                    writeResult();
                    alert("Done!")
                }
            }
            else {
                alert("You did not answer all the questions.");
            }
        });
        
        // prev.addEventListener("click", (e)=>{
        //     console.log("prev clicked");
        //     if (currentPage != 0){
        //         pages[currentPage].style.display = 'none';
        //         currentPage -= 1;
        //         pages[currentPage].style.display = 'block';
        //     }
        // });
}
);
