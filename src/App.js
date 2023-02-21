import Editor from "./Editor";

export default function App() {
  return (
    <div className="hero min-h-screen bg-neutral" data-theme="garden">
      <div className="bg-base-100 prose prose-slate max-w-none">
        <Editor />
      </div>
    </div>
  );
}