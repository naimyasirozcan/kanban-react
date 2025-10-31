

function TitleAndDescription(props) {
    const containerStyle = {
        textAlign: "center",
        marginTop: "100px",

        
    }

  return (
    <div style={containerStyle}>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
    </div>
  )
}

export default TitleAndDescription
