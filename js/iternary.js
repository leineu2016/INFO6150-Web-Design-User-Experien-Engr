function arrayRemove(sceneID, actDay, sceneList)
{
    if(sceneList == null || sceneList == "")
    {
        return "";
    }

    for (var i = 0; i < sceneList.length; i++)
    {
        if(sceneList[i] == sceneID+"-"+actDay)
        {
            sceneList.splice(i, 1);
        }
    }
    return sceneList;
}

function deleteLast(idValue) {
    updateSceneList(dayCount);
    document.getElementById('day'+idValue).remove();
    dayCount--;
    changeActiveDay(dayCount);
    console.log("After minus"+dayCount);
    localStorage.setItem('Days-'+sessionStorage.getItem("currcountry"),dayCount);
}

var dayCount = 1;
function addDay() {
    dayCount++;
    localStorage.setItem('Days-'+sessionStorage.getItem("currcountry"),dayCount);
    var parentDiv = document.createElement('table');
    parentDiv.id = "day" + dayCount;
    parentDiv.innerHTML = '<thead onclick="changeActiveDay('+dayCount+')"><tr><th>Day '+dayCount+'</th><th>Expense</th><th>Duration</th></tr></thead><tbody id="scenesday'+dayCount+'"></tbody><tfoot id="deleteFoot'+dayCount+'"><tr style="text-align: center;"><td/><td class="fa fa-minus fa-3x" onclick="deleteLast('+dayCount+')"></td><td/></tr></tfoot>';
    var addDayControlDiv = document.createElement('div');
    addDayControlDiv.className = ("flex-item-add");
    addDayControlDiv.id = "addDayControl";
    addDayControlDiv.innerHTML = '<div onclick="addDay()" class="fa fa-plus fa-5x plus"></div>';
    document.getElementById('addDayContainer').removeChild(addDayControl);
    document.getElementById('addDayContainer').appendChild(parentDiv);
    console.log(dayCount);

    document.getElementById('addDayContainer').appendChild(addDayControlDiv);
    changeActiveDay(dayCount);
}

function loadDays()
{
    var days = localStorage.getItem('Days-'+sessionStorage.getItem("currcountry"));
    for (var i = 0; i < days-1; i++) {
        addDay();
    }
    updateAddedScene();
}

function updateSceneList(dayCount)
{
    var nodeList = document.getElementById("scenesday"+dayCount).childNodes;

    for (var i = 0; i < nodeList.length; ) 
    {
        if (nodeList[i].nodeType == 1) 
        {
            removeFromDay(nodeList[i].id.substring(5));
        }
        else
        {
            i++;
        }
        
    }
}

function updateAddedScene()
{
    var addedScenes = localStorage.getItem('addedScenes-'+sessionStorage.getItem("currcountry"));
    if (addedScenes == null || addedScenes == "") 
    {
        return;
    }
    var days = localStorage.getItem('Days-'+sessionStorage.getItem("currcountry"));
    var sceneList = localStorage.getItem("addedScenes-"+sessionStorage.getItem("currcountry"));
    sceneList = stringToArray(sceneList);
    var arrayS = addedScenes.split(",");
    for (var i = 0; i < arrayS.length; i++) {
        if (arrayS[i].split("-")[1] > days) 
        {
            sceneList = arrayRemove(arrayS[i].split("-")[0], arrayS[i].split("-")[1], sceneList);
        }
    }
    localStorage.setItem("addedScenes-"+sessionStorage.getItem("currcountry"), sceneList);
}

function loadAddedScene()
{
    var addedScenes = localStorage.getItem('addedScenes-'+sessionStorage.getItem("currcountry"));
    if (addedScenes == null || addedScenes == "") 
    {
        return;
    }
    var arrayS = addedScenes.split(",");
    for (var i = 0; i < arrayS.length; i++) {
        loadScenesToDay(arrayS[i].split("-")[0],arrayS[i].split("-")[1]);
    }
}

function updateDeleteFoot(selectedDay)
{
    var scene = document.getElementById("scenesday"+selectedDay).firstElementChild;
    var deleteFoot = document.getElementById("deleteFoot"+selectedDay);
    if (scene != null) 
    {
        deleteFoot.style.display = "none";
    }
    else
    {
        deleteFoot.style.display = "";
    }
}

function changeActiveDay(selectedDay)
{   
    if (selectedDay > dayCount) 
    {
        return;
    }
    var days = document.getElementById("addDayContainer").childNodes;
    for (var i = 0; i < days.length-1; i++) 
    {
        if (days[i].nodeType == 1) 
        {
            if (days[i].id == "day"+selectedDay) 
            {
                sessionStorage.setItem('activeDay-'+sessionStorage.getItem("currcountry"),selectedDay);
                var child = days[i].firstElementChild;
                var tds = child.firstElementChild.firstElementChild;
                while(tds != null)
                {
                    tds.className = "";
                    tds = tds.nextElementSibling;
                }

                child = child.nextElementSibling;
                var deleteFoot = child.nextElementSibling;
                if (child.firstElementChild != null) 
                {
                    deleteFoot.style.display = "none";
                }
                else
                {
                    deleteFoot.style.display = "";
                }

            }
            else
            {
                var child = days[i].firstElementChild;
                var tds = child.firstElementChild.firstElementChild;
                while(tds != null)
                {
                    tds.className = "theadth";
                    tds = tds.nextElementSibling;
                }

                var deleteFoot = child.nextElementSibling.nextElementSibling;
                deleteFoot.style.display = "none";

            }
        }
    }
}

