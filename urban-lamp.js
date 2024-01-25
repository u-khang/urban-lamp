var tabs = document.querySelectorAll(".tabs li");
var panels = document.querySelectorAll(".panels article");

for (i = 0; i < tabs.length; i++) {
    let tab = tabs[i];
    let panel = panels[i];
    
    function selectTab() {
    
        for (i = 0; i < tabs.length; i++) {
            tabs[i].className = "";
            panels[i].className = "";
        }

        tab.className = "active-tab";
        panel.className = "active-panel";
    
        console.log(selectTab);
    }

    tab.addEventListener("click", selectTab);

}