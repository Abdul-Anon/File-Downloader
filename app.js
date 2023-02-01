const fileInput = document.querySelector("input"),
    downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click" , e =>{
    e.preventDefault();
    downloadBtn.innerText = "Downloading...";
    fetchFile(fileInput.value);

});
function fetchFile(url){
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        let alinkTag = document.createElement("a");
        alinkTag.href = tempUrl;
        alinkTag.download = url.replace(/^.*[\\\/]/,''); //dynamic naming was difficult
        document.body.appendChild(alinkTag);
        alinkTag.click();
        alinkTag.remove();
        URL.revokeObjectURL(tempUrl);
        downloadBtn.innerText = "Download";
    }).catch(() => {
        downloadBtn.innerText = "Download";
        alert("Download Failed");
    });
}