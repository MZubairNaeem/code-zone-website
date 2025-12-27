import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface NumberSequenceProps {
  difficulty: "easy" | "medium" | "hard";
  onComplete: (score: number) => void;
}

export function NumberSequence({ difficulty, onComplete }: NumberSequenceProps) {
  const [sequence, setSequence] = useState<number[]>([]);
  const [answer, setAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);
  const [showSequence, setShowSequence] = useState(true);

  const maxRounds = difficulty === "easy" ? 5 : difficulty === "medium" ? 7 : 10;
  const sequenceLength = difficulty === "easy" ? 3 : difficulty === "medium" ? 4 : 5;
  const viewTime = difficulty === "easy" ? 3000 : difficulty === "medium" ? 2500 : 2000;

  useEffect(() => {
    generateNewSequence();
  }, [difficulty]);

  const generateNewSequence = () => {
    const newSequence: number[] = [];
    const start = Math.floor(Math.random() * 50) + 1;
    const operation = Math.random();

    if (operation < 0.33) {
      // Addition sequence
      const step = Math.floor(Math.random() * 5) + 2;
      for (let i = 0; i < sequenceLength; i++) {
        newSequence.push(start + step * i);
      }
      setCorrectAnswer(start + step * sequenceLength);
    } else if (operation < 0.66) {
      // Multiplication sequence (for harder difficulties)
      if (difficulty === "hard") {
        const multiplier = 2;
        let current = start;
        for (let i = 0; i < sequenceLength; i++) {
          newSequence.push(current);
          current *= multiplier;
        }
        setCorrectAnswer(current);
      } else {
        // Subtraction for easier modes
        const step = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < sequenceLength; i++) {
          newSequence.push(start - step * i);
        }
        setCorrectAnswer(start - step * sequenceLength);
      }
    } else {
      // Fibonacci-like sequence
      if (difficulty === "hard") {
        newSequence.push(start);
        newSequence.push(start + Math.floor(Math.random() * 5) + 1);
        for (let i = 2; i < sequenceLength; i++) {
          newSequence.push(newSequence[i - 1] + newSequence[i - 2]);
        }
        setCorrectAnswer(newSequence[sequenceLength - 1] + newSequence[sequenceLength - 2]);
      } else {
        // Simple addition
        const step = Math.floor(Math.random() * 5) + 3;
        for (let i = 0; i < sequenceLength; i++) {
          newSequence.push(start + step * i);
        }
        setCorrectAnswer(start + step * sequenceLength);
      }
    }

    setSequence(newSequence);
    setAnswer("");
    setFeedback(null);
    setShowSequence(true);

    // Hide sequence after viewing time
    setTimeout(() => {
      setShowSequence(false);
    }, viewTime);
  };

  const handleSubmit = () => {
    const userAnswer = parseInt(answer, 10);
    if (isNaN(userAnswer)) return;

    if (userAnswer === correctAnswer) {
      setFeedback("correct");
      setScore(score + 100);
      
      setTimeout(() => {
        if (round < maxRounds) {
          setRound(round + 1);
          generateNewSequence();
        } else {
          onComplete(score + 100);
        }
      }, 1500);
    } else {
      setFeedback("incorrect");
      setTimeout(() => {
        if (round < maxRounds) {
          setRound(round + 1);
          generateNewSequence();
        } else {
          onComplete(score);
        }
      }, 1500);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-6">
          <div className="text-center">
            <div>Round</div>
            <div>{round}/{maxRounds}</div>
          </div>
          <div className="text-center">
            <div>Score</div>
            <div>{score}</div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <Card className="p-8 bg-gradient-to-r from-indigo-100 to-purple-100">
          <p className="text-center mb-4">
            {showSequence
              ? "Memorize this sequence:"
              : "What number comes next?"}
          </p>
          <div className="flex gap-4 items-center justify-center flex-wrap">
            {showSequence ? (
              sequence.map((num, index) => (
                <div
                  key={index}
                  className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md"
                >
                  <span className="text-2xl">{num}</span>
                </div>
              ))
            ) : (
              <>
                {sequence.map((_, index) => (
                  <div
                    key={index}
                    className="w-16 h-16 bg-gray-300 rounded-lg flex items-center justify-center shadow-md"
                  >
                    <span className="text-2xl">?</span>
                  </div>
                ))}
                <div className="text-3xl mx-2">→</div>
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-2xl text-white">?</span>
                </div>
              </>
            )}
          </div>
        </Card>

        {!showSequence && (
          <div className="flex gap-3 items-end">
            <div className="flex-1">
              <label className="block mb-2">Your Answer:</label>
              <Input
                type="number"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="Enter the next number"
                className="text-lg"
                disabled={feedback !== null}
              />
            </div>
            <Button onClick={handleSubmit} disabled={!answer || feedback !== null}>
              Submit
            </Button>
          </div>
        )}

        {feedback && (
          <div
            className={`text-center p-4 rounded-lg ${
              feedback === "correct"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {feedback === "correct"
              ? `Correct! The answer was ${correctAnswer}`
              : `Incorrect. The answer was ${correctAnswer}`}
          </div>
        )}
      </div>
    </div>
  );
}
