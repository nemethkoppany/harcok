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

        if(currentElement.forces2 !== undefined  && currentElement.military2 !== undefined){//Hogyha a második félhez és azok haderejéhez is van valami írva

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

const form = document.getElementById("form");//Bekérjük a form elemet az id-je alapján
form.addEventListener("submit",function(e){//Létrehozunk a formnak egy eseménykezelőt
    e.preventDefault();//Ez megakadályozza az űrlap alapértelmezett lefutását
   

    const war_name = document.getElementById("harc_nev");//Id alapján bekérjük az elemet
    const forces1 = document.getElementById("harcolo1");//Id alapján bekérjük az elemet
    const military1 = document.getElementById("hadero1");//Id alapján bekérjük az elemet
    const forces2 = document.getElementById("harcolo2");//Id alapján bekérjük az elemet
    const military2 = document.getElementById("hadero2");//Id alapján bekérjük az elemet

    const Form = e.currentTarget;//A Form változóban tároljuk el a futáshoz szükséges form-ot amiben vannak a fenti elemek(war_name, forces1, stb.)
    const errorElement = Form.querySelectorAll('.error')//Egy változóban eltároljuk azokat a Form változóban eltárolt elemeket amelynek van error class-uk
    for(const error of errorElement){//Végigmegyünk ezeken az elemeken
        error.innerHTML = "";//Ezeknek a celláknak a tartalmát kitöröljük
    }
    let valid = true;//Alapértelmezett értéke true

    function simpleValidation(input, errorMessage){//Egyszerű validációs függvény, paraméterekkel
        let valid = true;//Alapértelmezett értéke true, azért adjuk meg itt is, hogy ne legyen befojásolva a függvény kimenete egy másik függvény által ami esetleg megváltoztatja a valid értékét
        if(input.value.trim() === ""){//Hogyha az bemeneti mezőben (Aminek az üres mezőit levágtuk az oldaláról) nincs semmi
            const parentElement = input.parentElement;//Bekérjük a parentelementet(Ami ebben az esetben a field)
            const error = parentElement.querySelector(".error");//Megkeresi, hogy ebben a parentben van-e error class-al ellátott elem
            if(error != undefined){//Ha az az elem üres(Az lesz mert föntebb lenulláztuk)
                error.innerHTML = errorMessage;//Adjon neki error message-et
            }
            valid = false;//és legyen a valid értéje false
        }
        return valid;//Térjen vissza a valid-dal
    }
    
     if(!simpleValidation(war_name, "A csata megadása kötelező!")){//ha a simpleValidation nem igaz, tehát ha a bemeneti mező üres(Amit abból állapítunk meg, hogy a simpleValidation függvény visszatérési értéke true vagy false)
         valid = false;//Legyen a valid értéke false
     }
    if(!simpleValidation(forces1, "A  csatázó fél megadása kötelező!")){//ha a simpleValidation nem igaz, tehát ha a bemeneti mező üres
        valid = false;//Legyen a valid értéke false
    }
    if(!simpleValidation(military1, "A haderő megadása kötelező!")){//ha a simpleValidation nem igaz, tehát ha a bemeneti mező üres
        valid = false;//Legyen a valid értéke false
    }

    if(valid){//Ha a valid értéke true maradt(Amit abból állítunk meg, hogy a függvényhívások falseá véltoztatták e a valid értékét vagy sem)
    const war_name_value = war_name.value;//Ennek az elemnek megnézzük az értékét
    const forces1_value = forces1.value;//Ennek az elemnek megnézzük az értékét
    const military1_value = military1.value;//Ennek az elemnek megnézzük az értékét
    const forces2_value = forces2.value;//Ennek az elemnek megnézzük az értékét
    const military2_value = military2.value;//Ennek az elemnek megnézzük az értékét

    const Element = {//Készítünk egy új objektumot
        war: war_name_value,//A war tulajdonság értéke a megadott elem értéke
        forces1: forces1_value,//A forces1 tulajdonság értéke a megadott elem értéke
        military1: military1_value,//A military1 tulajdonság értéke a megadott elem értéke
        forces2: forces2_value,//A forces2 tulajdonság értéke a megadott elem értéke
        military2: military2_value//A military2 tulajdonság értéke a megadott elem értéke
    }
    harcArray.push(Element);//Hozzáadjuk a tömbhöz
    tbody.innerHTML ="";//Lenullázzuk a tábla elemeit
    Form.reset();//Amikor rányomtunk a Hozzáadás gombra és minden adat helyes és ki van töltve ez lenullázza az űrlapot
    tableGenerate();//Meghívjuk a függvényt
    }
})
