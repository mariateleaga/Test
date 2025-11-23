// ===========================
//  PUNTEGGI DA COMPILARE TU
// ===========================

const scoring = {
    q1: {
      A: { imagine: 4, manage: 1, engage: 2, make: 0, process: 1 },
      B: { imagine: 0, manage: 5, engage: 1, make: 1, process: 3 },
      C: { imagine: 1, manage: 1, engage: 5, make: 0, process: 0 },
      D: { imagine: 0, manage: 1, engage: 1, make: 5, process: 0 },
      E: { imagine: 0, manage: 2, engage: 0, make: 0, process: 5 }
    },
    q2: {
      A: { imagine: 5, manage: 1, engage: 1, make: 0, process: 1 },
      B: { imagine: 0, manage: 5, engage: 1, make: 0, process: 2 },
      C: { imagine: 1, manage: 1, engage: 5, make: 0, process: 0 },
      D: { imagine: 0, manage: 1, engage: 1, make: 5, process: 0 },
      E: { imagine: 0, manage: 2, engage: 0, make: 0, process: 5 }
    },
    q3: {
    A: { imagine: 5, manage: 0, engage: 1, make: 0, process: 1 },
    B: { imagine: 0, manage: 5, engage: 0, make: 1, process: 2 },
    C: { imagine: 1, manage: 1, engage: 5, make: 0, process: 0 },
    D: { imagine: 0, manage: 1, engage: 0, make: 5, process: 1 },
    E: { imagine: 0, manage: 1, engage: 0, make: 0, process: 5 }
    },

    q4: {
        A: { imagine: 5, manage: 0, engage: 2, make: 0, process: 1 },
        B: { imagine: 0, manage: 5, engage: 1, make: 0, process: 1 },
        C: { imagine: 1, manage: 1, engage: 5, make: 0, process: 0 },
        D: { imagine: 0, manage: 0, engage: 0, make: 5, process: 1 },
        E: { imagine: 0, manage: 1, engage: 0, make: 0, process: 5 }
    },

    q5: {
        A: { imagine: 5, manage: 0, engage: 2, make: 0, process: 0 },
        B: { imagine: 0, manage: 5, engage: 1, make: 0, process: 2 },
        C: { imagine: 0, manage: 1, engage: 5, make: 0, process: 0 },
        D: { imagine: 0, manage: 0, engage: 1, make: 5, process: 0 },
        E: { imagine: 0, manage: 0, engage: 0, make: 1, process: 5 }
    },

    q6: {
        A: { imagine: 5, manage: 0, engage: 1, make: 0, process: 0 },
        B: { imagine: 0, manage: 5, engage: 0, make: 1, process: 1 },
        C: { imagine: 1, manage: 0, engage: 5, make: 0, process: 0 },
        D: { imagine: 0, manage: 0, engage: 0, make: 5, process: 1 },
        E: { imagine: 0, manage: 1, engage: 0, make: 0, process: 5 }
    },

    q7: {
        A: { imagine: 5, manage: 0, engage: 1, make: 0, process: 0 },
        B: { imagine: 0, manage: 5, engage: 0, make: 1, process: 1 },
        C: { imagine: 1, manage: 1, engage: 5, make: 0, process: 0 },
        D: { imagine: 0, manage: 0, engage: 0, make: 5, process: 1 },
        E: { imagine: 0, manage: 1, engage: 0, make: 0, process: 5 }
    },

    q8: {
        A: { imagine: 5, manage: 0, engage: 1, make: 0, process: 0 },
        B: { imagine: 0, manage: 5, engage: 1, make: 0, process: 1 },
        C: { imagine: 1, manage: 1, engage: 5, make: 0, process: 0 },
        D: { imagine: 0, manage: 0, engage: 0, make: 5, process: 1 },
        E: { imagine: 0, manage: 1, engage: 0, make: 0, process: 5 }
    },

    q9: {
        A: { imagine: 5, manage: 0, engage: 1, make: 0, process: 0 },
        B: { imagine: 0, manage: 5, engage: 1, make: 0, process: 1 },
        C: { imagine: 1, manage: 1, engage: 5, make: 0, process: 0 },
        D: { imagine: 0, manage: 0, engage: 1, make: 5, process: 0 },
        E: { imagine: 0, manage: 1, engage: 0, make: 0, process: 5 }
    },

    q10: {
        A: { imagine: 5, manage: 0, engage: 1, make: 0, process: 0 },
        B: { imagine: 0, manage: 5, engage: 1, make: 1, process: 1 },
        C: { imagine: 1, manage: 0, engage: 5, make: 0, process: 0 },
        D: { imagine: 0, manage: 1, engage: 1, make: 5, process: 0 },
        E: { imagine: 0, manage: 1, engage: 0, make: 0, process: 5 }
    },

    q11: {
        A: { imagine: 4, manage: 0, engage: 2, make: 0, process: 0 },
        B: { imagine: 0, manage: 5, engage: 0, make: 1, process: 2 },
        C: { imagine: 1, manage: 1, engage: 5, make: 0, process: 0 },
        D: { imagine: 0, manage: 0, engage: 0, make: 5, process: 1 },
        E: { imagine: 0, manage: 1, engage: 0, make: 0, process: 5 }
    },

    q12: {
        A: { imagine: 3, manage: 0, engage: 3, make: 0, process: 0 },
        B: { imagine: 0, manage: 5, engage: 1, make: 1, process: 1 },
        C: { imagine: 1, manage: 1, engage: 5, make: 0, process: 0 },
        D: { imagine: 0, manage: 0, engage: 0, make: 5, process: 1 },
        E: { imagine: 0, manage: 1, engage: 0, make: 0, process: 5 }
    },

    q13: {
        A: { imagine: 5, manage: 0, engage: 1, make: 0, process: 0 },
        B: { imagine: 0, manage: 5, engage: 0, make: 1, process: 1 },
        C: { imagine: 1, manage: 1, engage: 5, make: 0, process: 0 },
        D: { imagine: 0, manage: 0, engage: 0, make: 5, process: 1 },
        E: { imagine: 0, manage: 0, engage: 0, make: 0, process: 5 }
    },

    q14: {
        A: { imagine: 5, manage: 0, engage: 1, make: 0, process: 0 },
        B: { imagine: 0, manage: 5, engage: 1, make: 1, process: 0 },
        C: { imagine: 1, manage: 1, engage: 5, make: 0, process: 0 },
        D: { imagine: 0, manage: 1, engage: 0, make: 5, process: 0 },
        E: { imagine: 0, manage: 1, engage: 0, make: 0, process: 5 }
    },

    q15: {
        A: { imagine: 5, manage: 0, engage: 1, make: 0, process: 0 },
        B: { imagine: 0, manage: 5, engage: 1, make: 1, process: 0 },
        C: { imagine: 1, manage: 1, engage: 5, make: 0, process: 0 },
        D: { imagine: 0, manage: 0, engage: 1, make: 5, process: 0 },
        E: { imagine: 0, manage: 1, engage: 0, make: 0, process: 5 }
    }
  };


