function Greetings(props) {
return (
<div className="card">
<h2>{props.name}</h2>
<p>
Course: {props.course}
</p>
<p>
Marks: {props.marks}
</p>
</div>
);
}
export default Greetings;