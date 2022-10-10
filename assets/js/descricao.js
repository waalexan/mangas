var app = document.getElementById('slogan');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Ola! bemi-vindos a syshard ')
    .pauseFor(2500)
    .deleteAll()
    .typeString('syshard e uma empresa angolana')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Nos criamos os melhores programas')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Nas linguagens mas modernas e sufisticadas')
    .deleteAll()
    .typeString('Nos nos criamos com: ')
    .pauseFor(5000)
    .typeString('Javascript')
    .pauseFor(5000)
    .deleteChars(10)
    .typeString('Python')
    .pauseFor(5000)
    .deleteChars(6)
    .typeString('C#')
    .pauseFor(5000)
    .deleteChars(2)
    .typeString('PHP')
    .pauseFor(5000)
    .deleteChars(3)
    .typeString('C++ (arduino)')
    .start();