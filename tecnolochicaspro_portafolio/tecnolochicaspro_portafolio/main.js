let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('En el proceso de aprendizaje para desarrollar diferentes sitios web')
  .pauseFor(200)
  .deleteChars(10)
  .start();
