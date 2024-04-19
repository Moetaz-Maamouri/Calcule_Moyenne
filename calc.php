<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moyenne</title>
    <link rel="stylesheet" href="styles.css">
    <style>
body{
    color:white;
}
.maillogout{
    width: 100%;
    display: flex;
    gap:75%;
    background-color:rgb(48, 85, 196);
    padding: 5px;
    color: white;
    font-size: 20px;
}
.maillogout a{
    text-decoration: none;
    color: white;
    margin-left: 40px;
    
}
.sem{
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
    margin-right: 30px;
}
.mmail{
    margin-left: 20px;
}
footer{
    gap:85%;
    height:40px
}
#tem{
    margin-right: -30px;
}
.input{
    width: 100px;
}
section{
    background-color: rgb(32, 36, 85);
    width: 100%;
}
    </style>
</head>
<body>
<div class="maillogout">

<span class="mmail"> 

<?php
if(isset($_SESSION['email']) )
							{
								echo $_SESSION['email'];
								unset($_SESSION['email']);
							}
?>
</span>
<a href="welcome.html">Log out</a>
</div>

    <header>
        <label id="title" for="choix">ISAMM CALC</label>
        <p class="sem"> Semestre:</p>
        <select id="choix" onchange="option()">
            <option value="s1">Semestre1</option>
            <option value="s2">Semestre2</option>
            <option value="s3">Semestre3</option>
            <option value="s4">Semestre4</option>
            <option value="s5">Semestre5</option>
        </select>
        <span style="display:none;" id="choixoption">
        <label id="title2" for="option">Option: </label>
        <select id="option">
            <option value="gaming">Gaming</option>
            <option value="fond">fondemental</option>
        </select></span>
        <button onclick="display()" id="tem">Calculate</button>

    </header>
    <section style="display: none;"  id="s1">
        <div id="ModuleM1" class="module">
            <div id="Analyse" class="matiere">
                <p class="nomMatiere">Analyse</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsanlys1" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexanlys1" min="0" max="20">
                </div>
            </div>
            <div id="Algebre" class="matiere">
                <p class="nomMatiere">Algebre</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsalgeb1" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexalgeb1" min="0" max="20">
                </div>
            </div>
            <p id="MMM1" class="MoyenneModule">Moyenne Module: </p>
        </div>
        <div id="ModuleProg1" class="module">
            <div id="Algo1" class="matiere">
                <p class="nomMatiere">Algorithmique</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsalgo1" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="notexalgo1" min="0" max="20">
                </div>
            </div>
            <div id="C1" class="matiere">
                <p class="nomMatiere">Atelier programmation 1</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsC1" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexC1" min="0" max="20">
                </div>
            </div>
            <p id="MMProg1" class="MoyenneModule">Moyenne Module: </p>
        </div>
        <div id="ModuleSyst1" class="module">
            <div id="SystEx1" class="matiere">
                <p class="nomMatiere">Système d'exploitation 1</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsSE1" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexSE1" min="0" max="20">
                </div>
            </div>
            <div id="Systlog" class="matiere">
                <p class="nomMatiere">Systèmes logiques</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsSL" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexSL" min="0" max="20"> 
                </div>
            </div>
            <p id="MMSyst1" class="MoyenneModule">Moyenne Module: </p>
        </div>
        <div id="ModuleLGetM" class="module">
            <div id="LG" class="matiere">
                <p class="nomMatiere">Logique formelle</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsLG" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexLG" min="0" max="20">
                </div>
            </div>
            <div id="TMM" class="matiere">
                <p class="nomMatiere">Technologies Multimèdias</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsTMM" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexTMM" min="0" max="20">
                </div>
            </div>
            <p id="MMLGetM" class="MoyenneModule">Moyenne Module: </p>
        </div>
        
        <div id="ModuleCC1" class="module">
            <div id="Anglais1" class="matiere">
                <p class="nomMatiere">Anglais 1</p>
                <div class="note">
                    <p>Orale</p>
                    <input type="number" class="input" id="noteCCEng1" min="0" max="20">
                    <p>DS 1</p>
                    <input type="number" class="input" id="noteds1Eng1" min="0" max="20">
                    <p>DS 2</p>
                    <input type="number" class="input" id="noteds2Eng1" min="0" max="20">
                </div>
            </div>
            <div id="TC1" class="matiere">
                <p class="nomMatiere">Technique de communication 1</p>
                <div class="note">
                    <p>Orale</p>
                    <input type="number" class="input" id="noteCCTC1" min="0" max="20">
                    <p>DS 1</p>
                    <input type="number" class="input" id="noteds1TC1" min="0" max="20">
                    <p>DS 2</p>
                    <input type="number" class="input" id="noteds2TC1" min="0" max="20">
                </div>
            </div>
            <p id="MMCC1" class="MoyenneModule">Moyenne Module: </p>
        </div>
    </section>
    <section style="display: none;"  id="s2">
        <div id="ModuleM2" class="module">
            <div id="Analyse2" class="matiere">
                <p class="nomMatiere">Analyse 2</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsanlys2" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexanlys2" min="0" max="20">
                </div>
            </div>
            <div id="Algebre2" class="matiere">
                <p class="nomMatiere">Algebre 2</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsalgeb2" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexalgeb2" min="0" max="20">
                </div>
            </div>
            <p id="MMM2" class="MoyenneModule">Moyenne Module: </p>
        </div>
        <div id="ModuleProg2" class="module">
            <div id="Algo2" class="matiere">
                <p class="nomMatiere">Algorithmique 2</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsalgo2" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="notexalgo2" min="0" max="20">
                </div>
            </div>
            <div id="C2" class="matiere">
                <p class="nomMatiere">Atelier programmation 2</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsC2" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexC2" min="0" max="20">
                </div>
            </div>
            <div id="PY" class="matiere">
                <p class="nomMatiere">Programmation Python</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedspy" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexpy" min="0" max="20">
                </div>
            </div>
            <p id="MMProg2" class="MoyenneModule">Moyenne Module: </p>
        </div>
        <div id="ModuleSyst2" class="module">
            <div id="SystEx2" class="matiere">
                <p class="nomMatiere">Système d'exploitation 2</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsSE2" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexSE2" min="0" max="20">
                </div>
            </div>
            <div id="Systres" class="matiere">
                <p class="nomMatiere">fondement de reseau</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsfr" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexfr" min="0" max="20"> 
                </div>
            </div>
            <p id="MMSyst2" class="MoyenneModule">Moyenne Module: </p>
        </div>
        <div id="Modulebd" class="module">
            <div id="fbd" class="matiere">
                <p class="nomMatiere">fondement de base de donnés</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsfbd" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexfbd" min="0" max="20">
                </div>
            </div>
            <p id="MMfbd" class="MoyenneModule">Moyenne Module: </p>
        </div>
        
        <div id="ModuleCC2" class="module">
            <div id="Anglais2" class="matiere">
                <p class="nomMatiere">Anglais 2</p>
                <div class="note">
                    <p>Orale</p>
                    <input type="number" class="input" id="noteCCEng2" min="0" max="20">
                    <p>DS 1</p>
                    <input type="number" class="input" id="noteds1Eng2" min="0" max="20">
                    <p>DS 2</p>
                    <input type="number" class="input" id="noteds2Eng2" min="0" max="20">
                </div>
            </div>
            <div id="TC2" class="matiere">
                <p class="nomMatiere">Technique de communication 2</p>
                <div class="note">
                    <p>Orale</p>
                    <input type="number" class="input" id="noteCCTC2" min="0" max="20">
                    <p>DS 1</p>
                    <input type="number" class="input" id="noteds1TC2" min="0" max="20">
                    <p>DS 2</p>
                    <input type="number" class="input" id="noteds2TC2" min="0" max="20">
                </div>
            </div>
            <div id="C2N" class="matiere">
                <p class="nomMatiere">culture competence numerique</p>
                <div class="note">
                    <p>Orale</p>
                    <input type="number" class="input" id="noteCCc2n" min="0" max="20">
                    <p>DS 1</p>
                    <input type="number" class="input" id="noteds1c2n" min="0" max="20">
                    <p>DS 2</p>
                    <input type="number" class="input" id="noteds2c2n" min="0" max="20">
                </div>
            </div>
            <p id="MMCC2" class="MoyenneModule">Moyenne Module: </p>
        </div>
    </section>  
    <section style="display: none;" id="s3">
        <div id="ModuleP" class="module">
            <div id="Proba" class="matiere">
                <p class="nomMatiere">Proba</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsproba" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexproba" min="0" max="20">
                </div>
            </div>
            <p id="MMP" class="MoyenneModule">Moyenne Module: </p>
        </div>
        <div id="ModuleGT" class="module">
            <div id="Graphe" class="matiere">
                <p class="nomMatiere">Graphe</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsGO" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="notexGO" min="0" max="20">
                </div>
            </div>
            <div id="TLA" class="matiere">
                <p class="nomMatiere">TLA</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsTLA" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexTLA" min="0" max="20">
                </div>
            </div>
            <p id="MMGT" class="MoyenneModule">Moyenne Module: </p>
        </div>
        <div id="ModuleBR" class="module">
            <div id="BD" class="matiere">
                <p class="nomMatiere">BD</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsBD" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexBD" min="0" max="20">
                </div>
            </div>
            <div id="Réseau" class="matiere">
                <p class="nomMatiere">Réseau</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsreseau" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexreseau" min="0" max="20"> 
                </div>
            </div>
            <p id="MMBR" class="MoyenneModule">Moyenne Module: </p>
        </div>
        <div id="ModuleJS" class="module">
            <div id="Java" class="matiere">
                <p class="nomMatiere">Java</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsJava" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexJava" min="0" max="20">
                </div>
            </div>
            <div id="Conception" class="matiere">
                <p class="nomMatiere">Conception</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsSI" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexSI" min="0" max="20">
                </div>
            </div>
            <p id="MMJS" class="MoyenneModule">Moyenne Module: </p>
        </div>
        <div id="ModuleOption" class="module">
            <div id="MathMM" class="matiere">
                <p class="nomMatiere">Math</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsMath" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexMath" min="0" max="20">
                </div>
            </div>
            <div id="Physique" class="matiere">
                <p class="nomMatiere">Physique</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsPhy" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexPhy" min="0" max="20"> 
                </div>
            </div>
            <p id="MMOption" class="MoyenneModule">Moyenne Module: </p>
        </div>
        <div id="ModuleOption1" class="module">
            <div id="MathTI" class="matiere">
                <p class="nomMatiere">Théorie de l'information</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsTH" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexTH" min="0" max="20">
                </div>
            </div>
            <div id="RM" class="matiere">
                <p class="nomMatiere">Réseaux Multimèdia</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsRM" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexRM" min="0" max="20"> 
                </div>
            </div>
            <p id="MMOption1" class="MoyenneModule">Moyenne Module: </p>
        </div>
        <div id="ModuleCC" class="module">
            <div id="Anglais" class="matiere">
                <p class="nomMatiere">Anglais</p>
                <div class="note">
                    <p>Orale</p>
                    <input type="number" class="input" id="noteorEng" min="0" max="20">
                    <p>DS 1</p>
                    <input type="number" class="input" id="notedsEng1" min="0" max="20">
                    <p>DS 2</p>
                    <input type="number" class="input" id="notedsEng2" min="0" max="20">
                </div>
            </div>
            <div id="GE" class="matiere">
                <p class="nomMatiere">Gestion</p>
                <div class="note">
                    <p>Orale</p>
                    <input type="number" class="input" id="noteorGE" min="0" max="20">
                    <p>DS 1</p>
                    <input type="number" class="input" id="notedsGE1" min="0" max="20">
                    <p>DS 2</p>
                    <input type="number" class="input" id="notedsGE2" min="0" max="20">
                </div>
            </div>
            <p id="MMCC" class="MoyenneModule">Moyenne Module: </p>
        </div>
    </section>
    <section style="display: none;"  id="s4">
        <div id="ModuleIMG" class="module">
            <div id="NCOM" class="matiere">
                <p class="nomMatiere">NCOM</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsncom" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexncom" min="0" max="20">
                </div>
            </div>
            <div id="Trait" class="matiere">
                <p class="nomMatiere">Traitement image</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedstrait" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteextrait" min="0" max="20">
                </div>
            </div>
            <div id="INFO" class="matiere">
                <p class="nomMatiere">Infographie</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsinfo" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexinfo" min="0" max="20">
                </div>
            </div>
            <p id="MMIMG" class="MoyenneModule">Moyenne Module: </p>
        </div>
        <div id="Moduledev1" class="module">
            <div id="web1" class="matiere">
                <p class="nomMatiere">Technologies web</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsweb1" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="notexweb1" min="0" max="20">
                </div>
            </div>
            <div id="mobile" class="matiere">
                <p class="nomMatiere">dev Mobile</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsmobile" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexmobile" min="0" max="20">
                </div>
            </div>
            <p id="MMdev1" class="MoyenneModule">Moyenne Module: </p>
        </div>
        <div id="ModuleIA" class="module">
            <div id="SystEx2" class="matiere">
                <p class="nomMatiere">fondement de IA</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsia" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexia" min="0" max="20">
                </div>
            </div>
            <div id="TEST" class="matiere">
                <p class="nomMatiere">Test logociel</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedstest" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteextest" min="0" max="20"> 
                </div>
            </div>
            <p id="MMIA" class="MoyenneModule">Moyenne Module: </p>
        </div>
        <div id="ModuleOptionG2" class="module">
            <div id="an2d" class="matiere">
                <p class="nomMatiere">Animation 2D</p>
                <div class="note">
                    <p>Orale</p>
                    <input type="number" class="input" id="noteCCan2d" min="0" max="20">
                    <p>DS 1</p>
                    <input type="number" class="input" id="noteds1an2d" min="0" max="20">
                    <p>DS 2</p>
                    <input type="number" class="input" id="noteds2an2d" min="0" max="20">
                </div>
            </div>
            <div id="an3d" class="matiere">
                <p class="nomMatiere">Animation 3D</p>
                <div class="note">
                    <p>Orale</p>
                    <input type="number" class="input" id="noteCCan3d" min="0" max="20">
                    <p>DS 1</p>
                    <input type="number" class="input" id="noteds1an3d" min="0" max="20">
                    <p>DS 2</p>
                    <input type="number" class="input" id="noteds2an3d" min="0" max="20">
                </div>
            </div>
            <p id="MMAN" class="MoyenneModule">Moyenne Module: </p>
        </div>
        <div id="ModuleOptionF2" class="module">
            <div id="AnalNum" class="matiere">
                <p class="nomMatiere">Analyse numérique</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsanalnum" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexanalnum" min="0" max="20">
                </div>
            </div>
            <div id="CLP" class="matiere">
                <p class="nomMatiere">Circuit logiques programmable</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsclp" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexclp" min="0" max="20"> 
                </div>
            </div>
            <p id="MMOPF2" class="MoyenneModule">Moyenne Module: </p>
        </div>
        
        <div id="ModuleCC4" class="module">
            <div id="Anglais4" class="matiere">
                <p class="nomMatiere">Anglais 4</p>
                <div class="note">
                    <p>Orale</p>
                    <input type="number" class="input" id="noteCCEng4" min="0" max="20">
                    <p>DS 1</p>
                    <input type="number" class="input" id="noteds1Eng4" min="0" max="20">
                    <p>DS 2</p>
                    <input type="number" class="input" id="noteds2Eng4" min="0" max="20">
                </div>
            </div>
            <div id="droitin" class="matiere">
                <p class="nomMatiere">Droit de l'informatique</p>
                <div class="note">
                    <p>Orale</p>
                    <input type="number" class="input" id="noteCCdr" min="0" max="20">
                    <p>DS 1</p>
                    <input type="number" class="input" id="noteds1dr" min="0" max="20">
                    <p>DS 2</p>
                    <input type="number" class="input" id="noteds2dr" min="0" max="20">
                </div>
            </div>
            <div id="projet" class="matiere">
                <p class="nomMatiere">Projet federe</p>
                <div class="note">
                    <p>Orale</p>
                    <input type="number" class="input" id="noteCCprojet" min="0" max="20">
                    <p>DS 1</p>
                    <input type="number" class="input" id="noteds1projet" min="0" max="20">
                    <p>DS 2</p>
                    <input type="number" class="input" id="noteds2projet" min="0" max="20">
                </div>
            </div>
            <p id="MMCC4" class="MoyenneModule">Moyenne Module: </p>
        </div>
    </section> 
    <section style="display: none;"  id="s5">
        <div id="ModuleFRAME" class="module">
            <div id="Frame" class="matiere">
                <p class="nomMatiere">Framework et BigData</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsframe" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexframe" min="0" max="20">
                </div>
            </div>
            <div id="VIRT" class="matiere">
                <p class="nomMatiere">virtulisation et cloud</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsvirt" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexvirt" min="0" max="20">
                </div>
            </div>
            <p id="MMFrame" class="MoyenneModule">Moyenne Module: </p>
        </div>
        <div id="ModuleSOA" class="module">
            <div id="SOA" class="matiere">
                <p class="nomMatiere">SOA et Service web</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedssoa" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="notexsoa" min="0" max="20">
                </div>
            </div>
            <div id="tecind" class="matiere">
                <p class="nomMatiere">Technique d'indexation</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedstecind" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteextecind" min="0" max="20">
                </div>
            </div>
            <p id="MMSOA" class="MoyenneModule">Moyenne Module: </p>
        </div>
        <div id="ModuleRealite" class="module">
            <div id="realite" class="matiere">
                <p class="nomMatiere">Realite virtuelle et augmente</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsreal" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexreal" min="0" max="20">
                </div>
            </div>
            <div id="maillage" class="matiere">
                <p class="nomMatiere">Maillage 2D/3D</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsmaillage" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexmaillage" min="0" max="20"> 
                </div>
            </div>
            <p id="MMrealite" class="MoyenneModule">Moyenne Module: </p>
        </div>
        <div id="Moduledev2" class="module">
            <div id="web2" class="matiere">
                <p class="nomMatiere">Dev d'app web</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsweb2" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexweb2" min="0" max="20">
                </div>
            </div>
            <p id="MMdev2" class="MoyenneModule">Moyenne Module: </p>
        </div>
        <div id="ModuleOptionG3" class="module">
            <div id="an2dav" class="matiere">
                <p class="nomMatiere">Animation 2D avance</p>
                <div class="note">
                    <p>Orale</p>
                    <input type="number" class="input" id="noteCCan2dav" min="0" max="20">
                    <p>DS 1</p>
                    <input type="number" class="input" id="noteds1an2dav" min="0" max="20">
                    <p>DS 2</p>
                    <input type="number" class="input" id="noteds2an2dav" min="0" max="20">
                </div>
            </div>
            <div id="an3dav" class="matiere">
                <p class="nomMatiere">Animation 3D avance</p>
                <div class="note">
                    <p>Orale</p>
                    <input type="number" class="input" id="noteCCan3dav" min="0" max="20">
                    <p>DS 1</p>
                    <input type="number" class="input" id="noteds1an3dav" min="0" max="20">
                    <p>DS 2</p>
                    <input type="number" class="input" id="noteds2an3dav" min="0" max="20">
                </div>
            </div>
            <p id="MMANAV" class="MoyenneModule">Moyenne Module: </p>
        </div>
        <div id="ModuleOptionF3" class="module">
            <div id="UXD" class="matiere">
                <p class="nomMatiere">UX Design</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedsuxd" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexuxd" min="0" max="20">
                </div>
            </div>
            <div id="SECURITE" class="matiere">
                <p class="nomMatiere">Sécurité informatique</p>
                <div class="note">
                    <p>DS</p>
                    <input type="number" class="input" id="notedssecurite" min="0" max="20">
                    <p>Examen</p>
                    <input type="number" class="input" id="noteexsecurite" min="0" max="20"> 
                </div>
            </div>
        
            <p id="MMOPF3" class="MoyenneModule">Moyenne Module: </p>
        </div>
        <div id="ModuleCC5" class="module">
            <div id="Anglais5" class="matiere">
                <p class="nomMatiere">Anglais 5</p>
                <div class="note">
                    <p>Orale</p>
                    <input type="number" class="input" id="noteCCEng5" min="0" max="20">
                    <p>DS 1</p>
                    <input type="number" class="input" id="noteds1Eng5" min="0" max="20">
                    <p>DS 2</p>
                    <input type="number" class="input" id="noteds2Eng5" min="0" max="20">
                </div>
            </div>
            <div id="ENtRE" class="matiere">
                <p class="nomMatiere">entreprenariat</p>
                <div class="note">
                    <p>Orale</p>
                    <input type="number" class="input" id="noteCCentre" min="0" max="20">
                    <p>DS 1</p>
                    <input type="number" class="input" id="noteds1entre" min="0" max="20">
                    <p>DS 2</p>
                    <input type="number" class="input" id="noteds2entre" min="0" max="20">
                </div>
            </div>
            <div id="pef" class="matiere">
                <p class="nomMatiere">preparation a l'environnement professionnel</p>
                <div class="note">
                    <p>Orale</p>
                    <input type="number" class="input" id="noteCCpef" min="0" max="20">
                    <p>DS 1</p>
                    <input type="number" class="input" id="noteds1pef" min="0" max="20">
                    <p>DS 2</p>
                    <input type="number" class="input" id="noteds2pef" min="0" max="20">
                </div>
            </div>
            <p id="MMCC5" class="MoyenneModule">Moyenne Module: </p>
        </div>
    </section> 
    <section id="resultat">
        <div class="resultat">
            <p id="moyenne">Average:</p>
        </div>
        <button class="calculer" onclick="Clear()">Clear</button>
        <button class="calculer" onclick="calculer()">Submit</button>
    </section>
     <footer>
        <p>© 2023 - 2024</p>
        <p><a id="sphynx" href="https://github.com/Sphynx6">kooding04</a></p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
