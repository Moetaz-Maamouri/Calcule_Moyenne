






//notesS3
var DSProba = document.getElementById('notedsproba');
var EXProba = document.getElementById('noteexproba');
var DSGO = document.getElementById('notedsGO');
var EXGO = document.getElementById('notexGO');
var DSTLA = document.getElementById('notedsTLA');
var EXTLA = document.getElementById('noteexTLA');
var DSBD = document.getElementById('notedsBD');
var EXBD = document.getElementById('noteexBD');
var DSreseau = document.getElementById('notedsreseau');
var EXreseau = document.getElementById('noteexreseau');
var DSJava = document.getElementById('notedsJava');
var EXJava = document.getElementById('noteexJava');
var DSSI = document.getElementById('notedsSI');
var EXSI = document.getElementById('noteexSI');
var DSMath = document.getElementById('notedsMath');
var EXMath = document.getElementById('noteexMath');
var DSPhy = document.getElementById('notedsPhy');
var EXPhy = document.getElementById('noteexPhy');
var OrEng = document.getElementById('noteorEng');
var DSEng1 = document.getElementById('notedsEng1');
var DSEng2 = document.getElementById('notedsEng2');
var OrGE = document.getElementById('noteorGE');
var DSGE1 = document.getElementById('notedsGE1');
var DSGE2 = document.getElementById('notedsGE2');

//Resultat
var module1 = document.getElementById('MMP');
var module2 = document.getElementById('MMGT');
var module3 = document.getElementById('MMBR');
var module4 = document.getElementById('MMJS');
var module5 = document.getElementById('MMOption');
var module6 = document.getElementById('MMCC');

var moyenne = document.getElementById('moyenne');

//Coefficients
    //Coefficients des matieres
var coeffProba = 2;
var coeffGO = 1;
var coeffTLA = 1;
var coeffBD = 1.5;
var coeffreseau = 1;
var coeffJava = 2;
var coeffSI = 1.5;
var coeffMath = 1.5;
var coeffPhy = 1.5;
var coeffEng = 1;
var coeffGE = 1;
    //Coefficients des modules
var coeffMod1 = coeffProba;
var coeffMod2 = coeffGO + coeffTLA;
var coeffMod3 = coeffBD + coeffreseau;
var coeffMod4 = coeffJava + coeffSI;
var coeffMod5 = coeffMath + coeffPhy;
var coeffMod6 = coeffEng + coeffGE;
var coeffTotal = coeffMod1 + coeffMod2 + coeffMod3 + coeffMod4 + coeffMod5 + coeffMod6
    //Coefficients des notes
var coeffDS = 0.3;
var coeffEX = 0.7;
var coeffOr = 0.2;
var coeffDs1 = 0.4;
var coeffDs2 = 0.4;




//fonctions
function VerifValeur(x, y){
    if(x>20 || x<0 || x==""){
        alert("Note de " + y + " entre 0 et 20");
        return false;
    }
}

function calculerM(matiere1, matiere2, coef1, coef2){
    return  ((matiere1*coef1) + (matiere2*coef2 ))/ (coef1+coef2);
}
function Clear(){
    var inputs = document.getElementsByTagName('input');
    for (input of inputs){
        input.value = '';
    }
   /* module1.innerHTML = "Moyenne Module: "
    module2.innerHTML = "Moyenne Module: "
    module3.innerHTML = "Moyenne Module: "
    module4.innerHTML = "Moyenne Module: "
    module5.innerHTML = "Moyenne Module: "
    module6.innerHTML = "Moyenne Module: "

    moyenne.innerHTML = "Moyenne: ";
    credit.innerHTML = "Credit: ";*/
}



function CalculeMoyenne(ds , ex){
    return (ds * 0.3 + ex * 0.7)
}

function CalculeMoyenneCC(orale, ds1, ds2){
    return (orale * 0.2 + ds1 * 0.4 + ds2 * 0.4)
}


