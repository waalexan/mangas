var app = document.getElementById('slogan');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Bem-vindo Otaku!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Os melhores animes')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('<strong>Mangas!</strong>')
    .pauseFor(2500)
    .start();