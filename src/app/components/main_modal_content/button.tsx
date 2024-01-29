export function SecondaryButton({ on_click }: any) {
  return (
    <button
      className="del_btn block p-1 mt-4 text-white font-bold bg-red-500 "
      onClick={on_click}
    >
      CONTINUE
    </button>
  );
}

export function PrimaryButton({ title, on_click }: any) {
  return (
    <button
      style={{ width: 525, height: 51 }}
      className={`px-6 m-1 py-2 font-bold text-white bg-red-600`}
      onClick={on_click}
    >
      {title}
    </button>
  );
}
