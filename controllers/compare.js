"use strict";
function fastOne() {
    clearFields2();
    arrDivShow('divShow2');
    i = indexBotton();
    faster(arrAll[i]);
    arrSpeed = arrAll[i].showThrusters();
    console.log(arrSpeed);
    let sumNum = addNum(arrSpeed);
    console.log(sumNum);
    arrSpeed = arrAll[i].showMaxPower();
    let sumNum2 = addNum(arrSpeed);
    console.log(`MaxPower at the moment: ${sumNum2}. Power remaining: ${sumNum}`);
    text = (`MaxPower at the moment: ${sumNum2}. Power remaining: ${sumNum}`);
    writeOne(text);
    (sumNum == 0) ? text1 = `No more power available. MaxPower of ${sumNum2} reached` :
        text1 = (` ${arrAll[i].myName}: ${arrAll[i].showThrusters()}`);
    writeTwo(text1);
    arrDivHide('divShow2');
}
//# sourceMappingURL=compare.js.map