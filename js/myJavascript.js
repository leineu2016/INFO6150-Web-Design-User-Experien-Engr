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

function showText1() {
    $('#img1').removeClass('hidden');
}
function showText2() {
    $('#img2').removeClass('hidden');
}
function showText3() {
    $('#img3').removeClass('hidden');
}

function hideText1() {
    $('#img1').addClass('hidden');
}
function hideText2() {
    $('#img2').addClass('hidden');
}
function hideText3() {
    $('#img3').addClass('hidden');
}

function openIternaryB() {
    window.location = "iternaryBeijing.html";
}
function openIternaryK() {
    window.location = "iternaryKashmir.html";
}
function openIternaryN() {
    window.location = "iternaryNewYork.html";
}

function checkScene(sceneID, sceneList)
{
    if (sceneList.indexOf(sceneID) != -1)
    {
        return true;
    }
    return false;
}

function stringToArray(sceneList)
{
    if(sceneList == null || sceneList == "")
    {
        return new Array();
    }
    return sceneList.split(",");
}

function arrayRemove(sceneID, sceneList)
{
    if(sceneList == null || sceneList == "")
    {
        return "";
    }

    for (var i = 0; i < sceneList.length; i++)
    {
        if(sceneList[i] == sceneID)
        {
            sceneList.splice(i, 1);
        }
    }
    return sceneList;
}

function changeSceneStatus(sceneID, city)
{
    var sceneList = localStorage.getItem("sceneList-"+ city);
    sceneList = stringToArray(sceneList);
    var scene = document.getElementById("scene"+sceneID);
    if(scene.innerHTML == "+")
    {
        if (sceneList == null || sceneList == "")
        {
            sceneList = new Array();
        }
        sceneList.push(sceneID);
        localStorage.setItem("sceneList-"+ city, sceneList);
        scene.innerHTML = "-";

    }
    else if(scene.innerHTML == "-")
    {
        cityList = arrayRemove(sceneID,sceneList);
        localStorage.setItem("sceneList-"+ city, sceneList);
        scene.innerHTML = "+";
    }
}

function sceneStatusLoad(city)
{
    var sceneList = localStorage.getItem("sceneList-"+ city);
    var scene1 = document.getElementById("scene1");
    var scene2 = document.getElementById("scene2");
    var scene3 = document.getElementById("scene3");
    var scene4 = document.getElementById("scene4");
    var scene5 = document.getElementById("scene5");
    var scene6 = document.getElementById("scene6");
    if (sceneList == null || sceneList == "")
    {
        scene1.innerHTML = "+";
        scene2.innerHTML = "+";
        scene3.innerHTML = "+";
        scene4.innerHTML = "+";
        scene5.innerHTML = "+";
        scene6.innerHTML = "+";
    }
    else
    {
        sceneList = stringToArray(sceneList);
        if (checkScene("1", sceneList))
        {
            scene1.innerHTML = "-";
        }
        else
        {
            scene1.innerHTML = "+";
        }
        if (checkScene("2", sceneList))
        {
            scene2.innerHTML = "-";
        }
        else
        {
            scene2.innerHTML = "+";
        }
        if (checkScene("3", sceneList))
        {
            scene3.innerHTML = "-";
        }
        else
        {
            scene3.innerHTML = "+";
        }
        if (checkScene("4", sceneList))
        {
            scene4.innerHTML = "-";
        }
        else
        {
            scene4.innerHTML = "+";
        }
        if (checkScene("5", sceneList))
        {
            scene5.innerHTML = "-";
        }
        else
        {
            scene5.innerHTML = "+";
        }
        if (checkScene("6", sceneList))
        {
            scene6.innerHTML = "-";
        }
        else
        {
            scene6.innerHTML = "+";
        }
    }

}

function openIternaryChinaB() {
    var beijing = localStorage.getItem('sceneList-Beijing');
    beijing = stringToArray(beijing);
    var locationListB = beijing.join('');
    var beijingLocations = [];
    for(var i=0; i<locationListB.length; i++) {
        if(locationListB[i] == 1) {
            beijingLocations[i] = 'Beijing National Stadium';
        }
        if(locationListB[i] == 2) {
            beijingLocations[i] = ' National Arts Center';
        }
        if(locationListB[i] == 3) {
            beijingLocations[i] = ' Temple of Heaven';
        }
        if(locationListB[i] == 4) {
            beijingLocations[i] = ' The Great Wal';
        }
        if(locationListB[i] == 5) {
            beijingLocations[i] = ' Beijing University';
        }
        if(locationListB[i] == 6) {
            beijingLocations[i] = ' National Central Library';
        }
    }
    localStorage.setItem('BeijingLocations', beijingLocations);
    window.location = "iternaryChina.html";
}

