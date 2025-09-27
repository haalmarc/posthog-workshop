"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Trophy } from "lucide-react";
import Link from "next/link";

export default function FunnelPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [prize, setPrize] = useState<number>(0);

  const questions = [
    {
      question: "Liker du taco eller pizza på fredager?",
      options: [
        { value: "taco", label: "Taco" },
        { value: "pizza", label: "Pizza" },
      ],
    },
    {
      question: "Hvilken årstid foretrekker du?",
      options: [
        { value: "vinter", label: "Vinter" },
        { value: "vår", label: "Vår" },
        { value: "sommer", label: "Sommer" },
        { value: "høst", label: "Høst" },
      ],
    },
    {
      question: "Hvordan kommer du deg vanligvis til jobb/skole?",
      options: [
        { value: "bil", label: "Bil" },
        { value: "kollektiv", label: "Kollektivtransport" },
        { value: "sykkel", label: "Sykkel" },
        { value: "gå", label: "Går til fots" },
      ],
    },
    {
      question: "Hva gjør du helst på fritiden?",
      options: [
        { value: "trening", label: "Trening" },
        { value: "lesing", label: "Lesing" },
        { value: "tv", label: "Se på TV/filmer" },
        { value: "gaming", label: "Spille spill" },
        { value: "friluft", label: "Friluftsliv" },
      ],
    },
  ];

  const handleNext = () => {
    // 👉 TODO: Oppgave 2b: Track stegene i skjemaet
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculatePrize();
      setShowResult(true);
    }
  };

  const calculatePrize = () => {
    if (answers[0] === "pizza" && answers[1] === "sommer") {
      setPrize(100);
    } else if (answers[0] === "taco" && answers[1] === "vinter") {
      setPrize(75);
    } else {
      setPrize(50);
    }
  };

  const handleSelectOption = (value: string) => {
    setAnswers({
      ...answers,
      [currentStep]: value,
    });
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  if (showResult) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-muted p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Gratulerer!</CardTitle>
            <CardDescription>
              Takk for at du fullførte vår undersøkelse
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-6 p-6">
            <Trophy className="h-24 w-24 text-yellow-500" />
            <div className="text-center">
              <h3 className="text-3xl font-bold">Du vant {prize} kr!</h3>
              <p className="mt-2 text-muted-foreground">
                Din premie er basert på dine svar i undersøkelsen.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/" className="w-full">
              <Button className="w-full">Tilbake til forsiden</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>
                Spørsmål {currentStep + 1} av {questions.length}
              </CardTitle>
              <CardDescription>
                Svar på alle spørsmålene for å se resultatet
              </CardDescription>
            </div>
            <div className="text-sm font-medium">{Math.round(progress)}%</div>
          </div>
          <Progress value={progress} className="h-2" />
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">
              {questions[currentStep].question}
            </h3>
            <RadioGroup
              value={answers[currentStep] || ""}
              onValueChange={handleSelectOption}
              className="space-y-3"
            >
              {questions[currentStep].options.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center space-x-2 rounded-md border p-3 hover:bg-accent"
                >
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label
                    htmlFor={option.value}
                    className="flex-1 cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleNext}
            className="w-full"
            disabled={!answers[currentStep]}
          >
            {currentStep < questions.length - 1 ? (
              <>
                Neste <ArrowRight className="ml-2 h-4 w-4" />
              </>
            ) : (
              "Se resultat"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
