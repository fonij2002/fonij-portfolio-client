interface Props {
  title: string;
  response: string;
}

export const ResponsePanel = ({ title, response }: Props) => {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-medium text-white">{title}</h3>

        <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
          Generated
        </div>
      </div>

      <div className="prose prose-invert max-w-none text-neutral-300">
        <p className="whitespace-pre-wrap leading-8">{response}</p>
      </div>
    </div>
  );
};
