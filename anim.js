// Seleccionar los elementos de audio y letras
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos con las líneas de la canción y sus tiempos de aparición en segundos
var lyricsData = [
  { "text": "Cuando te vi sentí algo raro por dentro", "time": 12 },
  { "text": "Una mezcla de miedo con locura", "time": 18 },
  { "text": "Y tu mirada me juró que si te pierdo", "time": 23 },
  { "text": "Habré perdido la más grande fortuna", "time": 28 },
  { "text": "No sé nada de tu historia", "time": 32 },
  { "text": "Ni de tu filosofía", "time": 37 },
  { "text": "Hoy te escribo sin pensar y sin ortografía", "time": 42 },
  { "text": "Para aprender a quererte", "time": 49 },
  { "text": "Voy a estudiar cómo se cumplen tus sueños", "time": 54 },
  { "text": "Voy a leerte siempre muy lentamente", "time": 59 },
  { "text": "Quiero entenderte", "time": 63 },
  { "text": "Cuando te vi tuve un buen presentimiento", "time": 68 },
  { "text": "De esos que llegan una vez en la vida", "time": 73 },
  { "text": "Quiero tenerte aunque sea solo un momento", "time": 78 },
  { "text": "Y si me dejas, tal vez todos los días", "time": 82 },
  { "text": "No sé nada de tu historia", "time": 87 },
  { "text": "Ni de tu filosofía", "time": 91 },
  { "text": "Hoy te escribo sin pensar ", "time": 96 },
  { "text": "sin ortografía", "time": 100 },
  { "text": "Para aprender a quererte", "time": 104 },
  { "text": "Voy a estudiar cómo se cumplen tus sueños", "time": 108 },
  { "text": "Voy a leerte siempre muy lentamente", "time": 113 },
  { "text": "Quiero entenderte", "time": 117 },
  { "text": "Para enseñarte a extrañarme", "time": 121 },
  { "text": "Voy a escribirte mi canción más honesta", "time": 125 },
  { "text": "Darte una vida con más sumas que restas", "time": 130 },
  { "text": "Si tú me dejas no habrá preguntas, solo respuestas", "time": 138 },
  { "text": "No descansaré", "time": 142 },
  { "text": "solo quiero tenerte a mi lado (Aquí a mi lado)", "time": 148 },
  { "text": "Ruego que mi voz te demuestre lo que te he esperado", "time": 159 },
  { "text": "Antes de estar junto a ti por toda la vida", "time": 167 },
  { "text": "Quiero aprender a quererte", "time": 170 },
  { "text": "Quiero estudiar cómo se cumplen tus sueños", "time": 176 },
  { "text": "Voy a leerte siempre muy lentamente", "time": 180 },
  { "text": "Quiero entenderte", "time": 183 },
  { "text": "Para enseñarte a extrañarme", "time": 187 },
  { "text": "Voy a escribirte mi canción más honesta", "time": 192 },
  { "text": "Darte una vida con más sumas que restas", "time": 197 }
];

// Función para actualizar las letras en pantalla
function updateLyrics() {
  var time = Math.floor(audio.currentTime); // Obtener el tiempo actual del audio en segundos
  var currentLine = lyricsData.find((line) => time >= line.time && time < line.time + 5);

  if (currentLine) {
    // Solo actualiza el texto si cambia
    if (lyrics.innerHTML !== currentLine.text) {
      lyrics.innerHTML = currentLine.text;
    }
  } else {
    lyrics.innerHTML = ""; // Borra el texto si no hay línea activa
  }
}

// Ejecutar `updateLyrics` cada 100 ms para mejor sincronización
setInterval(updateLyrics, 100);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards"; // Aplicar animación de desvanecimiento
    setTimeout(() => {
      titulo.style.display = "none"; // Ocultar completamente después de la animación
    }, 3000);
  }
}

// Llamar a la función después de 216 segundos (3 minutos y 36 segundos)
setTimeout(ocultarTitulo, 216000);
