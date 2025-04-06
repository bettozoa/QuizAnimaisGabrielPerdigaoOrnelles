import { useState, useEffect } from "react";

const quiz = [
  // Mamíferos
  { question: "Os mamíferos têm pele coberta por quê?", options: ["Escamas", "Pelos", "Penas"], answer: "Pelos" },
  { question: "Como os mamíferos normalmente se movem?", options: ["Voando", "Andando ou correndo", "Rastejando"], answer: "Andando ou correndo" },
  { question: "Os filhotes dos mamíferos nascem de ovos?", options: ["Sim", "Não"], answer: "Não" },
  { question: "Como os mamíferos respiram?", options: ["Brânquias", "Pulmões", "Pele"], answer: "Pulmões" },
  { question: "Qual é o único mamífero que voa?", options: ["Morcego", "Águia", "Pato"], answer: "Morcego" },
  
  // Aves
  { question: "As aves são cobertas por quê?", options: ["Pelos", "Escamas", "Penas"], answer: "Penas" },
  { question: "Todas as aves voam?", options: ["Sim", "Não"], answer: "Não" },
  { question: "As aves botam ovos ou têm filhotes direto?", options: ["Botam ovos", "Filhotes direto"], answer: "Botam ovos" },
  { question: "As aves respiram com o quê?", options: ["Brânquias", "Pulmões", "Pele"], answer: "Pulmões" },
  { question: "Qual ave voa para trás?", options: ["Beija-flor", "Coruja", "Pombo"], answer: "Beija-flor" },

  // Répteis
  { question: "Os répteis têm pele lisa ou com escamas?", options: ["Lisa", "Com escamas"], answer: "Com escamas" },
  { question: "Como uma cobra se locomove?", options: ["Pulando", "Voando", "Rastejando"], answer: "Rastejando" },
  { question: "Os répteis nascem de onde?", options: ["De ovos", "Do útero", "Do ninho"], answer: "De ovos" },
  { question: "Répteis respiram debaixo da água?", options: ["Sim", "Não"], answer: "Não" },
  { question: "Um jacaré é um réptil ou um anfíbio?", options: ["Réptil", "Anfíbio"], answer: "Réptil" },

  // Anfíbios
  { question: "Como é a pele dos anfíbios?", options: ["Seca e escamosa", "Úmida e lisa", "Com pelos"], answer: "Úmida e lisa" },
  { question: "Um sapo pula ou anda?", options: ["Pula", "Anda"], answer: "Pula" },
  { question: "Os sapos botam ovos onde?", options: ["Na terra", "Na água", "No ar"], answer: "Na água" },
  { question: "Como o girino (filhote de sapo) respira?", options: ["Brânquias", "Pulmões", "Pele"], answer: "Brânquias" },
  { question: "Por que os sapos vivem perto da água?", options: ["Porque gostam", "Para respirar melhor", "Porque precisam de umidade"], answer: "Porque precisam de umidade" },

  // Peixes
  { question: "O corpo dos peixes é coberto por quê?", options: ["Pelos", "Escamas", "Penas"], answer: "Escamas" },
  { question: "Como os peixes nadam?", options: ["Com nadadeiras", "Com asas", "Com patas"], answer: "Com nadadeiras" },
  { question: "Os peixes botam ovos?", options: ["Sim", "Não"], answer: "Sim" },
  { question: "Qual órgão os peixes usam para respirar?", options: ["Pulmões", "Brânquias", "Nariz"], answer: "Brânquias" },
  { question: "O tubarão é um peixe?", options: ["Sim", "Não"], answer: "Sim" },

  // Bônus
  { question: "Qual grupo de animais alimenta os filhotes com leite?", options: ["Aves", "Mamíferos", "Répteis"], answer: "Mamíferos" },
  { question: "Qual grupo respira com brânquias quando é filhote e com pulmões quando é adulto?", options: ["Anfíbios", "Peixes", "Aves"], answer: "Anfíbios" },
  { question: "Qual grupo geralmente vive em ambientes secos e tem escamas?", options: ["Répteis", "Peixes", "Anfíbios"], answer: "Répteis" },
  { question: "Qual grupo sempre vive na água e tem nadadeiras?", options: ["Anfíbios", "Peixes", "Aves"], answer: "Peixes" },
  { question: "Qual grupo bota ovos e cuida dos filhotes em ninhos?", options: ["Aves", "Mamíferos", "Peixes"], answer: "Aves" }
];

export default function QuizAnimais() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [progress, setProgress] = useState(0);
  const [feedback, setFeedback] = useState("");

  const current = quiz[index];

  useEffect(() => {
    setProgress((index / quiz.length) * 100);
  }, [index]);

  const handleAnswer = (option) => {
    const isCorrect = option === current.answer;
    if (isCorrect) {
      setScore(score + 1);
      setFeedback("Resposta correta! 🎉");
    } else {
      setFeedback("Resposta errada. 😞");
    }

    setTimeout(() => {
      setFeedback("");
      if (index + 1 < quiz.length) {
        setIndex(index + 1);
      } else {
        setFinished(true);
      }
    }, 1500);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", textAlign: "center" }}>
      <div style={{ height: "10px", background: "#ddd", marginBottom: "1rem" }}>
        <div style={{ width: `${progress}%`, height: "100%", background: "green" }}></div>
      </div>

      {!finished ? (
        <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>{current.question}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "1rem" }}>
            {current.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(option)}
                style={{ padding: "0.5rem", background: "#eee", border: "1px solid #ccc", borderRadius: "4px" }}
              >
                {option}
              </button>
            ))}
          </div>
          {feedback && <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{feedback}</p>}
        </div>
      ) : (
        <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}>Parabéns!</h2>
          <p>Você acertou {score} de {quiz.length} perguntas.</p>
          <button
            onClick={() => {
              setIndex(0);
              setScore(0);
              setFinished(false);
              setProgress(0);
            }}
            style={{ marginTop: "1rem", padding: "0.5rem 1rem", background: "#4caf50", color: "white", border: "none", borderRadius: "4px" }}
          >
            Jogar de novo
          </button>
        </div>
      )}
    </div>
  );
}
