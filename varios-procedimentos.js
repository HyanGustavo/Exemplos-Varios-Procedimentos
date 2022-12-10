function A() {
    console.log("(A) - Você chamou o A?");
}

function B() {
    console.log("(B) - Procedimento B presente, chamou?");
    C();
}

function C() {
    console.log("(C) - Oi, sou o procedimento C, o B me chamou aqui.");
}

function D() {
    console.log("(D) - Sou o procedimento D e chamo todo mundo, veja:");
    A();
    B();
}

A();
B();
D();