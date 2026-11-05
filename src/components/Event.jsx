function Event() {
  return (
    <div onClick={() => alert("1 clicked")}>
      <div onClick={() => { alert("2 clicked")}}>
        <button onClick={(event)=>{event.stopPropagation(); alert("3111 clicked")}}>button</button>
      </div>
    </div>
  );
}

export default Event;