export function Loading({ isLoaded }) {
  return (
    <div className={`loading ${isLoaded ? "hidden" : ""}`}>
      <h1>Please enter your information.</h1>
    </div>
  );
}