function openIternaryChinaG() {
    var guangzhou = localStorage.getItem('sceneList-Guangzhou');
    guangzhou = stringToArray(guangzhou);
    var locationListG = guangzhou.join('');
    var guangzhouLocations = [];
    for(var i=0; i<locationListG.length; i++) {
        if(locationListG[i] == 1) {
            guangzhouLocations[i] = 'Sacred Heart Cathedral';
        }
        if(locationListG[i] == 2) {
            guangzhouLocations[i] = 'Kiaping Diaolou Villages';
        }
        if(locationListG[i] == 3) {
            guangzhouLocations[i] = 'Guangzhou Water Park';
        }
        if(locationListG[i] == 4) {
            guangzhouLocations[i] = 'Yuexiu Park';
        }
        if(locationListG[i] == 5) {
            guangzhouLocations[i] = 'Beijing Road';
        }
        if(locationListG[i] == 6) {
            guangzhouLocations[i] = 'Guangzhou Tower';
        }
    }
    localStorage.setItem('GuangzhouLocations', guangzhouLocations);
    window.location = "iternaryChina.html";
}

function openIternaryChinaS() {
    var shanghai = localStorage.getItem('sceneList-Shanghai');
    shanghai = stringToArray(shanghai);
    var locationListS = shanghai.join('');
    var shanghaiLocations = [];
    for(var i=0; i<locationListS.length; i++) {
        if(locationListS[i] == 1) {
            shanghaiLocations[i] = 'Oriental Pearl Tower';
        }
        if(locationListS[i] == 2) {
            shanghaiLocations[i] = 'Pudong District';
        }
        if(locationListS[i] == 3) {
            shanghaiLocations[i] = 'Puxi District';
        }
        if(locationListS[i] == 4) {
            shanghaiLocations[i] = 'K11';
        }
        if(locationListS[i] == 5) {
            shanghaiLocations[i] = 'Tain Zi Fang';
        }
        if(locationListS[i] == 6) {
            shanghaiLocations[i] = 'Nanjing Road';
        }
    }
    localStorage.setItem('ShanghaiLocations', shanghaiLocations);
    window.location = "iternaryChina.html";
}

function openIternaryAmericaN() {
    var newyork = localStorage.getItem('sceneList-New York');
    newyork = stringToArray(newyork);
    var locationListN = newyork.join('');
    var newyorkLocations = [];
    for(var i=0; i<locationListN.length; i++) {
        if(locationListN[i] == 1) {
            newyorkLocations[i] = 'Chinatown';
        }
        if(locationListN[i] == 2) {
            newyorkLocations[i] = 'Brooklyn Bridge';
        }
        if(locationListN[i] == 3) {
            newyorkLocations[i] = 'Central Park';
        }
        if(locationListN[i] == 4) {
            newyorkLocations[i] = 'The Statue Of Liberty';
        }
        if(locationListN[i] == 5) {
            newyorkLocations[i] = 'One World Observatory';
        }
        if(locationListN[i] == 6) {
            newyorkLocations[i] = 'Brooklyn Mueseum';
        }
    }
    localStorage.setItem('NewyorkLocations', newyorkLocations);
    window.location = "iternaryAmerica.html";
}


function openIternaryAmericaB() {
    var boston = localStorage.getItem('sceneList-Boston');
    boston = stringToArray(boston);
    var locationListB = boston.join('');
    var bostonLocations = [];
    for(var i=0; i<locationListB.length; i++) {
        if(locationListB[i] == 1) {
            bostonLocations[i] = 'Tulip Manor';
        }
        if(locationListB[i] == 2) {
            bostonLocations[i] = 'Chinatown';
        }
        if(locationListB[i] == 3) {
            bostonLocations[i] = 'The Alley';
        }
        if(locationListB[i] == 4) {
            bostonLocations[i] = 'NEU';
        }
        if(locationListB[i] == 5) {
            bostonLocations[i] = 'Memorial Bridge';
        }
        if(locationListB[i] == 6) {
            bostonLocations[i] = 'Fenway Park';
        }
    }
    localStorage.setItem('BostonLocations', bostonLocations);
    window.location = "iternaryAmerica.html";
}

