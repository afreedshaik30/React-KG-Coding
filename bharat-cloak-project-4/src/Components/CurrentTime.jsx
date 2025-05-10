let time  = new Date();

const CurrentTime = () => {
  return (
    <p className="lead">
      Current time: {time.toLocaleDateString()} - {" "}
      {time.toLocaleTimeString()}
    </p>
  )
}

export default CurrentTime