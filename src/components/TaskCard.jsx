import { Link } from "react-router-dom";

function TaskCard({ title, taskId, priority, cardType }) {
  const cardDivStyle = {
    display: "flex",
    minHeight: "88px",
    width: cardType === "listCard" ? "80%" : "260px",
    backgroundColor: "#ffffff72",
    borderRadius: "20px",
    gap: "22px",
    justifyContent:
      cardType === 'listCard' ? 'space-between' : 'center',
    padding:
      cardType === 'listCard' ? '0px 20px' : null,
    alignItems: "center",
  };

  const piorityDivStyle = {
    height: "32px",
    width: "32px",
    borderRadius: "100px",
    backgroundColor:
      priority === "High"
        ? "red"
        : priority === "Medium"
          ? "yellow"
          : priority === "Low"
            ? "green"
            : null,
  };

  const titleStyle = {
    width:
      cardType === 'listCard' ? '100%' : "180px",
    color: "#000000",
    fontSize:
      cardType === 'listCard' ? '20px' : null
  }

  return (
    <div className="task-card" style={cardDivStyle}>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
        {cardType === 'listCard' ? (<input className="checkbox" type="checkbox" />) : null}
        <Link to={`/task/${taskId}`}>
        <p style={titleStyle}>{title}</p>
        </Link>
      </div>
      <div style={piorityDivStyle}></div>
    </div>
  );
}

export default TaskCard;
