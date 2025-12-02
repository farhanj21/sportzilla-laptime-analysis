console.log("Starting...");

var noChangeCount = 0;
var lastRowCount = 0;

var autoClicker = setInterval(function() {
    var currentRows = document.querySelectorAll("div.row, tr").length;
    var btn = document.querySelector("div.load-more-button");

    if (!btn) {
        console.log("Button disappeared. Stopping.");
        clearInterval(autoClicker);
        alert("Finished loading!");
        return;
    }

    if (currentRows === lastRowCount && lastRowCount !== 0) {
        noChangeCount++;
        console.log(No new data loaded... (Attempt ${noChangeCount}/3));
        
        if (noChangeCount >= 3) {
            console.log("It seems we reached the end.");
            clearInterval(autoClicker);
            btn.innerText = "DONE";
            btn.style.background = "grey";
            alert("All data loaded! You can now extract the Excel file.");
            return;
        }
    } else {
        noChangeCount = 0;
        lastRowCount = currentRows;
        console.log(Data loaded. Total rows: ${currentRows});
    }

    btn.innerText = "LOADING... (" + currentRows + ")";
    btn.style.background = "#ff00ff"; // Pink
    btn.style.color = "white";
    btn.click();

    window.scrollTo(0, document.body.scrollHeight);

}, 400);