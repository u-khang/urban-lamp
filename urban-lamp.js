var tabs = document.querySelectorAll(".tabs li");
var panels = document.querySelectorAll(".panels article");

for (i = 0; i < tabs.length; i++) {
    let tab = tabs[i];
    tab[i].onclick = selectTab(tab, i);
}

function selectTab(tab, tabPos) {
    let panel = panels[tabPos];

    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = "";
    }
    tab.className = "active-tab";
    for (i = 0; i < panels.length; i++) {
        panels[i].className = "";
    }
    panel.className = "active-panel";
}



    // var tabs = document.querySelectorAll(".tab-panel li");
    //   var panels = document.querySelectorAll(".tab-panel article");

    //   for (i = 0; i < tabs.length; i++) {
    //     var tab = tabs[i];
    //     setTabHandler(tab, i);
    //   }

    //   function setTabHandler(tab, tabPos) {
    //     tab.onclick = function () {
    //       for (i = 0; i < tabs.length; i++) {
    //         tabs[i].className = "";
    //       }

    //       tab.className = "active-tab";

    //       for (i = 0; i < panels.length; i++) {
    //         panels[i].className = "";
    //       }

    //       panels[tabPos].className = "active-panel";
    //     };
    //   }