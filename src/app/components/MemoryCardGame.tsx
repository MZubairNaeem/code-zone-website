import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Brain } from "lucide-react";

interface MemoryCard {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

interface MemoryCardGameProps {
  difficulty: "easy" | "medium" | "hard";
  onComplete: (score: number) => void;
}

const EMOJI_SETS = {
  easy: ["🎨", "🎭", "🎪", "🎸"],
  medium: ["🎨", "🎭", "🎪", "🎸", "🎯", "🎲"],
  hard: ["🎨", "🎭", "🎪", "🎸", "🎯", "🎲", "🎮", "🎹"],
};

export function MemoryCardGame({ difficulty, onComplete }: MemoryCardGameProps) {
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const gridCols = difficulty === "easy" ? 4 : difficulty === "medium" ? 4 : 4;
  const totalPairs = EMOJI_SETS[difficulty].length;

  useEffect(() => {
    initializeGame();
  }, [difficulty]);

  const initializeGame = () => {
    const emojis = EMOJI_SETS[difficulty];
    const cardPairs = [...emojis, ...emojis];
    const shuffled = cardPairs
      .map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);

    setCards(shuffled);
    setFlippedIndices([]);
    setMoves(0);
    setMatchedPairs(0);
    setGameStarted(false);
  };

  const handleCardClick = (index: number) => {
    if (!gameStarted) setGameStarted(true);
    
    if (
      flippedIndices.length === 2 ||
      cards[index].isFlipped ||
      cards[index].isMatched
    ) {
      return;
    }

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      const [first, second] = newFlipped;

      if (newCards[first].value === newCards[second].value) {
        newCards[first].isMatched = true;
        newCards[second].isMatched = true;
        setCards(newCards);
        setFlippedIndices([]);
        
        const newMatchedPairs = matchedPairs + 1;
        setMatchedPairs(newMatchedPairs);

        if (newMatchedPairs === totalPairs) {
          const score = Math.max(1000 - moves * 10, 100);
          setTimeout(() => onComplete(score), 500);
        }
      } else {
        setTimeout(() => {
          const resetCards = [...newCards];
          resetCards[first].isFlipped = false;
          resetCards[second].isFlipped = false;
          setCards(resetCards);
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-6">
          <div className="text-center">
            <div>Moves</div>
            <div>{moves}</div>
          </div>
          <div className="text-center">
            <div>Matched</div>
            <div>{matchedPairs}/{totalPairs}</div>
          </div>
        </div>
        <Button onClick={initializeGame} variant="outline" size="sm">
          Reset
        </Button>
      </div>

      <div
        className={`grid gap-3`}
        style={{
          gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={card.id}
            className={`aspect-square flex items-center justify-center cursor-pointer transition-all duration-300 ${
              card.isFlipped || card.isMatched
                ? "bg-blue-500 text-white"
                : "bg-gradient-to-br from-purple-500 to-blue-600 hover:scale-105"
            } ${card.isMatched ? "opacity-50" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="text-4xl">
              {card.isFlipped || card.isMatched ? (
                card.value
              ) : (
                <Brain className="w-8 h-8 text-white" />
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
