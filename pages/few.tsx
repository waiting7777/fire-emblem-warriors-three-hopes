const Few = () => {
  return (
    <div className="container mx-auto min-h-screen">Few
    <button
      type="button"
      onClick={() => {
        throw new Error("Sentry Frontend Error production");
      }}
    >
      Throw error
    </button>
    </div>
  )
}

export default Few