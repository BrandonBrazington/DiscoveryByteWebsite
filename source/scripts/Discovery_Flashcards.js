function showPreviousVersions() {
    var previousVersions = document.getElementsByClassName("previous-version");
    for (i=0; i <previousVersions.length; i++) {
        previousVersions[i].style.display = "table-row";
    }
    document.getElementById("show-previous-versions-btn").style.display = "none";
}