export function Input({ name, label, changeHandler, type }) {
  return (
    <div className="input-wrapper">
      <h5>{label}</h5>
      <input name={name} type={type} onChange={changeHandler} />
    </div>
  );
}