// ================================
//  LOGICA PRINCIPALE DEL QUIZ
// ================================
let scores = { imagine:0, manage:0, engage:0, make:0, process:0 };
const orderPriority = ["imagine","manage","engage","make","process"];

function show(screenId) {
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
  document.getElementById(screenId).classList.remove("hidden");
}

// ================================
//  START QUIZ
// ================================
document.getElementById("startBtn").addEventListener("click", () => {
  show("screen2");
});

// ================================
//  SUBMIT QUIZ
// ================================
document.getElementById("quizForm").addEventListener("submit", function(e){
  e.preventDefault();

  // reset punteggi
  for(let k in scores) scores[k] = 0;

  const data = new FormData(this);

  // calcolo punteggi
  for (const [q, ans] of data.entries()) {
    const pts = scoring[q][ans];
    for (const cat in pts) scores[cat] += pts[cat];
  }

  // punteggio massimo
  const maxScore = Math.max(...Object.values(scores));

  // categorie vincitrici
  const winners = Object.keys(scores).filter(cat => scores[cat] === maxScore);

  // scegli una sola per il video → in base alla priorità stabilita
  let videoWinner = orderPriority.find(cat => winners.includes(cat));

  // carica il video giusto
  const videoPath = `videos/${videoWinner}.mp4`;
  const resultVideo = document.getElementById("resultVideo");
  const tapToUnmute = document.getElementById("tapToUnmute");

  document.getElementById("videoSource").src = videoPath;
  resultVideo.load();
  resultVideo.play().catch(e => console.log("Autoplay bloccato:", e));

  show("screen3");
  tapToUnmute.classList.remove("hidden");

  // Attendi clic dell'utente per attivare audio
  tapToUnmute.addEventListener("click", () => {
    resultVideo.muted = false;   // Riattiva audio
    resultVideo.play();          // Riparte col suono
    tapToUnmute.classList.add("hidden"); // Nasconde overlay
  });
});

// ================================
//  VIDEO FINITO → MOSTRA RISULTATI
// ================================
document.getElementById("resultVideo").addEventListener("ended", () => {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = ""; // pulisce eventuali risultati precedenti

  // Trova vincitori
  const maxScore = Math.max(...Object.values(scores));
  const winners = Object.keys(scores).filter(cat => scores[cat] === maxScore);

  // Mostra vincitore
  const winnerHeading = document.createElement("h2");
  winnerHeading.innerHTML = `Risultato: <strong>${winners.join(" & ").toUpperCase()}</strong>`;
  resultsContainer.appendChild(winnerHeading);

  // Mostra titolo "Punteggi completi" allineato a sinistra
  const subtitle = document.createElement("h3");
  subtitle.textContent = "Punteggi completi:";
  subtitle.style.textAlign = "left";
  resultsContainer.appendChild(subtitle);

  // Colori per categoria
  const categoryColors = {
    imagine: "#ff3ac4",
    make: "#ff7952",
    process: "#ffcd4c",
    manage: "#00c3f2",
    engage: "#52ffcf"
  };

  // Genera barre dei punteggi
  for (const cat in scores) {
    const catDiv = document.createElement("div");
    catDiv.className = "category-result";

    const nameSpan = document.createElement("span");
    nameSpan.className = "category-name";
    nameSpan.textContent = `${cat}: ${scores[cat]}`;
    catDiv.appendChild(nameSpan);

    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";

    const progress = document.createElement("div");
    progress.className = "progress";
    const maxPossibleScore = 15 * 5; // 15 domande, max 5 per risposta
    progress.style.width = (scores[cat] / maxPossibleScore * 100) + "%";

    // Usa il colore della categoria
    progress.style.backgroundColor = categoryColors[cat];

    progressBar.appendChild(progress);
    catDiv.appendChild(progressBar);

    resultsContainer.appendChild(catDiv);
  }

  show("screen4");
});

// ================================
//  RIFAI IL QUIZ
// ================================
document.getElementById("restartBtn").addEventListener("click", () => {
  document.getElementById("quizForm").reset();
  show("screen1");
});