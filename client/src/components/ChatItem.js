function ChatItem({ item }) {
  return (
    <div style={item.fromMe ? styles.chatItemRigth : styles.chatItem}>
      {item.message}
    </div>
  );
}

export default ChatItem;

const styles = {
  chatItem: {
    fontSize: 18,
    color: "#333",
    borderRadius: 8,
    background: "#fff",
    padding: "12, 18",
    border: "0.5px solid rgba(0, 0, 0, 0.02)",
    boxShadow: "0 2px 1px rgba(0, 0, 0, 0.08)",
    maxWidth: "70%",
    display: "inline-block",
    textAlign: "left",
    marginBottom: 6,
    marginRight: "auto",
  },
  chatItemRigth: {
    fontSize: 18,
    color: "#333",
    borderRadius: 8,
    background: "#fff",
    padding: "12",
    border: "0.5px solid rgba(0, 0, 0, 0.02)",
    boxShadow: "0 2px 1px rgba(0, 0, 0, 0.08)",
    maxWidth: "70%",
    display: "inline-block",
    textAlign: "left",
    marginBottom: 6,
    marginRight: "auto",
    marginRight: 0,
    marginLeft: "auto",
  },
};