//main
function calculer(){
    var moy=document.getElementsByClassName('MoyenneModule');
    var moyGenaral=document.getElementById('moyenne');
    moyGenaral.innerHTML="Moyenne: ";
    for (moyoy of moy){
        moyoy.innerHTML="Moyenne Module: ";
    }
    var l=document.getElementById("choix").value;
    var ch=document.getElementById('option').value;


    //noteS1
var DSANAL1 = document.getElementById('notedsanlys1');
var EXANAL1 = document.getElementById('noteexanlys1');
var DSALGEB1 = document.getElementById('notedsalgeb1');
var EXALGEB1 = document.getElementById('noteexalgeb1');
var DSAlgo1 = document.getElementById('notedsalgo1');
var EXAlgo1 = document.getElementById('notexalgo1');
var DSC1 = document.getElementById('notedsC1');
var EXC1 = document.getElementById('noteexC1');
var DSSE1 = document.getElementById('notedsSE1');
var EXSE1 = document.getElementById('noteexSE1');
var DSSL = document.getElementById('notedsSL');
var EXSL = document.getElementById('noteexSL');
var DSLF = document.getElementById('notedsLG');
var EXLF = document.getElementById('noteexLG');
var DSTMM = document.getElementById('notedsTMM');
var EXTMM = document.getElementById('noteexTMM');
var CCANG1 = document.getElementById('noteCCEng1');
var DS1ANG1 = document.getElementById('noteds1Eng1');
var DS2ANG1 = document.getElementById('noteds2Eng1');
var CCTC1 = document.getElementById('noteCCTC1');
var DS1TC1 = document.getElementById('noteds1TC1');
var DS2TC1 = document.getElementById('noteds2TC1');


//Moyennes
var MoyANAL1 =CalculeMoyenne(DSANAL1.value, EXANAL1.value);
var MoyALGEB1 =CalculeMoyenne(DSALGEB1.value, EXALGEB1.value);
var MoyAlgo1 =CalculeMoyenne(DSAlgo1.value, EXAlgo1.value);
var MoyC1 = CalculeMoyenne(DSC1.value, EXC1.value);
var MoySE1 = CalculeMoyenne(DSSE1.value, EXSE1.value);
var MoySL = CalculeMoyenne(DSSL.value, EXSL.value);
var MoyLF = CalculeMoyenne(DSLF.value, EXLF.value);
var MoyTMM = CalculeMoyenne(DSTMM.value, EXTMM.value);
var MoyANG1 = CalculeMoyenneCC(CCANG1.value, DS1ANG1.value, DS2ANG1.value);
var MoyTC1 = CalculeMoyenneCC(CCTC1.value, DS1TC1.value, DS2TC1.value);

//ResultatS1
var module1s1 = document.getElementById('MMM1');
var module2s1 = document.getElementById('MMProg1');
var module3s1 = document.getElementById('MMSyst1');
var module4s1 = document.getElementById('MMLGetM');
var module5s1 = document.getElementById('MMCC1');


//notes2
var DSANAL2 = document.getElementById('notedsanlys2');
var EXANAL2 = document.getElementById('noteexanlys2');
var DSALGEB2 = document.getElementById('notedsalgeb2');
var EXALGEB2 = document.getElementById('noteexalgeb2');
var DSAlgo2 = document.getElementById('notedsalgo2');
var EXAlgo2 = document.getElementById('notexalgo2');
var DSC2 = document.getElementById('notedsC2');
var EXC2 = document.getElementById('noteexC2');
var DSPY = document.getElementById('notedspy');
var EXPY = document.getElementById('noteexpy');
var DSSE2 = document.getElementById('notedsSE2');
var EXSE2 = document.getElementById('noteexSE2');
var DSFR = document.getElementById('notedsfr');
var EXFR = document.getElementById('noteexfr');
var DSFBD = document.getElementById('notedsfbd');
var EXFBD = document.getElementById('noteexfbd');
var CCANG2 = document.getElementById('noteCCEng2');
var DS1ANG2 = document.getElementById('noteds1Eng2');
var DS2ANG2 = document.getElementById('noteds2Eng2');
var CCTC2 = document.getElementById('noteCCTC2');
var DS1TC2 = document.getElementById('noteds1TC2');
var DS2TC2 = document.getElementById('noteds2TC2');
var CCC2N = document.getElementById('noteCCc2n');
var DS1C2N = document.getElementById('noteds1c2n');
var DS2C2N = document.getElementById('noteds2c2n');

//Moyenness2
var MoyANAL2 =CalculeMoyenne(DSANAL2.value, EXANAL2.value);
var MoyALGEB2 =CalculeMoyenne(DSALGEB2.value, EXALGEB2.value);
var MoyAlgo2 =CalculeMoyenne(DSAlgo2.value, EXAlgo2.value);
var MoyC2 = CalculeMoyenne(DSC2.value, EXC2.value);
var MoyPY = CalculeMoyenne(DSPY.value, EXPY.value);
var MoySE2= CalculeMoyenne(DSSE2.value, EXSE2.value);
var MoyFR = CalculeMoyenne(DSFR.value, EXFR.value);
var MoyFBD = CalculeMoyenne(DSFBD.value, EXFBD.value);
var MoyANG2 = CalculeMoyenneCC(CCANG2.value, DS1ANG2.value, DS2ANG2.value);
var MoyTC2 = CalculeMoyenneCC(CCTC2.value, DS1TC2.value, DS2TC2.value);
var MoyC2N = CalculeMoyenneCC(CCC2N.value, DS1C2N.value, DS2C2N.value);

//ResultatS2
var module1s2 = document.getElementById('MMM2');
var module2s2 = document.getElementById('MMProg2');
var module3s2 = document.getElementById('MMSyst2');
var module4s2 = document.getElementById('MMfbd');
var module5s2 = document.getElementById('MMCC2');

//notesS4
var DSNCOM=document.getElementById('notedsncom');
var EXNCOM=document.getElementById('noteexncom');
var DSTRAIT=document.getElementById('notedstrait');
var EXTRAIT=document.getElementById('noteextrait');
var DSINFO=document.getElementById('notedsinfo');
var EXINFO=document.getElementById('noteexinfo');
var DSWEB1=document.getElementById('notedsweb1');
var EXWEB1=document.getElementById('notexweb1');
var DSMOBILE=document.getElementById('notedsmobile');
var EXMOBILE=document.getElementById('noteexmobile');
var DSIA=document.getElementById('notedsia');
var EXIA=document.getElementById('noteexia');
var DSTEST=document.getElementById('notedstest');
var EXTEST=document.getElementById('noteextest');
var CCANG4=document.getElementById('noteCCEng4');
var DS1ANG4=document.getElementById('noteds1Eng4');
var DS2ANG4=document.getElementById('noteds2Eng4');
var CCDR=document.getElementById('noteCCdr');
var DS1DR=document.getElementById('noteds1dr');
var DS2DR=document.getElementById('noteds2dr');
var CCPROJET=document.getElementById('noteCCprojet');
var DS1PROJET=document.getElementById('noteds1projet');
var DS2PROJET=document.getElementById('noteds2projet');


//MoyennesS4
var MoyNCOM=CalculeMoyenne(DSNCOM.value, EXNCOM.value);
var MoyTRAIT=CalculeMoyenne(DSTRAIT.value, EXTRAIT.value);
var MoyINFO=CalculeMoyenne(DSINFO.value, EXINFO.value);
var MoyWEB1=CalculeMoyenne(DSWEB1.value, EXWEB1.value);
var MoyMOBILE=CalculeMoyenne(DSMOBILE.value, EXMOBILE.value);
var MoyIA=CalculeMoyenne(DSIA.value, EXIA.value);
var MoyTEST=CalculeMoyenne(DSTEST.value, EXTEST.value);
var MoyANG4=CalculeMoyenneCC(CCANG4.value, DS1ANG4.value, DS2ANG4.value);
var MoyDR=CalculeMoyenneCC(CCDR.value, DS1DR.value, DS2DR.value);
var MoyPROJET=CalculeMoyenneCC(CCPROJET.value, DS1PROJET.value, DS2PROJET.value);


//ResultatS4
var module1s4=document.getElementById('MMIMG');
var module2s4=document.getElementById('MMdev1');
var module3s4=document.getElementById('MMIA');
var module4s4=document.getElementById('MMCC4');

//noteS5
var DSFRAME=document.getElementById('notedsframe');
var EXFRAME=document.getElementById('noteexframe');
var DSVIRT=document.getElementById('notedsvirt');
var EXVIRT=document.getElementById('noteexvirt');
var DSSOA=document.getElementById('notedssoa');
var EXSOA=document.getElementById('notexsoa');
var DSTECIND=document.getElementById('notedstecind');
var EXTECIND=document.getElementById('noteextecind');
var DSREAL=document.getElementById('notedsreal');
var EXREAL=document.getElementById('noteexreal');
var DSMAILLAGE=document.getElementById('notedsmaillage');
var EXMAILLAGE=document.getElementById('noteexmaillage');
var DSDWEB2=document.getElementById('notedsweb2');
var EXDWEB2=document.getElementById('noteexweb2');
var CCANG5=document.getElementById('noteCCEng5');
var DS1ANG5=document.getElementById('noteds1Eng5');
var DS2ANG5=document.getElementById('noteds2Eng5');
var CCENTRE=document.getElementById('noteCCentre');
var DS1ENTRE=document.getElementById('noteds1entre');
var DS2ENTRE=document.getElementById('noteds2entre');
var CCPEF=document.getElementById('noteCCpef');
var DS1PEF=document.getElementById('noteds1pef');
var DS2PEF=document.getElementById('noteds2pef');

//MoyennesS5
var MoyFRAME=CalculeMoyenne(DSFRAME.value, EXFRAME.value);
var MoyVIRT=CalculeMoyenne(DSVIRT.value, EXVIRT.value);
var MoySOA=CalculeMoyenne(DSSOA.value, EXSOA.value);
var MoyTECIND=CalculeMoyenne(DSTECIND.value, EXTECIND.value);
var MoyREAL=CalculeMoyenne(DSREAL.value, EXREAL.value);
var MoyMAILLAGE=CalculeMoyenne(DSMAILLAGE.value, EXMAILLAGE.value);
var MoyDWEB2=CalculeMoyenne(DSDWEB2.value, EXDWEB2.value);
var MoyANG5=CalculeMoyenneCC(CCANG5.value, DS1ANG5.value, DS2ANG5.value);
var MoyENTPROG=CalculeMoyenneCC(CCENTRE.value, DS1ENTRE.value, DS2ENTRE.value);
var MoyPEF=CalculeMoyenneCC(CCPEF.value, DS1PEF.value, DS2PEF.value);

//ResultatS5
var module1s5=document.getElementById('MMFrame');
var module2s5=document.getElementById('MMSOA');
var module3s5=document.getElementById('MMrealite');
var module4s5=document.getElementById('MMdev2');
var module5s5=document.getElementById('MMCC5');




    if(l=="s1"){
        if(VerifValeur(DSANAL1.value, "DS  Analyse 1")==false){return false;}
        if(VerifValeur(EXANAL1.value, "EXAMEN Analyse 1")==false){return false;}
        if(VerifValeur(DSALGEB1.value, "DS  Algebre 1")==false){return false;}
        if(VerifValeur(EXALGEB1.value, "EXAMEN Algebre 1")==false){return false;}
        if(VerifValeur(DSAlgo1.value, "DS  Algo")==false){return false;}
        if(VerifValeur(EXAlgo1.value, "EXAMEN Algo")==false){return false;}
        if(VerifValeur(DSC1.value, "DS  C")==false){return false;}
        if(VerifValeur(EXC1.value, "EXAMEN C")==false){return false;}
        if(VerifValeur(DSSE1.value, "DS  System d'exploitation 1")==false){return false;}
        if(VerifValeur(EXSE1.value, "EXAMEN System d'exploitation 1")==false){return false;}
        if(VerifValeur(DSSL.value, "DS System logique")==false){return false;}
        if(VerifValeur(EXSL.value, "EXAMEN System logique")==false){return false;}
        if(VerifValeur(DSLF.value, "DS  logique formelle")==false){return false;}
        if(VerifValeur(EXLF.value, "EXAMEN logique formelle")==false){return false;}
        if(VerifValeur(DSTMM.value, "DS  TMM")==false){return false;}
        if(VerifValeur(EXTMM.value, "EXAMEN TMM")==false){return false;}
        if(VerifValeur(CCANG1.value, "CC Anglais")==false){return false;}
        if(VerifValeur(DS1ANG1.value, "DS1 Anglais")==false){return false;}
        if(VerifValeur(DS2ANG1.value, "DS2  Anglais")==false){return false;}
        if(VerifValeur(CCTC1.value, "CC Techniques de communication")==false){return false;}
        if(VerifValeur(DS1TC1.value, "DS1 Techniques de communication")==false){return false;}
        if(VerifValeur(DS2TC1.value, "DS2 Techniques de communication")==false){return false;}
        moyGenaral.innerHTML = "Moyenne: ";
        var m1s1=(((MoyANAL1*1.5+ MoyALGEB1*1.5)/3)).toFixed(2);
        var m2s1=(((MoyAlgo1*2+ MoyC1*1.5)/3.5)).toFixed(2);
        var m3s1=(((MoySE1*1.5+ MoySL*2)/3.5)).toFixed(2);
        var m4s1=(((MoyLF*1.5+ MoyTMM*1.5)/3)).toFixed(2);
        var m5s1=(((MoyANG1*1+ MoyTC1*1)/2)).toFixed(2);
        module1s1.innerHTML+= m1s1;
        module2s1.innerHTML+= m2s1;
        module3s1.innerHTML+= m3s1;
        module4s1.innerHTML+= m4s1;
        module5s1.innerHTML+= m5s1;
        moyGenaral.innerHTML+= (((m1s1*3)+(m2s1*3.5)+(m3s1*3.5)+(m4s1*3)+(m5s1*2))/15).toFixed(2);

} 


else if(l=="s2"){
    if(VerifValeur(DSANAL2.value, "DS  Analyse 2")==false){return false;}
    if(VerifValeur(EXANAL2.value, "EXAMEN Analyse 2")==false){return false;}
    if(VerifValeur(DSALGEB2.value, "DS  Algebre 2")==false){return false;}
    if(VerifValeur(EXALGEB2.value, "EXAMEN Algebre 2")==false){return false;}
    if(VerifValeur(DSAlgo2.value, "DS  Algo")==false){return false;}
    if(VerifValeur(EXAlgo2.value, "EXAMEN Algo")==false){return false;}
    if(VerifValeur(DSPY.value, "DS  Python")==false){return false;}
    if(VerifValeur(EXPY.value, "EXAMEN Python")==false){return false;}
    if(VerifValeur(DSC2.value, "DS  C")==false){return false;}
    if(VerifValeur(EXC2.value, "EXAMEN C")==false){return false;}
    if(VerifValeur(DSSE2.value, "DS  System d'exploitation 2")==false){return false;}
        if(VerifValeur(EXSE2.value, "EXAMEN System d'exploitation 2")==false){return false;}
        if(VerifValeur(DSFR.value, "DS System logique")==false){return false;}
        if(VerifValeur(EXFR.value, "EXAMEN System logique")==false){return false;}
    if(VerifValeur(DSFBD.value, "DS  Base de donnes")==false){return false;}
    if(VerifValeur(EXFBD.value, "EXAMEN Base de donnes")==false){return false;}
    if(VerifValeur(CCANG2.value, "CC Anglais")==false){return false;}
        if(VerifValeur(DS1ANG2.value, "DS1 Anglais")==false){return false;}
        if(VerifValeur(DS2ANG2.value, "DS2  Anglais")==false){return false;}
        if(VerifValeur(CCTC2.value, "CC Techniques de communication")==false){return false;}
        if(VerifValeur(DS1TC2.value, "DS1 Techniques de communication")==false){return false;}
        if(VerifValeur(DS2TC2.value, "DS2 Techniques de communication")==false){return false;}
        if(VerifValeur(CCC2N.value, "CC C2N")==false){return false;}
        if(VerifValeur(DS1C2N.value, "DS1 C2N")==false){return false;}
        if(VerifValeur(DS2C2N.value, "DS2 C2N")==false){return false;}
    moyGenaral.innerHTML = "Moyenne: ";
    var m1s2=(((MoyANAL2*1.5+ MoyALGEB2*1.5)/3)).toFixed(2);
    var m2s2=(((MoyAlgo2*1.5+MoyPY*1+ MoyC2*1)/3.5)).toFixed(2);
    var m3s2=(((MoySE2*1.5+ MoyFR*2)/3.5)).toFixed(2);
    var m4s2=(MoyFBD).toFixed(2);
    var m5s2=(((MoyANG2*1+ MoyTC2*1+ MoyC2N*1)/3)).toFixed(2);

    module1s2.innerHTML+= m1s2;
    module2s2.innerHTML+= m2s2;
    module3s2.innerHTML+= m3s2;
    module4s2.innerHTML+= m4s2;
    module5s2.innerHTML+= m5s2;
    moyGenaral.innerHTML+= (((m1s2*3)+(m2s2*3.5)+(m3s2*3.5)+(m4s2*2)+(m5s2*3))/15).toFixed(2);


} 

    else if(l=="s3" && ch=="gaming"){
    //verification des notes saisi
    if(VerifValeur(DSProba.value, "DS  Proba")==false){return false;};
    if(VerifValeur(EXProba.value, "Examen Proba")==false){return false;};
    if(VerifValeur(DSGO.value, "DS Graphe")==false){return false;}
    if(VerifValeur(EXGO.value, "Examen Graphe")==false){return false;}
    if(VerifValeur(DSTLA.value, "DS TLA")==false){return false;}
    if(VerifValeur(EXTLA.value, "Examen TLA")==false){return false;}
    if(VerifValeur(DSBD.value, "DS BD")==false){return false;}
    if(VerifValeur(EXBD.value, " Examen BD")==false){return false;}
    if(VerifValeur(DSreseau.value, "DS Reseau")==false){return false;}
    if(VerifValeur(EXreseau.value, "Examen Reseau")==false){return false;}
    if(VerifValeur(DSJava.value, "DS Java")==false){return false;}
    if(VerifValeur(EXJava.value, "Examen Java")==false){return false;}
    if(VerifValeur(DSSI.value, "DS SI")==false){return false;}
    if(VerifValeur(EXSI.value, "Examen SI")==false){return false;}
    if(VerifValeur(DSMath.value, "DS Math")==false){return false;}
    if(VerifValeur(EXMath.value, "Examen Math")==false){return false;}
    if(VerifValeur(DSPhy.value, "DS Phy")==false){return false;}
    if(VerifValeur(EXPhy.value, "Examen Phy")==false){return false;}
    if(VerifValeur(OrEng.value, "CC Anglais")==false){return false;}
    if(VerifValeur(DSEng1.value, "DS1 Anglais")==false){return false;}
    if(VerifValeur(DSEng2.value, "DS2Anglais")==false){return false;}
    if(VerifValeur(OrGE.value, "CC Gestion")==false){return false;}
    if(VerifValeur(DSGE1.value, "DS1 Gestion")==false){return false;}
    if(VerifValeur(DSGE2.value, "DS2 Gestion")==false){return false;}

    //Calcul des moyennes
    var proba = CalculeMoyenne(DSProba.value, EXProba.value)
    var go = CalculeMoyenne(DSGO.value, EXGO.value)
    var tla = CalculeMoyenne(DSTLA.value, EXTLA.value)
    var bd = CalculeMoyenne(DSBD.value, EXBD.value)
    var reseau = CalculeMoyenne(DSreseau.value, EXreseau.value)
    var java = CalculeMoyenne(DSJava.value, EXJava.value)
    var si = CalculeMoyenne(DSSI.value, EXSI.value)
    var math = CalculeMoyenne(DSMath.value, EXMath.value)
    var phy = CalculeMoyenne(DSPhy.value, EXPhy.value)
    var eng = CalculeMoyenneCC(OrEng.value, DSEng1.value, DSEng2.value)
    var ge = CalculeMoyenneCC(OrGE.value, DSGE1.value, DSGE2.value)

    //calcul des modules
    var m1 = calculerM(proba, 0, coeffProba, 0);
    var m2 = calculerM(go, tla, coeffGO, coeffTLA);
    var m3 = calculerM(bd, reseau, coeffBD, coeffreseau);
    var m4 = calculerM(java, si, coeffJava, coeffSI);
    var m5 = calculerM(math, phy, coeffMath, coeffPhy);
    var m6 = calculerM(eng, ge, coeffEng, coeffGE);

    
    
    //affichage
    
    module1.innerHTML += m1.toFixed(2)
    module2.innerHTML += m2.toFixed(2)
    module3.innerHTML += m3.toFixed(2)
    module4.innerHTML += m4.toFixed(2)
    module5.innerHTML += m5.toFixed(2)
    module6.innerHTML += m6.toFixed(2)
    moyenne.innerHTML += (((m1*coeffMod1) + (m2*coeffMod2) + (m3*coeffMod3) + (m4*coeffMod4) + (m5*coeffMod5) + (m6*coeffMod6))/ coeffTotal).toFixed(2)


    }
    else if(l=="s3" && ch=="fond"){
    var DSTH=document.getElementById("notedsTH");
    var EXTH=document.getElementById("noteexTH");
    var DSRM=document.getElementById('notedsRM');
    var EXRM=document.getElementById("noteexRM");
    var MoyTH=CalculeMoyenne(DSTH.value,EXTH.value);
    var MoyRM=CalculeMoyenne(DSRM.value,EXRM.value);
        //verification des notes saisi
    if(VerifValeur(DSProba.value, "DS  Proba")==false){return false;}
    if(VerifValeur(EXProba.value, "Examen Proba")==false){return false;}
    if(VerifValeur(DSGO.value, "DS Graphe")==false){return false;}
    if(VerifValeur(EXGO.value, "Examen Graphe")==false){return false;}
    if(VerifValeur(DSTLA.value, "DS TLA")==false){return false;}
    if(VerifValeur(EXTLA.value, "Examen TLA")==false){return false;}
    if(VerifValeur(DSBD.value, "DS BD")==false){return false;}
    if(VerifValeur(EXBD.value, " Examen BD")==false){return false;}
    if(VerifValeur(DSreseau.value, "DS Reseau")==false){return false;}
    if(VerifValeur(EXreseau.value, "Examen Reseau")==false){return false;}
    if(VerifValeur(DSJava.value, "DS Java")==false){return false;}
    if(VerifValeur(EXJava.value, "Examen Java")==false){return false;}
    if(VerifValeur(DSSI.value, "DS SI")==false){return false;}
    if(VerifValeur(EXSI.value, "Examen SI")==false){return false;}
    if(VerifValeur(DSTH.value, "DS  Théorie de l'information")==false){return false;}
    if(VerifValeur(EXTH.value, "Examen Théorie de l'information")==false){return false;}
    if(VerifValeur(DSRM.value, "DS  Réseaux Multimédia")==false){return false;}
    if(VerifValeur(EXRM.value, "Examen Réseaux Multimédia")==false){return false;}
    if(VerifValeur(OrEng.value, "CC Anglais")==false){return false;}
    if(VerifValeur(DSEng1.value, "DS1 Anglais")==false){return false;}
    if(VerifValeur(DSEng2.value, "DS2Anglais")==false){return false;}
    if(VerifValeur(OrGE.value, "CC Gestion")==false){return false;}
    if(VerifValeur(DSGE1.value, "DS1 Gestion")==false){return false;}
    if(VerifValeur(DSGE2.value, "DS2 Gestion")==false){return false;}

    //Calcul des moyennes
    var proba = CalculeMoyenne(DSProba.value, EXProba.value)
    var go = CalculeMoyenne(DSGO.value, EXGO.value)
    var tla = CalculeMoyenne(DSTLA.value, EXTLA.value)
    var bd = CalculeMoyenne(DSBD.value, EXBD.value)
    var reseau = CalculeMoyenne(DSreseau.value, EXreseau.value)
    var java = CalculeMoyenne(DSJava.value, EXJava.value)
    var si = CalculeMoyenne(DSSI.value, EXSI.value)
    var eng = CalculeMoyenneCC(OrEng.value, DSEng1.value, DSEng2.value)
    var ge = CalculeMoyenneCC(OrGE.value, DSGE1.value, DSGE2.value)

    //calcul des modules
    var m1 = calculerM(proba, 0, coeffProba, 0);
    var m2 = calculerM(go, tla, coeffGO, coeffTLA);
    var m3 = calculerM(bd, reseau, coeffBD, coeffreseau);
    var m4 = calculerM(java, si, coeffJava, coeffSI);
    var m5 = calculerM(MoyTH, MoyRM, coeffMath, coeffPhy);
    var m6 = calculerM(eng, ge, coeffEng, coeffGE);

    
    
    //affichage
    var module7=document.getElementById("MMOption1");
    module1.innerHTML += m1.toFixed(2)
    module2.innerHTML += m2.toFixed(2)
    module3.innerHTML += m3.toFixed(2)
    module4.innerHTML += m4.toFixed(2)
    module7.innerHTML += m5.toFixed(2)
    module6.innerHTML += m6.toFixed(2)
    moyenne.innerHTML += (((m1*coeffMod1) + (m2*coeffMod2) + (m3*coeffMod3) + (m4*coeffMod4) + (m5*coeffMod5) + (m6*coeffMod6))/ coeffTotal).toFixed(2)
    }

    else if(l=="s4"){
    if(VerifValeur(DSNCOM.value, "DS  NCOM")==false){return false;}
    if(VerifValeur(EXNCOM.value, "EXAMEN NCOM")==false){return false;}
    if(VerifValeur(DSTRAIT.value, "DS  Traitement")==false){return false;}
    if(VerifValeur(EXTRAIT.value, "EXAMEN Traitement")==false){return false;}
    if(VerifValeur(DSINFO.value, "DS  Infographie")==false){return false;}
    if(VerifValeur(EXINFO.value, "EXAMEN Infographie")==false){return false;}
    if(VerifValeur(DSWEB1.value, "DS  dev web")==false){return false;}
    if(VerifValeur(EXWEB1.value, "EXAMEN dev web")==false){return false;}
    if(VerifValeur(DSMOBILE.value, "DS  dev mobile")==false){return false;}
    if(VerifValeur(EXMOBILE.value, "EXAMEN dev mobile")==false){return false;}
    if(VerifValeur(DSIA.value, "DS  IA")==false){return false;}
    if(VerifValeur(EXIA.value, "EXAMEN IA")==false){return false;}
    if(VerifValeur(DSTEST.value, "DS  Test logiciel")==false){return false;}
    if(VerifValeur(EXTEST.value, "EXAMEN Test logiciel")==false){return false;}
    if(VerifValeur(CCANG4.value, "CC Anglais")==false){return false;}
    if(VerifValeur(DS1ANG4.value, "DS1 Anglais")==false){return false;}
    if(VerifValeur(DS2ANG4.value, "DS2  Anglais")==false){return false;}
    if(VerifValeur(CCDR.value, "CC Droit d'informatique")==false){return false;}
    if(VerifValeur(DS1DR.value, "DS1  Droit d'informatique")==false){return false;}
    if(VerifValeur(DS2DR.value, "DS2 Droit d'informatique")==false){return false;}
    if(VerifValeur(CCPROJET.value, "CC Projet federe")==false){return false;}
    if(VerifValeur(DS1PROJET.value, "DS1 Projet federe")==false){return false;}
    if(VerifValeur(DS2PROJET.value, "DS2  Projet federe")==false){return false;}
        var m1s4=(((MoyNCOM*1+ MoyTRAIT*1.5+MoyINFO)/3.5)).toFixed(2);
        var m2s4=(((MoyWEB1*1.5+ MoyMOBILE*1.5)/3)).toFixed(2);
        var m3s4=(((MoyIA*1.5+ MoyTEST*1)/2.5)).toFixed(2);
        var m4s4=(((MoyANG4*1+ MoyDR*1+MoyPROJET*1)/3)).toFixed(2);
        module1s4.innerHTML="Moyenne Module: "+ m1s4;
        module2s4.innerHTML="Moyenne Module: "+  m2s4;
        module3s4.innerHTML="Moyenne Module: "+  m3s4;
        module4s4.innerHTML="Moyenne Module: "+  m4s4;
        var X_S4=0;
        if(ch=="fond"){
            var DSANALNUM=document.getElementById('notedsanalnum');
            var EXANALNUM=document.getElementById('noteexanalnum');
            var DSCLP=document.getElementById('notedsclp');
            var EXCLP=document.getElementById('noteexclp');
            if(VerifValeur(DSANALNUM.value, "DS  Analyse numerique")==false){return false;}
            if(VerifValeur(EXANALNUM.value, "EXAMEn Analyse numerique")==false){return false;}
            if(VerifValeur(DSCLP.value, "DS  CLP")==false){return false;}
            if(VerifValeur(EXCLP.value, "EXAMEN CLP")==false){return false;}
            var MoyANALNUM=CalculeMoyenne(DSANALNUM.value, EXANALNUM.value);
            var MoyCLP=CalculeMoyenne(DSCLP.value, EXCLP.value);
            var module5s4=document.getElementById('MMOPF2');
            X_S4=(((MoyANALNUM*1.5+ MoyCLP*1.5)/3)).toFixed(2);
           
            module5s4.innerHTML='Moyenne Module: '+ X_S4;
        }
        else{
            var CCANG3D=document.getElementById('noteCCan3d');
            var DS1ANG3D=document.getElementById('noteds1an3d');
            var DS2ANG3D=document.getElementById('noteds2an3d');
            var CCANG2D=document.getElementById('noteCCan2d');
            var DS1ANG2D=document.getElementById('noteds1an2d');
            var DS2ANG2D=document.getElementById('noteds2an2d');
            if(VerifValeur(CCANG3D.value, "CC Animation 3D")==false){return false;}
            if(VerifValeur(DS1ANG3D.value, "DS1 Animation 3D")==false){return false;}
            if(VerifValeur(DS2ANG3D.value, "DS2  Animation 3D")==false){return false;}
            if(VerifValeur(CCANG2D.value, "CC Animation 2D")==false){return false;}
            if(VerifValeur(DS1ANG2D.value, "DS1 Animation 2D")==false){return false;}
            if(VerifValeur(DS2ANG2D.value, "DS2  Animation 2D")==false){return false;}
            var MoyANG2D=CalculeMoyenneCC(CCANG2D.value, DS1ANG2D.value, DS2ANG2D.value);
            var MoyANG3D=CalculeMoyenneCC(CCANG3D.value, DS1ANG3D.value, DS2ANG3D.value);
            var module6s4=document.getElementById('MMAN');
            X_S4=((( MoyANG3D*1.5+MoyANG2D*1.5)/3)).toFixed(2);
            module6s4.innerHTML='Moyenne Module: '+ X_S4;
        }
        var tesseee=(((m1s4*3.5)+(m2s4*3)+(m3s4*2.5)+(m4s4*3)+(X_S4*3))/15).toFixed(2);
        document.getElementById('moyenne').innerHTML+=tesseee;
    }


else if(l="s5"){
   
    moyGenaral.innerHTML = "Moyenne: ";
    if(VerifValeur(DSFRAME.value, "DS  Framework")==false){return false;}
    if(VerifValeur(EXFRAME.value, "EXAMEN Framework")==false){return false;}
    if(VerifValeur(DSVIRT.value, "DS  virtulisation")==false){return false;}
    if(VerifValeur(EXVIRT.value, "EXAMEN virtulisation")==false){return false;}
    if(VerifValeur(DSSOA.value, "DS  SOA")==false){return false;}
    if(VerifValeur(EXSOA.value, "EXAMEN SOA")==false){return false;}
    if(VerifValeur(DSTECIND.value, "DS  Technique d'indexation")==false){return false;}
    if(VerifValeur(EXTECIND.value, "EXAMEN Technique d'indexation")==false){return false;}
    if(VerifValeur(DSREAL.value, "DS  realite")==false){return false;}
    if(VerifValeur(EXREAL.value, "EXAMEN realite")==false){return false;}
    if(VerifValeur(DSMAILLAGE.value, "DS  Maillage")==false){return false;}
    if(VerifValeur(EXMAILLAGE.value, "EXAMEN Maillage")==false){return false;}
    if(VerifValeur(DSDWEB2.value, "DS  dev web")==false){return false;}
    if(VerifValeur(EXDWEB2.value, "EXAMEN dev web")==false){return false;}
    if(VerifValeur(CCANG5.value, "CC Anglais")==false){return false;}
    if(VerifValeur(DS1ANG5.value, "DS1 Anglais")==false){return false;}
    if(VerifValeur(DS2ANG5.value, "DS2  Anglais")==false){return false;}
    if(VerifValeur(CCENTRE.value, "CC entreprenariat")==false){return false;}
    if(VerifValeur(DS1ENTRE.value, "DS1 entreprenariat")==false){return false;}
    if(VerifValeur(DS2ENTRE.value, "DS2  entreprenariat")==false){return false;}
    if(VerifValeur(CCPEF.value, "CC preparation a l'environnement professionnel")==false){return false;}
    if(VerifValeur(DS1PEF.value, "DS1 preparation a l'environnement professionnel")==false){return false;}
    if(VerifValeur(DS2PEF.value, "DS2  preparation a l'environnement professionnel")==false){return false;}
    var m1s5=(((MoyFRAME*1+ MoyVIRT*1)/2)).toFixed(2);
    var m2s5=(((MoySOA*1.5+MoyTECIND*1.5)/3)).toFixed(2);
    var m3s5=(((MoyREAL*1+ MoyMAILLAGE*1)/2)).toFixed(2);
    var m4s5=(MoyDWEB2).toFixed(2);
    var m5s5=(((MoyANG5*1+ MoyENTPROG*1+MoyPEF*1)/3)).toFixed(2);
    module1s5.innerHTML="Moyenne Module: "+ m1s5;
    module2s5.innerHTML="Moyenne Module: "+  m2s5;
    module3s5.innerHTML="Moyenne Module: "+  m3s5;
    module4s5.innerHTML="Moyenne Module: "+  m4s5;
    module5s5.innerHTML="Moyenne Module: "+  m5s5;
    var X_S5=0;
    if(ch=="fond"){
       var DSUXD=document.getElementById('notedsuxd');
        var EXUXD=document.getElementById('noteexuxd');
        var DSSECURITE=document.getElementById('notedssecurite');
        var EXSECURITE=document.getElementById('noteexsecurite');
        if(VerifValeur(DSUXD.value, "DS  UX Design")==false){return false;}
        if(VerifValeur(EXUXD.value, "EXAMEN UX Design")==false){return false;}
        if(VerifValeur(DSSECURITE.value, "DS  Sécurité informatique")==false){return false;}
        if(VerifValeur(EXSECURITE.value, "EXAMEN Sécurité informatique")==false){return false;}
        var MoyUXD=CalculeMoyenne(DSUXD.value, EXUXD.value);
        var MoySECURITE=CalculeMoyenne(DSSECURITE.value, EXSECURITE.value);
        var module6s5=document.getElementById('MMOPF3');
        X_S5=(((MoyUXD*1.5+ MoySECURITE*1.5)/3)).toFixed(2);
        module6s5.innerHTML="Moyenne Module: "+  X_S5;
    }
    else{
        var CCAN2DAV=document.getElementById('noteCCan2dav');
        var DS1AN2DAV=document.getElementById('noteds1an2dav');
        var DS2AN2DAV=document.getElementById('noteds2an2dav');
        var CCAN3DAV=document.getElementById('noteCCan3dav');
        var DS1AN3DAV=document.getElementById('noteds1an3dav');
        var DS2AN3DAV=document.getElementById('noteds2an3dav');
        if(VerifValeur(CCAN2DAV.value, "CC Animation 2D Avancé")==false){return false;}
        if(VerifValeur(DS1AN2DAV.value, "DS1 Animation 2D Avancé")==false){return false;}
        if(VerifValeur(DS2AN2DAV.value, "DS2  Animation 2D Avancé")==false){return false;}
        if(VerifValeur(CCAN3DAV.value, "CC Animation 3D Avancé")==false){return false;}
        if(VerifValeur(DS1AN3DAV.value, "DS1 Animation 3D Avancé")==false){return false;}
        if(VerifValeur(DS2AN3DAV.value, "DS2  Animation 3D Avancé")==false){return false;}
        var MoyAN2DAV=CalculeMoyenneCC(CCAN2DAV.value, DS1AN2DAV.value, DS2AN2DAV.value);
        var MoyAN3DAV=CalculeMoyenneCC(CCAN3DAV.value, DS1AN3DAV.value, DS2AN3DAV.value);
        var module7s5=document.getElementById('MMANAV');
        X_S5=(((MoyAN2DAV*1.5+ MoyAN3DAV*1.5)/3)).toFixed(2);
        module7s5.innerHTML="Moyenne Module: "+  X_S5;
    }
    moyGenaral.innerHTML+= (((m1s5*2)+(m2s5*3)+(m3s5*2)+(m4s5*2)+(m5s5*3)+(X_S5*3))/15).toFixed(2);
}

}