function openIternaryAmericaS() {
    var sanfrancisco = localStorage.getItem('sceneList-San Franscio');
    sanfrancisco = stringToArray(sanfrancisco);
    var locationListS = sanfrancisco.join('');
    var sanfranciscoLocations = [];
    for(var i=0; i<locationListS.length; i++) {
        if(locationListS[i] == 1) {
            sanfranciscoLocations[i] = 'Townhall';
        }
        if(locationListS[i] == 2) {
            sanfranciscoLocations[i] = 'Fishermans Wharf';
        }
        if(locationListS[i] == 3) {
            sanfranciscoLocations[i] = 'Golden Gate Bridge';
        }
        if(locationListS[i] == 4) {
            sanfranciscoLocations[i] = 'Lombard Street';
        }
        if(locationListS[i] == 5) {
            sanfranciscoLocations[i] = 'Japanese Tower';
        }
        if(locationListS[i] == 6) {
            sanfranciscoLocations[i] = 'Dolores Park';
        }
    }
    localStorage.setItem('SanfranciscoLocations', sanfranciscoLocations);
    window.location = "iternaryAmerica.html";
}



function openIternaryIndiaK() {
    var kashmir = localStorage.getItem('sceneList-Kashmir');
    kashmir = stringToArray(kashmir);
    var locationListK = kashmir.join('');
    var kashmirLocations = [];
    for(var i=0; i<locationListK.length; i++) {
        if(locationListK[i] == 1) {
            kashmirLocations[i] = 'Dal Lake';
        }
        if(locationListK[i] == 2) {
            kashmirLocations[i] = 'Gulmarg';
        }
            if(locationListK[i] == 3) {
                kashmirLocations[i] = 'Pahalgam';
            }
            if(locationListK[i] == 4) {
                kashmirLocations[i] = 'Chashme Shahi';
            }
            if(locationListK[i] == 5) {
                kashmirLocations[i] = 'Sonmarg';
            }
            if(locationListK[i] == 6) {
                kashmirLocations[i] = 'Tulip Garden';
            }
        }
        localStorage.setItem('KashmirLocations', kashmirLocations);
        window.location = "iternaryIndia.html";
    }


function openIternaryIndiaM() {
    var mumbai = localStorage.getItem('sceneList-Mumbai');
    mumbai = stringToArray(mumbai);
    var locationListM = mumbai.join('');
    var mumbaiLocations = [];
    for(var i=0; i<locationListM.length; i++) {
        if(locationListM[i] == 1) {
            mumbaiLocations[i] = 'Rambagh Palace';
        }
        if(locationListM[i] == 2) {
            mumbaiLocations[i] = 'Ittimadud Daulah Mausoleum';
        }
        if(locationListM[i] == 3) {
            mumbaiLocations[i] = 'Jama Masjid';
        }
        if(locationListM[i] == 4) {
            mumbaiLocations[i] = 'Agra Fort';
        }
        if(locationListM[i] == 5) {
            mumbaiLocations[i] = 'Taj Mahal';
        }
        if(locationListM[i] == 6) {
            mumbaiLocations[i] = 'Fatehpur Sikhri';
        }
    }
    localStorage.setItem('MumbaiLocations', mumbaiLocations);
    window.location = "iternaryIndia.html";
}


function openIternaryIndiaB() {
    var bangalore = localStorage.getItem('sceneList-Bangalore');
    bangalore = stringToArray(bangalore);
    var locationListB = bangalore.join('');
    var bangaloreLocations = [];
    for(var i=0; i<locationListB.length; i++) {
        if(locationListB[i] == 1) {
            bangaloreLocations[i] = 'Red Fort';
        }
        if(locationListB[i] == 2) {
            bangaloreLocations[i] = 'Lotus Temple';
        }
        if(locationListB[i] == 3) {
            bangaloreLocations[i] = 'Qutb Minar';
        }
        if(locationListB[i] == 4) {
            bangaloreLocations[i] = 'India Gate';
        }
        if(locationListB[i] == 5) {
            bangaloreLocations[i] = 'Rashtrapathi Bhavan';
        }
        if(locationListB[i] == 6) {
            bangaloreLocations[i] = 'Jama Masjid';
        }
    }
    localStorage.setItem('BangaloreLocations', bangaloreLocations);
    window.location = "iternaryIndia.html";
}