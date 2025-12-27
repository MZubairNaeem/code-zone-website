import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface ColorSequenceProps {
  difficulty: "easy" | "medium" | "hard";
  onComplete: (score: number) => void;
}

const COLORS = [
  { name: "Red", value: "#EF4444" },
  { name: "Blue", value: "#3B82F6" },
  { name: "Green", value: "#10B981" },
  { name: "Yellow", value: "#F59E0B" },
  { name: "Purple", value: "#8B5CF6" },
  { name: "Pink", value: "#EC4899" },
];

export function ColorSequence({ difficulty, onComplete }: ColorSequenceProps) {
  const [sequence, setSequence] = useState<number[]>([]);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const [showSequence, setShowSequence] = useState(true);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const maxRounds = difficulty === "easy" ? 5 : difficulty === "medium" ? 7 : 10;
  const sequenceLength = difficulty === "easy" ? 3 : difficulty === "medium" ? 5 : 7;
  const displaySpeed = difficulty === "easy" ? 800 : difficulty === "medium" ? 600 : 400;

  useEffect(() => {
    generateNewSequence();
  }, [difficulty]);

  const generateNewSequence = () => {
    const newSequence: number[] = [];
    for (let i = 0; i < sequenceLength; i++) {
      newSequence.push(Math.floor(Math.random() * COLORS.length));
    }
    setSequence(newSequence);
    setUserSequence([]);
    setFeedback(null);
    playSequence(newSequence);
  };

  const playSequence = async (seq: number[]) => {
    setIsPlaying(true);
    setShowSequence(true);

    for (let i = 0; i < seq.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, displaySpeed));
      // Highlight effect would happen here
    }

    await new Promise((resolve) => setTimeout(resolve, displaySpeed * 2));
    setShowSequence(false);
    setIsPlaying(false);
  };

  const handleColorClick = (colorIndex: number) => {
    if (isPlaying || feedback !== null) return;

    const newUserSequence = [...userSequence, colorIndex];
    setUserSequence(newUserSequence);

    // Check if the current selection is correct
    if (colorIndex !== sequence[newUserSequence.length - 1]) {
      setFeedback("incorrect");
      setTimeout(() => {
        if (round < maxRounds) {
          setRound(round + 1);
          generateNewSequence();
        } else {
          onComplete(score);
        }
      }, 1500);
      return;
    }

    // Check if sequence is complete
    if (newUserSequence.length === sequence.length) {
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
        <Button onClick={generateNewSequence} variant="outline" size="sm" disabled={isPlaying}>
          Replay
        </Button>
      </div>

      <Card className="p-8 bg-gradient-to-r from-pink-100 to-purple-100">
        <p className="text-center mb-6">
          {showSequence
            ? "Watch the sequence carefully!"
            : "Now repeat the sequence!"}
        </p>

        {showSequence && (
          <div className="flex gap-3 justify-center mb-6 flex-wrap">
            {sequence.map((colorIndex, index) => (
              <div
                key={index}
                className="w-16 h-16 rounded-lg shadow-lg transition-all duration-300"
                style={{ backgroundColor: COLORS[colorIndex].value }}
              />
            ))}
          </div>
        )}

        {!showSequence && userSequence.length > 0 && (
          <div className="mb-6">
            <p className="text-center mb-3">Your sequence:</p>
            <div className="flex gap-3 justify-center flex-wrap">
              {userSequence.map((colorIndex, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-lg shadow-md"
                  style={{ backgroundColor: COLORS[colorIndex].value }}
                />
              ))}
            </div>
          </div>
        )}
      </Card>

      {!showSequence && (
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {COLORS.map((color, index) => (
            <button
              key={index}
              onClick={() => handleColorClick(index)}
              disabled={isPlaying || feedback !== null}
              className="aspect-square rounded-lg shadow-lg transition-all hover:scale-110 active:scale-95 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{ backgroundColor: color.value }}
            >
              <span className="sr-only">{color.name}</span>
            </button>
          ))}
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
            ? "Perfect! You got the sequence right!"
            : "Oops! That wasn't quite right."}
        </div>
      )}
    </div>
  );
}
