$(document).ready(() => {
    var boldSpecTitles = true;
    var descBox = $("#desc-txt");
    var specBox = $("#specs-txt");
    var featBox = $("#features-txt");
    var demoBox = $("#demo-html");
    var rawBox = $("#raw-html");


    var head = "<font size=\"2\" face=\"sans-serif\">";
    var desc = "";
    var spec = "";
    var ft = "";
    var full = "";
    var end = "</font>";

    //Update Description
    descBox.on('input', (e) => {
        //console.log("Description changed to: " + e.target.value);
        desc = e.target.value; // set the description to the value in the textarea
        updateHTML();
    });

    //Update spec list
    specBox.on('input', (e) => {
        let specs = e.target.value;
        //console.log("Specs changed to: " + specs);
        if (specs.length > 0) { // make sure the spec list is not empty
            spec = "<br><br><b>Technical Specifications:</b><ul>"; // add the title
            const spec_arr = e.target.value.split("\n");
            spec_arr.forEach((item) => { 
                spec += "<li>";
                if(boldSpecTitles) { // if we're using the "bold spec titles" option, do the following
                    let index = item.indexOf(":"); // find the index of the colon,
                    let [title, value] = [item.slice(0, index+1), item.slice(index + 1)]; // then split on it
                    spec+="<b>"+title+"</b>"; // bold the title
                    spec+=value;
                } else {
                    spec+= item; // if the option is turned off, don't do anything
                }
                spec += "</li>";
            });
            spec += "</ul>";
        } else {
            spec = ""; // if the list is empty, clear it
        }

        updateHTML();
    });

    //Update feature list
    featBox.on('input', (e) => {
        let features = e.target.value;
        //console.log("Features changed to: " + features);

        if (features.length > 0) { // make sure the feature list is not empty
            const feature_arr = e.target.value.split("\n");
            ft = "<br><br><b>Other Features:</b><ul>";
            feature_arr.forEach((item) => { 
                ft += "<li>" + item + "</li>"; // for each feature in the box, add it to the HTML list
            });
            ft += "</ul>";
        } else {
            ft = "";
        }
        updateHTML();
    });

    //Copies the HTML code to the clipboard for distribution
    $("#copyHTML").on("click", () => {
        navigator.clipboard.writeText(full);
        console.log("HTML copied to clipboard.");
    });

    // updates the final HTML code
    function updateHTML() {
        full = head+desc+spec+ft+end;
        rawBox.val(full);
        demoBox.html(full);
    };
})



/*
every time someone changes specs or product:
check if the box is blank, if so, remove that section
if it is not blank, add that section
restructure 

*/
