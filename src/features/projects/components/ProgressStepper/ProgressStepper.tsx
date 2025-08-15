import { Check } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type Step = {
  name: string;
};

type ProgressStepperProps = {
  stepsConfig?: Step[];
};

const ProgressStepper: React.FC<ProgressStepperProps> = ({
  stepsConfig = [],
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [margins, setMargins] = useState<{
    marginLeft: number;
    marginRight: number;
  }>({
    marginLeft: 0,
    marginRight: 0,
  });

  const stepRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0]?.offsetWidth
        ? stepRef.current[0].offsetWidth / 2
        : 0,
      marginRight: stepRef.current[stepsConfig.length - 1]?.offsetWidth
        ? stepRef.current[stepsConfig.length - 1]!.offsetWidth / 2
        : 0,
    });
  }, [stepsConfig.length]);

  const handleStepClick = (index: number) => {
    const clickedStep = index + 1;
    setCurrentStep(clickedStep);
    setIsComplete(clickedStep === stepsConfig.length);
  };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  if (!stepsConfig.length) return <></>;

  return (
    <div className="stepper relative">
      {stepsConfig.map((step, index) => {
        const stepNum = index + 1;
        const isDone = currentStep > stepNum || isComplete;
        const isActive = currentStep === stepNum;

        return (
          <div
            key={step.name}
            ref={(el) => {
              stepRef.current[index] = el;
            }}
            className={`step cursor-pointer ${isDone ? "complete" : ""} ${
              isActive ? "active" : ""
            }`}
            onClick={() => handleStepClick(index)}
          >
            <div className="step-number">
              {isDone ? <Check className="size-[1.8rem] stroke-3" /> : stepNum}
            </div>
            <div className="step-name">{step.name}</div>
          </div>
        );
      })}

      <div
        className="progress-bar"
        style={{
          width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
          marginLeft: `${margins.marginLeft}px`,
          marginRight: `${margins.marginRight}px`,
        }}
      >
        <div
          className="progress"
          style={{ width: `${calculateProgressBarWidth()}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressStepper;