function removeFromDay(sceneId)
{
    var actDay = sessionStorage.getItem('activeDay-'+sessionStorage.getItem("currcountry"));
    if (actDay == null) 
    {
        actDay = 1;
    }

    var dayScene = document.getElementById("scenesday"+actDay).childNodes;
    for (var i = 0; i < dayScene.length; i++) {
        if(dayScene[i].nodeType == 1 && dayScene[i].id == "scene"+sceneId)
        {
            document.getElementById("scenesday"+actDay).removeChild(document.getElementById("scene"+sceneId));
            document.getElementById("addLocations"+sceneId).style.display = "";

            var sceneList = localStorage.getItem("addedScenes-"+sessionStorage.getItem("currcountry"));
            sceneList = stringToArray(sceneList);
            sceneList = arrayRemove(sceneId, actDay, sceneList);
            localStorage.setItem("addedScenes-"+sessionStorage.getItem("currcountry"), sceneList);
        }
    }
    updateDeleteFoot(actDay);
}

function addToDay(sceneId)
{
    var actDay = sessionStorage.getItem('activeDay-'+sessionStorage.getItem("currcountry"));
    if (actDay == null) 
    {
        actDay = 1;
    }

    var count = 0;
    var nodeList = document.getElementById("scenesday"+actDay).childNodes;
    for (var i = 0; i < nodeList.length; i++) {
        if(nodeList[i].nodeType == 1)
        {
            count++;
        }
    }

    if (count >= 4) 
    {
        return;
    }

    var scenedays = document.getElementById("scenesday"+actDay);
    var scene = document.getElementById("addLocations"+sceneId);
    var scenedesc = scene.innerHTML;
    var sceneadd = document.createElement('tr');
    sceneadd.id = "scene"+sceneId;
    sceneadd.onclick = "removeFromDay('"+sceneId+"')";

    var data = new Array();
    var dataPrepared = "<td onclick=\"removeFromDay('"+sceneId+"')\">"+scenedesc+"</td><td onclick=\"removeFromDay('"+sceneId+"')\">$10</td><td onclick=\"removeFromDay('"+sceneId+"')\">2h</td>";
    data.push(dataPrepared);
    sceneadd.innerHTML = data.join('');
    scenedays.appendChild(sceneadd);
    scene.style.display = "none";

    var sceneList = localStorage.getItem("addedScenes-"+sessionStorage.getItem("currcountry"));
    sceneList = stringToArray(sceneList);
    if (sceneList == null || sceneList == "")
    {
        sceneList = new Array();
    }
    sceneList.push(sceneId+"-"+actDay);
    localStorage.setItem("addedScenes-"+sessionStorage.getItem("currcountry"), sceneList);
    updateDeleteFoot(actDay);
}

function loadScenesToDay(sceneId,actDay)
{
    var scenedays = document.getElementById("scenesday"+actDay);
    var scene = document.getElementById("addLocations"+sceneId);
    var scenedesc = scene.innerHTML;
    var sceneadd = document.createElement('tr');
    sceneadd.id = "scene"+sceneId;
    sceneadd.onclick = "removeFromDay('"+sceneId+"')";

    var data = new Array();
    var dataPrepared = "<td onclick=\"removeFromDay('"+sceneId+"')\">"+scenedesc+"</td><td onclick=\"removeFromDay('"+sceneId+"')\">$10</td><td onclick=\"removeFromDay('"+sceneId+"')\">2h</td>";
    data.push(dataPrepared);
    sceneadd.innerHTML = data.join('');
    scenedays.appendChild(sceneadd);
    scene.style.display = "none";
    updateDeleteFoot(actDay);
}

function stringToArray(sceneList)
{
    if(sceneList == null || sceneList == "")
    {
        return new Array();
    }
    return sceneList.split(",");
}

