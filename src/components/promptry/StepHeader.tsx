interface StepHeaderProps {
  step: string;
  title: string;
  description: string;
}

export const StepHeader = ({ step, title, description }: StepHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300 backdrop-blur-xl">
        {step}
      </div>

      <h2 className="text-3xl font-semibold tracking-tight text-white">
        {title}
      </h2>

      <p className="mt-3 max-w-2xl text-neutral-400">{description}</p>
    </div>
  );
};