function display(){
    var l=document.getElementById("choix").value;
    var ch=document.getElementById('option').value;
    var divs=document.getElementsByTagName('section');
    var inputs=document.getElementsByTagName('input');
    var moy=document.getElementsByClassName('MoyenneModule');
    var moyG=document.getElementById('moyenne');
    moyG.innerHTML="Moyenne: ";
    for (moyoy of moy){
        moyoy.innerHTML="Moyenne Module: ";
    }
    for (input of inputs){
        input.value = '';
    }
    for (div of divs){
        div.style.display = 'none';
    }
    document.getElementById(l).style.display = 'block';
    document.getElementById('resultat').style.display = 'block';
    if(l=="s3" && ch=="fond"){
        document.getElementById('ModuleOption1').style.display = 'block';
        document.getElementById('ModuleOption').style.display = 'none';
    }
    else if(l=="s3" && ch=="gaming"){
        document.getElementById('ModuleOption').style.display = 'block';
        document.getElementById('ModuleOption1').style.display = 'none';
    }
    if(l=="s4" && ch=="fond"){
        document.getElementById('ModuleOptionF2').style.display = 'block';
        document.getElementById('ModuleOptionG2').style.display = 'none';
    }
    else if(l=="s4" && ch=="gaming"){
        document.getElementById('ModuleOptionG2').style.display = 'block';
        document.getElementById('ModuleOptionF2').style.display = 'none';
    }
    if(l=="s5" && ch=="fond"){
        document.getElementById('ModuleOptionF3').style.display = 'block';
        document.getElementById('ModuleOptionG3').style.display = 'none';
    }
    else if(l=="s5" && ch=="gaming"){
        document.getElementById('ModuleOptionG3').style.display = 'block';
        document.getElementById('ModuleOptionF3').style.display = 'none';
    }
}


function option(){
    var l=document.getElementById("choix").value;
    if(l!="s1" && l!="s2"){
        document.getElementById('choixoption').style.display = 'block';
    }
    else{
        document.getElementById('choixoption').style.display = 'none';
    }
}