function getChinaLocations() {
    sessionStorage.setItem("currcountry","CN");
    var cityNames = localStorage.getItem('cityList-CN');
    cityNames = stringToArray(cityNames);
    console.log(localStorage.getItem("Days"));

    for (var i = 0; i < cityNames.length; i++) {
        if(cityNames[i]!=null) {
            document.getElementById(cityNames[i]).className = "jumbotron";
        }
    }
    var beijingLocations = localStorage.getItem('BeijingLocations');

    if(beijingLocations != null && beijingLocations.length!=0) {
        beijingLocations = stringToArray(beijingLocations);
        for (var i = 0; i < beijingLocations.length; i++) {
            if (beijingLocations[i] != null) {
                var createDiv = document.createElement('div');
                createDiv.innerHTML = beijingLocations[i];
                document.getElementById('addLocationsBJ' + (i)).innerHTML = beijingLocations[i] + " ";
            }
        }
    }
    var guangzhouLocations = localStorage.getItem('GuangzhouLocations');
    if(guangzhouLocations != null && guangzhouLocations.length!=0) {
        guangzhouLocations = stringToArray(guangzhouLocations);
        for (var i = 0; i < guangzhouLocations.length; i++) {
            if (guangzhouLocations[i] != null) {
                document.getElementById('addLocationsG' + (i)).innerHTML = guangzhouLocations[i] + " ";
            }
        }
    }

    var shanghaiLocations = localStorage.getItem('ShanghaiLocations');
    shanghaiLocations = stringToArray(shanghaiLocations);
    for (var i = 0; i < shanghaiLocations.length; i++) {
        if (shanghaiLocations[i] != null) {
            document.getElementById('addLocationsSG' + (i)).innerHTML = shanghaiLocations[i] + " ";
        }
    }

    loadDays();
    loadAddedScene();
}

function getIndiaLocations() {
    sessionStorage.setItem("currcountry","IN");
    var cityNames = localStorage.getItem('cityList-IN');
    cityNames = stringToArray(cityNames);
   console.log("heere"+cityNames);

    for (var i = 0; i < cityNames.length; i++) {
        if(cityNames[i]!=null) {
            document.getElementById(cityNames[i]).className = "jumbotron";
        }
    }
    var kashmirLocations = localStorage.getItem('KashmirLocations');

    if(kashmirLocations != null && kashmirLocations.length!=0) {
        kashmirLocations = stringToArray(kashmirLocations);
        for (var i = 0; i < kashmirLocations.length; i++) {
            if (kashmirLocations[i] != null) {
                var createDiv = document.createElement('div');
                createDiv.innerHTML = kashmirLocations[i];
                document.getElementById('addLocationsK' + (i)).innerHTML = kashmirLocations[i] + " ";
            }
        }
    }
    var bangaloreLocations = localStorage.getItem('BangaloreLocations');
    if(bangaloreLocations != null && bangaloreLocations.length!=0) {
        bangaloreLocations = stringToArray(bangaloreLocations);
        for (var i = 0; i < bangaloreLocations.length; i++) {
            if (bangaloreLocations[i] != null) {
                document.getElementById('addLocationsB' + (i)).innerHTML = bangaloreLocations[i] + " ";
            }
        }
    }

    var mumbaiLocations = localStorage.getItem('MumbaiLocations');
    mumbaiLocations = stringToArray(mumbaiLocations);
    for (var i = 0; i < mumbaiLocations.length; i++) {
        if (mumbaiLocations[i] != null) {
            document.getElementById('addLocationsM' + (i)).innerHTML = mumbaiLocations[i] + " ";
        }
    }

    loadDays();
    loadAddedScene();
}

function getAmericaLocations() {
    sessionStorage.setItem("currcountry","US");
    var cityNames = localStorage.getItem('cityList-US');
    var cityNamesWithoutSpace = cityNames.replace(/\s/g,"");
    cityNamesWithoutSpace = stringToArray(cityNamesWithoutSpace);
    for (var i = 0; i < cityNamesWithoutSpace.length; i++) {
            document.getElementById(cityNamesWithoutSpace[i]).className = "jumbotron";
    }
    var newyorkLocations = localStorage.getItem('NewyorkLocations');
    newyorkLocations = stringToArray(newyorkLocations);
    for (var i = 0; i < newyorkLocations.length; i++) {
        if (newyorkLocations[i] != null) {
            document.getElementById('addLocationsN' + (i)).innerHTML = newyorkLocations[i] + " ";
        }
    }
    var bostonLocations = localStorage.getItem('BostonLocations');
    bostonLocations = stringToArray(bostonLocations);
    for (var i = 0; i < bostonLocations.length; i++) {
        if (bostonLocations[i] != null) {
            document.getElementById('addLocationsB' + (i)).innerHTML = bostonLocations[i] + " ";
        }
    }
    var sanfranciscoLocations = localStorage.getItem('SanfranciscoLocations');
    sanfranciscoLocations = stringToArray(sanfranciscoLocations);
    for (var i = 0; i < sanfranciscoLocations.length; i++) {
        if (sanfranciscoLocations[i] != null) {
            document.getElementById('addLocationsS' + (i)).innerHTML = sanfranciscoLocations[i] + " ";
        }
    }
    loadDays();
    loadAddedScene();
}

function openMapUSA()
{
    sessionStorage.setItem("searchCountry", "America");
    sessionStorage.setItem("countryAB", "US");
    window.location = "map.html";
}
function openMapIndia()
{
    sessionStorage.setItem("searchCountry", "India");
    sessionStorage.setItem("countryAB", "IN");
    window.location = "map.html";
}
function openMapChina()
{
    sessionStorage.setItem("searchCountry", "China");
    sessionStorage.setItem("countryAB", "CN");
    window.location = "map.html";
}
