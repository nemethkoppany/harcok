const harcArray = [//A harcArray tömb létrehozása
    {
        war: "Rákóczi szabadságharc",//A tömb 1. elemének a war tulajdonságának értéke "Rákóczi szabadságharc"
        forces1: "Kuruc",//A tömb 1. elemének a forces1 tulajdonság értéke "Kuruc"
        military1:"70.000",//A tömb 1. elemének a military1 tulajdonság értéke "70.000"
        forces2:"Labanc",//A tömb 1. elemének a forces2 tulajdonság értéke "Labanc"
        military2:"60.000"//A tömb 1. elemének a military2 tulajdonságának értéke "60.000"
    },
    {
        war:"48-as szabadságharc",//A tömb 2. elemének a war tulajdonságának értéke "48-as szabadságharc"
        forces1: "Osztrák császárság (+Orosz Birodalom)",//A tömb 2. elemének a forces1 tulajdonság értéke "Osztrák császárság (+ Orosz Birodalom)"
        military1:"170.000( +200.000)",//A tömb 2. elemének a military1 tulajdonság értéke "170.000( +200.000)"
        forces2:"Magyar királyság",//A tömb 2. elemének a forces2 tulajdonság értéke "Magyar királyság"
        military2:"170.000"
    },
    {
        war:"I. világháború",//A tömb 3. elemének a war tulajdonságának értéke "I. világháború"
        forces1:"Antant",//A tömb 3. elemének a forces1 tulajdonság értéke "Antant"
        military1:"43 millió",//A tömb 3. elemének a military1 tulajdonság értéke "43 millió"
        forces2:"Központi hatalmak",//A tömb 3. elemének a forces2 tulajdonság értéke "Központi hatalmak"
        military2:"25 millió"//A tömb 3. elemének a military2 tulajdonságának értéke "25 millió"
    },
    {
        war:"Bosworthi csata",//A tömb 4. elemének a war tulajdonságának értéke "Bosworthi csata"
        forces1:"Angolok(York + Lancester)",//A tömb 4. elemének a forces1 tulajdonság értéke "Angolok(York + Lancester)"
        military1: "15.000",//A tömb 4. elemének a military1 tulajdonság értéke "15.000"
    }
]

const header= {//A fejléc objektuma ami nincs benne a tömbben
    war: "Harc megnevezése",//Az objektum war tulajdonságának értéke "Harc megnevezése"
    forces:"Szembenálló felek",//Az objektum forces tulajdonságának értéke "Szembenálló felek"
    military: "Haderő"//Az objektum military tulajdonságának értéke "Haderő"
}

const table = document.createElement("table");//Létrehozunk egy táblázatot
document.body.appendChild(table);//A táblázatot belerakjuk a body-ba

const colgroup = document.createElement("colgroup");//Létrehozunk egy colgroup elemet
table.appendChild(colgroup);//Amit belerakunk a table-be

const col1 = document.createElement("col");//Létrhozunk egy col elemet
col1.span = "1";//Ennek a "hatóköre" 1 oszlop
col1.style.backgroundColor = "lightcoral";//Adunk az oszlopnak egy háttérszínt
colgroup.appendChild(col1);//Hozzárakjuk colgrouphoz

const col2 = document.createElement("col");//Létrhozunk egy col elemet
col2.span = "1";//Ennek a "hatóköre" 1 oszlop
colgroup.appendChild(col2);//Hozzárakjuk colgrouphoz

const col3 = document.createElement("col");//Létrhozunk egy col elemet
col3.span = "1";//Ennek a "hatóköre" 1 oszlop
col3.style.backgroundColor ="lightcoral";//Adunk az oszlopnak egy háttérszínt
colgroup.appendChild(col3);//Hozzárakjuk colgrouphoz

const thead = document.createElement("thead");//Csinálunk egy thead elemet
table.appendChild(thead);//Hozzárakjuk a table-höz

const thead_tr = document.createElement("tr");//Készytünk egy sort a fejléchez
thead.appendChild(thead_tr);//Hozzárakjuk a thead-hez

const th_war = document.createElement("th");//Egy cella létrehozása
th_war.innerHTML = header.war;//Ebbe a cellába ez lesz írva
thead_tr.appendChild(th_war);//És ezt hozzáadjuk a sorhoz

const th_forces = document.createElement("th");//Egy cella létrehozása
th_forces.innerHTML= header.forces;//Ebbe a cellába ez lesz írva
thead_tr.appendChild(th_forces);//És ezt hozzáadjuk a sorhoz

const th_military = document.createElement("th");//Egy cella létrehozása
th_military.innerHTML = header.military;//Ebbe a cellába ez lesz írva
thead_tr.appendChild(th_military);//És ezt hozzáadjuk a sorhoz

const tbody = document.createElement("tbody");//Készítünk egy tábla törzset
table.appendChild(tbody);//Ezt hozzáadjuk a table-höz
function tableGenerate(){//Új funkció ami táblázatot generál
    for(const currentElement of harcArray ){//Végigmegyünk a harcArray tömbön
        const tbody_tr = document.createElement("tr");//Készítünk a törzsnek is egy sort
        tbody.appendChild(tbody_tr);//Ezt hozzáadjuk a tbody-hoz

        const war_name = document.createElement("td");//Cella készítése a törzsön belül
        war_name.innerHTML = currentElement.war;//Ez lesz a cellába írva
        tbody_tr.appendChild(war_name);//Hozzáadjuk a sorhoz

        const force_name1 = document.createElement("td");//Cella készítése a törzsön belül
        force_name1.innerHTML = currentElement.forces1;//Ez lesz a cellába írva
        tbody_tr.appendChild(force_name1);//Hozzáadjuk a sorhoz

        const military_power1 = document.createElement("td");//Cella készítése a törzsön belül
        military_power1.innerHTML = currentElement.military1;//Ez lesz a cellába írva
        tbody_tr.appendChild(military_power1);//Hozzáadjuk a sorhoz

        if(currentElement.forces2 && currentElement.military2 !== undefined){//Hogyha a második félhez és azok haderejéhez is van valami írva

            const second_row_tr = document.createElement("tr");//Akkor készítsen egy új sort
            tbody.appendChild(second_row_tr);//Amit rakjon bele a tbody-ba

            war_name.rowSpan = "2";//Vonja össze a megnevezett harcok alatti sorral a harcos sort 

            const force_name2 = document.createElement("td");//Hozzon létre cellákat
            force_name2.innerHTML = currentElement.forces2;//Amikbe ez lesz írva 
            second_row_tr.appendChild(force_name2);//És adja hozzá a sorhoz

            const military_power2 = document.createElement("td");//Hozzon létre cellákat
            military_power2.innerHTML = currentElement.military2;//Amikbe ez lesz írva 
            second_row_tr.appendChild(military_power2);//És adja hozzá a sorhoz
        }
    }
}
tableGenerate();//A függvény meghívása

