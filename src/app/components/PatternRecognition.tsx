import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface PatternRecognitionProps {
  difficulty: "easy" | "medium" | "hard";
  onComplete: (score: number) => void;
}

const SHAPES = ["circle", "square", "triangle", "diamond", "star"];
const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8", "#F7DC6F"];

interface Pattern {
  shape: string;
  color: string;
}

export function PatternRecognition({ difficulty, onComplete }: PatternRecognitionProps) {
  const [sequence, setSequence] = useState<Pattern[]>([]);
  const [options, setOptions] = useState<Pattern[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);

  const maxRounds = difficulty === "easy" ? 5 : difficulty === "medium" ? 7 : 10;
  const sequenceLength = difficulty === "easy" ? 3 : difficulty === "medium" ? 4 : 5;

  useEffect(() => {
    generateNewPattern();
  }, [difficulty]);

  const generateNewPattern = () => {
    const newSequence: Pattern[] = [];
    const patternType = Math.random();

    // Generate a logical pattern
    if (patternType < 0.5) {
      // Repeating pattern
      const basePattern: Pattern[] = [];
      const patternSize = Math.floor(Math.random() * 2) + 2;
      
      for (let i = 0; i < patternSize; i++) {
        basePattern.push({
          shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
      
      while (newSequence.length < sequenceLength) {
        newSequence.push(...basePattern);
      }
      newSequence.splice(sequenceLength);
    } else {
      // Alternating or color/shape progression
      const baseShape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      const baseColor = COLORS[Math.floor(Math.random() * COLORS.length)];
      
      for (let i = 0; i < sequenceLength; i++) {
        newSequence.push({
          shape: i % 2 === 0 ? baseShape : SHAPES[(SHAPES.indexOf(baseShape) + 1) % SHAPES.length],
          color: i % 2 === 0 ? baseColor : COLORS[(COLORS.indexOf(baseColor) + 1) % COLORS.length],
        });
      }
    }

    setSequence(newSequence);
    generateOptions(newSequence);
    setSelectedAnswer(null);
    setFeedback(null);
  };

  const generateOptions = (seq: Pattern[]) => {
    const correctAnswer = getNextInSequence(seq);
    const wrongOptions: Pattern[] = [];

    while (wrongOptions.length < 3) {
      const wrongOption = {
        shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      };
      
      if (
        !wrongOptions.some(
          (opt) => opt.shape === wrongOption.shape && opt.color === wrongOption.color
        ) &&
        !(wrongOption.shape === correctAnswer.shape && wrongOption.color === correctAnswer.color)
      ) {
        wrongOptions.push(wrongOption);
      }
    }

    const allOptions = [correctAnswer, ...wrongOptions].sort(() => Math.random() - 0.5);
    setOptions(allOptions);
  };

  const getNextInSequence = (seq: Pattern[]): Pattern => {
    // Simple pattern continuation logic
    const lastTwo = seq.slice(-2);
    if (lastTwo[0].shape === lastTwo[1].shape) {
      return { shape: lastTwo[1].shape, color: lastTwo[1].color };
    } else {
      const shapeIndex = SHAPES.indexOf(lastTwo[1].shape);
      const colorIndex = COLORS.indexOf(lastTwo[1].color);
      return {
        shape: SHAPES[(shapeIndex + 1) % SHAPES.length],
        color: COLORS[(colorIndex + 1) % COLORS.length],
      };
    }
  };

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    const correctAnswer = getNextInSequence(sequence);
    const isCorrect =
      options[index].shape === correctAnswer.shape &&
      options[index].color === correctAnswer.color;

    if (isCorrect) {
      setFeedback("correct");
      setScore(score + 100);
      
      setTimeout(() => {
        if (round < maxRounds) {
          setRound(round + 1);
          generateNewPattern();
        } else {
          onComplete(score + 100);
        }
      }, 1000);
    } else {
      setFeedback("incorrect");
      setTimeout(() => {
        if (round < maxRounds) {
          setRound(round + 1);
          generateNewPattern();
        } else {
          onComplete(score);
        }
      }, 1000);
    }
  };

  const renderShape = (pattern: Pattern, size: number = 60) => {
    const commonProps = {
      fill: pattern.color,
      stroke: "white",
      strokeWidth: 2,
    };

    return (
      <svg width={size} height={size} viewBox="0 0 100 100">
        {pattern.shape === "circle" && (
          <circle cx="50" cy="50" r="40" {...commonProps} />
        )}
        {pattern.shape === "square" && (
          <rect x="10" y="10" width="80" height="80" {...commonProps} />
        )}
        {pattern.shape === "triangle" && (
          <polygon points="50,10 90,90 10,90" {...commonProps} />
        )}
        {pattern.shape === "diamond" && (
          <polygon points="50,10 90,50 50,90 10,50" {...commonProps} />
        )}
        {pattern.shape === "star" && (
          <polygon
            points="50,5 61,35 92,35 67,55 78,85 50,65 22,85 33,55 8,35 39,35"
            {...commonProps}
          />
        )}
      </svg>
    );
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

      <div className="space-y-4">
        <div>
          <p className="mb-3">What comes next in this pattern?</p>
          <div className="flex gap-3 items-center justify-center p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg">
            {sequence.map((pattern, index) => (
              <div key={index}>{renderShape(pattern)}</div>
            ))}
            <div className="text-3xl mx-2">→ ?</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {options.map((option, index) => (
            <Card
              key={index}
              className={`p-6 flex items-center justify-center cursor-pointer transition-all hover:scale-105 ${
                selectedAnswer === index
                  ? feedback === "correct"
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => selectedAnswer === null && handleAnswer(index)}
            >
              {renderShape(option)}
            </Card>
          ))}
        </div>

        {feedback && (
          <div
            className={`text-center p-4 rounded-lg ${
              feedback === "correct"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {feedback === "correct" ? "Correct! Well done!" : "Incorrect. Try the next one!"}
          </div>
        )}
      </div>
    </div>
  );
}
