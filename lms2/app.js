//import _ from "lodash";

$(document).ready(function() {

    // create object containing league table data
    var league = {
        leagueName: "My League",
        teams: [
            {
                id: 1,
                name: "Tigers",
                league: "Boys U-10",
                coach: "John Doe",
                adminAndPhone: "James Jam (123) 712-1234",
                numPlayers: 5
            },
            {
                id: 2,
                name: "Dolphins",
                league: "Girls U-10",
                coach: "Jane Doen",
                adminAndPhone: "Tom Johnson (234) 567-8901",
                numPlayers: 8
            },
            {
                id: 3,
                name: "Parrots",
                league: "Girls 13-14",
                coach: "Josie Doe",
                adminAndPhone: "Carrie Nelson (345) 678-9012",
                numPlayers: 10
            }
    
        ]
    };
    
    // store in local storage
    var setToString = JSON.stringify(league);
    localStorage.setItem("theLeague", setToString);
    // retrieve from local storage
    localStorage.getItem("theLeague");
    newStoredValues = JSON.parse(setToString);
    console.log(newStoredValues);
    // if stuff was in local storage, hide the original css grid table to show dynamic table
    if(newStoredValues)
    {
        document.getElementById("table").style.cssText = "visibility: hidden";
    }
    //league = _.orderBy(newStoredValues, ['teams.name'], ['desc', 'asc']); default 
    var leagues = (_.orderBy(newStoredValues.teams, ['name'], ['asc']));
    
    console.log(leagues);
    var caretIcon = '<i class = "fas fa-caret-up"></i>';
    
    var defaultStoredLeagues = localStorage.setItem("leagueSort", JSON.stringify(leagues));
    // when sort order changes, store the sort column and order in localstorage

    
    // determine current sort col and direction (retrieve from local storage)
    var getLeagueFromStorage = localStorage.getItem("leagueSort");
    // change sort col and direction based on click target and store in localstorage

    // sort array and rerender table

    // change caret icon direction
    



    // traverse array data and dynamically generate the table along with action icons & links
    // there has GOT to be a more efficient way to do this. After it is working, need to look into that
 // enable popovers for info buttons
 $(function () {
    $('[data-toggle="popover"]').popover()
  });
  

    var table = document.createElement("TABLE");
    console.log(typeof newStoredValues[2]);
    var thead = document.createElement("THEAD");
    // create header
    //table.append(thead);
    var theadRow = document.createElement("TR");
    var headerName = document.createElement("TD");
    var headerLeague = document.createElement("TD");
    var headerCoach = document.createElement("TD");
    var headerAdmin = document.createElement("TD");
    var headerPlayers = document.createElement("TD");
    var headerEdit = document.createElement("TD");
    // append td to header row
    thead.append(theadRow);
    //theadRow.append(sortIcon);
    theadRow.append(headerName);
    theadRow.append(headerLeague);
    theadRow.append(headerCoach);
    theadRow.append(headerAdmin);
    theadRow.append(headerPlayers);
    theadRow.append(headerEdit);
    // set innerhtml of header td's

    headerName.innerHTML = caretIcon + " Team Name";
    headerLeague.innerHTML = "League";
    headerCoach.innerHTML = "Coach";
    headerAdmin.innerHTML = "Admin & Phone";
    headerPlayers.innerHTML = "Number of Players";
    headerEdit.innerHTML = "Edit";
    console.log(newStoredValues[2]);
    // create tbody
    var tbody = document.createElement("TBODY");
    table.append(thead);
    table.append(tbody);
    // create rows for Tbody
    var team1Row = document.createElement("TR");
    var team2Row = document.createElement("TR");
    var team3Row = document.createElement("TR");
    // append rows
    tbody.append(team1Row);
    tbody.append(team2Row);
    tbody.append(team3Row);
    // create td cells for row 1 
    var team1Name = document.createElement("TD");
    var team1League = document.createElement("TD");
    var team1Coach = document.createElement("TD");
    var team1Admin = document.createElement("TD");
    var team1Players = document.createElement("TD");
    var team1Edit = document.createElement("DIV");
    var editIcon1 = document.createElement("TD");
    var trashIcon1 = document.createElement("TD");
    var info1 = document.createElement("BUTTON");
    info1.className = "btn btn-info";
    $(info1).popover({trigger: "hover", title: "Information", content: "Tigers, Boys U-10", placement: "top"});
 
    team1Row.append(team1Name);
    team1Row.append(team1League);
    team1Row.append(team1Coach);
    team1Row.append(team1Admin);
    team1Row.append(team1Players);
    team1Row.append(team1Edit);
    team1Edit.append(editIcon1);
    team1Edit.append(trashIcon1);
    team1Edit.append(info1);
    // set inner html of team 1 tds
    team1Name.innerHTML = leagues[0].name;
    team1League.innerHTML = leagues[0].league;
    team1Coach.innerHTML = leagues[0].coach;
    team1Admin.innerHTML = leagues[0].adminAndPhone;
    team1Players.innerHTML = leagues[0].numPlayers;
    editIcon1.innerHTML = '<i class="fa fa-edit" aria-hidden="true"></i>' ;
    trashIcon1.innerHTML = '<i class = "fa fa-trash" aria-hidden="true"></i>';
    info1.innerHTML = "Information";

    // create row 2 tds
    var team2Name = document.createElement("TD")
    var team2League = document.createElement("TD");
    var team2Coach = document.createElement("TD");
    var team2Admin = document.createElement("TD");
    var team2Players = document.createElement("TD");
    var team2Edit = document.createElement("DIV");
    var editIcon2 = document.createElement("TD");
    var trashIcon2 = document.createElement("TD");
    var info2 = document.createElement("BUTTON");
    info2.className = "btn btn-info";
    $(info2).popover({trigger: "hover", title: "Information", content: "Dolphins, Girls U-10", placement: "left"});
 
    

    // append to row
    team2Row.append(team2Name);
    team2Row.append(team2League);
    team2Row.append(team2Coach);
    team2Row.append(team2Admin);
    team2Row.append(team2Players);
    team2Row.append(team2Edit);
    team2Edit.append(editIcon2);
    team2Edit.append(trashIcon2);
    team2Edit.append(info2);
    // set innerhtml
    team2Name.innerHTML = leagues[1].name;
    team2League.innerHTML = leagues[1].league;
    team2Coach.innerHTML = leagues[1].coach;
    team2Admin.innerHTML = leagues[1].adminAndPhone;
    team2Players.innerHTML = leagues[1].numPlayers;
    editIcon2.innerHTML = '<i class="fa fa-edit" aria-hidden="true"></i>' ;
    trashIcon2.innerHTML = '<i class = "fa fa-trash" aria-hidden="true"></i>';
    info2.innerHTML = "Information";
    // create row 3 cells
    var team3Name = document.createElement("TD");
    var team3League = document.createElement("TD");
    var team3Coach = document.createElement("TD");
    var team3Admin = document.createElement("TD");
    var team3Players = document.createElement("TD");
    var team3Edit = document.createElement("DIV");
    var editIcon3 = document.createElement("TD");
    var trashIcon3 = document.createElement("TD");
    var info3 = document.createElement("BUTTON");
    info3.className = "btn btn-info";
    info3.innerHTML = "Information";
    $(info3).popover({trigger: "hover", title: "Information", content: "Parrots, Girls 13-14", placement: "bottom"});
 

    // append to row
    team3Row.append(team3Name);
    team3Row.append(team3League);
    team3Row.append(team3Coach);
    team3Row.append(team3Admin);
    team3Row.append(team3Players);
    team3Row.append(team3Edit);
    team3Edit.append(editIcon3);
    team3Edit.append(trashIcon3);
    team3Edit.append(info3);

    //set inner html
    team3Name.innerHTML = leagues[2].name;
    team3League.innerHTML = leagues[2].league;
    team3Coach.innerHTML = leagues[2].coach;
    team3Admin.innerHTML = leagues[2].adminAndPhone;
    team3Players.innerHTML = leagues[2].numPlayers;
    editIcon3.innerHTML = '<i class="fa fa-edit" aria-hidden="true"></i>' ;
    trashIcon3.innerHTML = '<i class = "fa fa-trash" aria-hidden="true"></i>';


    
   // styles
    theadRow.style.cssText = "padding: 10px; font-weight:bold;";
    team1Row.style.cssText = "text-align: center; border-bottom: solid darkblue; background-color: rgb(234,249,255);";
    //team1Row.classList.add('animate__animated', 'animate__bounceOutLeft');
    thead.style.cssText = "text-align: center; border-bottom: solid darkblue";
    team2Row.style.cssText = "text-align: center; border-bottom: solid darkblue;"
    document.getElementById("dynamicTable").append(table); 
    team3Row.style.cssText = "background-color: rgb(234,249,255);";
 
    // Using lodash library, implement ascending/descending sort of table

    // team name column should be default and ascending (icon should indicate that)

    // when sort order changes, store sort column and order in localstorage

    // when 'team name' or 'league' clicked, determine current sort col and direction (from localstorage)

    // change the sort col and direction based on click target and store those in local storage

    // sort the team array and re-render table, place an up or down caret icon in header in appropriate direction
    // when a user clicks on team name or league
    
console.log(leagues);
console.log(typeof leagues[0].name);
$(headerName).click(function() {
    
    if(leagues[0].name === 'Dolphins'){
        var getLeagueFromStorage = localStorage.getItem("leagueSort");
        leagues = JSON.parse(getLeagueFromStorage);
        leagues = (_.orderBy(newStoredValues.teams, ['name'], ['desc']));
        caretIcon = '<i class="fas fa-caret-down"></i>';
        headerName.innerHTML = caretIcon + " Team Name";
        team1Name.innerHTML = leagues[0].name;
        team1League.innerHTML = leagues[0].league;
        team1Coach.innerHTML = leagues[0].coach;
        team1Admin.innerHTML = leagues[0].adminAndPhone;
        team1Players.innerHTML = leagues[0].numPlayers;
        editIcon1.innerHTML = '<i class="fa fa-edit" aria-hidden="true"></i>' ;
        trashIcon1.innerHTML = '<i class = "fa fa-trash" aria-hidden="true"></i>';
        info1.innerHTML = "Information";
        team2Name.innerHTML = leagues[1].name;
        team2League.innerHTML = leagues[1].league;
        team2Coach.innerHTML = leagues[1].coach;
        team2Admin.innerHTML = leagues[1].adminAndPhone;
        team2Players.innerHTML = leagues[1].numPlayers;
        editIcon2.innerHTML = '<i class="fa fa-edit" aria-hidden="true"></i>' ;
        trashIcon2.innerHTML = '<i class = "fa fa-trash" aria-hidden="true"></i>';
        info2.innerHTML = "Information";
        team3Name.innerHTML = leagues[2].name;
        team3League.innerHTML = leagues[2].league;
        team3Coach.innerHTML = leagues[2].coach;
        team3Admin.innerHTML = leagues[2].adminAndPhone;
        team3Players.innerHTML = leagues[2].numPlayers;
        editIcon3.innerHTML = '<i class="fa fa-edit" aria-hidden="true"></i>' ;
        trashIcon3.innerHTML = '<i class = "fa fa-trash" aria-hidden="true"></i>';
        var defaultStoredLeagues = localStorage.setItem("leagueSort", JSON.stringify(leagues));

    }
    if(leages[0].name === 'Tigers') {
        getLeagueFromStorage = localStorage.getItem("leagueSort");
        leagues = JSON.parse(getLeagueFromStorage);
        leagues = (_.orderBy(newStoredValues.teams, ['name'], ['asc']));
        caretIcon = '<i class="fas fa-caret-up"></i>';
        headerName.innerHTML = caretIcon + " Team Name";
        team1Name.innerHTML = leagues[0].name;
        team1League.innerHTML = leagues[0].league;
        team1Coach.innerHTML = leagues[0].coach;
        team1Admin.innerHTML = leagues[0].adminAndPhone;
        team1Players.innerHTML = leagues[0].numPlayers;
        editIcon1.innerHTML = '<i class="fa fa-edit" aria-hidden="true"></i>' ;
        trashIcon1.innerHTML = '<i class = "fa fa-trash" aria-hidden="true"></i>';
        info1.innerHTML = "Information";
        team2Name.innerHTML = leagues[1].name;
    team2League.innerHTML = leagues[1].league;
    team2Coach.innerHTML = leagues[1].coach;
    team2Admin.innerHTML = leagues[1].adminAndPhone;
    team2Players.innerHTML = leagues[1].numPlayers;
    editIcon2.innerHTML = '<i class="fa fa-edit" aria-hidden="true"></i>' ;
    trashIcon2.innerHTML = '<i class = "fa fa-trash" aria-hidden="true"></i>';
    info2.innerHTML = "Information";
    team3Name.innerHTML = leagues[2].name;
    team3League.innerHTML = leagues[2].league;
    team3Coach.innerHTML = leagues[2].coach;
    team3Admin.innerHTML = leagues[2].adminAndPhone;
    team3Players.innerHTML = leagues[2].numPlayers;
    editIcon3.innerHTML = '<i class="fa fa-edit" aria-hidden="true"></i>' ;
    trashIcon3.innerHTML = '<i class = "fa fa-trash" aria-hidden="true"></i>';
    var defaultStoredLeagues = localStorage.setItem("leagueSort", JSON.stringify(leagues));
    }
    
});

$(headerLeague).click(function() {
    
    if(leagues[0].league === 'Boys U-10'){
        var getLeagueFromStorage = localStorage.getItem("leagueSort");
        leagues = JSON.parse(getLeagueFromStorage);
        leagues = (_.orderBy(newStoredValues.teams, ['league'], ['desc']));
        caretIcon = '<i class="fas fa-caret-down"></i>';
        team1Name.innerHTML = leagues[0].name;
        team1League.innerHTML = leagues[0].league;
        team1Coach.innerHTML = leagues[0].coach;
        team1Admin.innerHTML = leagues[0].adminAndPhone;
        team1Players.innerHTML = leagues[0].numPlayers;
        editIcon1.innerHTML = '<i class="fa fa-edit" aria-hidden="true"></i>' ;
        trashIcon1.innerHTML = '<i class = "fa fa-trash" aria-hidden="true"></i>';
        info1.innerHTML = "Information";
        team2Name.innerHTML = leagues[1].name;
        team2League.innerHTML = leagues[1].league;
        team2Coach.innerHTML = leagues[1].coach;
        team2Admin.innerHTML = leagues[1].adminAndPhone;
        team2Players.innerHTML = leagues[1].numPlayers;
        editIcon2.innerHTML = '<i class="fa fa-edit" aria-hidden="true"></i>' ;
        trashIcon2.innerHTML = '<i class = "fa fa-trash" aria-hidden="true"></i>';
        info2.innerHTML = "Information";
        team3Name.innerHTML = leagues[2].name;
        team3League.innerHTML = leagues[2].league;
        team3Coach.innerHTML = leagues[2].coach;
        team3Admin.innerHTML = leagues[2].adminAndPhone;
        team3Players.innerHTML = leagues[2].numPlayers;
        editIcon3.innerHTML = '<i class="fa fa-edit" aria-hidden="true"></i>' ;
        trashIcon3.innerHTML = '<i class = "fa fa-trash" aria-hidden="true"></i>';
        var defaultStoredLeagues = localStorage.setItem("leagueSort", JSON.stringify(leagues));

    }
    if(leagues[0].league === 'Girls U-10') {
        var getLeagueFromStorage = localStorage.getItem("leagueSort");
        leagues = JSON.parse(getLeagueFromStorage);
        leagues = (_.orderBy(newStoredValues.teams, ['league'], ['asc']));
        team1Name.innerHTML = leagues[0].name;
        team1League.innerHTML = leagues[0].league;
        team1Coach.innerHTML = leagues[0].coach;
        team1Admin.innerHTML = leagues[0].adminAndPhone;
        team1Players.innerHTML = leagues[0].numPlayers;
        editIcon1.innerHTML = '<i class="fa fa-edit" aria-hidden="true"></i>' ;
        trashIcon1.innerHTML = '<i class = "fa fa-trash" aria-hidden="true"></i>';
        info1.innerHTML = "Information";
        team2Name.innerHTML = leagues[1].name;
        team2League.innerHTML = leagues[1].league;
        team2Coach.innerHTML = leagues[1].coach;
        team2Admin.innerHTML = leagues[1].adminAndPhone;
        team2Players.innerHTML = leagues[1].numPlayers;
        editIcon2.innerHTML = '<i class="fa fa-edit" aria-hidden="true"></i>' ;
        trashIcon2.innerHTML = '<i class = "fa fa-trash" aria-hidden="true"></i>';
        info2.innerHTML = "Information";
        team3Name.innerHTML = leagues[2].name;
        team3League.innerHTML = leagues[2].league;
        team3Coach.innerHTML = leagues[2].coach;
        team3Admin.innerHTML = leagues[2].adminAndPhone;
        team3Players.innerHTML = leagues[2].numPlayers;
        editIcon3.innerHTML = '<i class="fa fa-edit" aria-hidden="true"></i>' ;
        trashIcon3.innerHTML = '<i class = "fa fa-trash" aria-hidden="true"></i>';
        var defaultStoredLeagues = localStorage.setItem("leagueSort", JSON.stringify(leagues));
    }
    
});
    console.log(leagues);
    $("#search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(leagues).filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        })
    })

    // click function for dynamic row 1
    $(trashIcon1).click(function(){
        var confirmIt = confirm("Are you sure you want to delete team: " + team1Name.textContent + ", id: 1?");
        
        if(confirmIt == true)
        {
        
        $(team1Row).remove();
        }
           
        else {
            
          
           
        
         //
        }
     });
    // click function for dynamic row 2
    $(trashIcon2).click(function(){
         var confirmIt = confirm("Are you sure you want to delete team: " + team2Name.textContent + ", id: 1?");
         if(confirmIt == true)
         {
            $(team2Row).remove();
         }
         else{
             //
         }
      });

      // click function for dynamic row 3
      $(trashIcon3).click(function(){
        var confirmIt = confirm("Are you sure you want to delete team: " + team3Name.textContent + ", id: 1?");
        if(confirmIt == true)
        {
           $(team3Row).remove();
        }
        else{
            //
        }
     });
    

     // get names from css grid table for deletion
    var team1 = $(".team1Name").text();
    var team2 = $(".team2Name").text();
    var team3 = $(".team3Name").text();

    // delete row 1 on trash icon click
    $("#team1").click(function() {
        var confirmIt = confirm("Are you sure you want to delete team: " + team1 + ", 1243?");
        if(confirmIt == true) {
            // delete table
            $(".team1Name").remove();
            $(".team1Coach").remove();
            $(".team1League").remove();
            $(".team1Admin").remove();
            $(".team1Players").remove();
            $(".button1").remove();
           
        }
        else {
            // do nothing
        }
    });

    // delete row two on trash icon click
    $("#team2").click(function() {
        var confirmDelete = confirm("Are you sure you want to delete team: " + team2 + ", 2763?");
        if(confirmDelete == true) {
            $(".team2Name").remove();
            $(".team2Coach").remove();
            $(".team2League").remove();
            $(".team2Admin").remove();
            $(".team2Players").remove();
            $(".buttonTwo").remove();
        }
        else {
            // do nothing
        }
    });

    // delete row 3 on trash icon click
    $("#team3").click(function() {
        var deleteConfirm = confirm("Are you sure you want to delete team " + team3 + ", 8796?");
        if(deleteConfirm == true) {
            $(".team3Name").remove();
            $(".team3Coach").remove();
            $(".team3League").remove();
            $(".team3Admin").remove();
            $(".team3Players").remove();
            $(".buttonThree").remove();
        }
    });
    
    
});