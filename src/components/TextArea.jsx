export function TextArea({ name, label, changeHandler, type }) {
  return (
    <div className="input-wrapper">
      <h5>{label}</h5>
      <textarea name={name} type={type} onChange={changeHandler} />
    </div>
  );
}
