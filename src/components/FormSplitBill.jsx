import Button from "./Button";
function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split the bill with X</h2>

      <label>💸 Bill amount</label>
      <input type="text" />
      <label>🧍Your expense</label>
      <input type="text" />
      <label>🧑‍🤝‍🧑 X's expense</label>
          <input type="text" />
          
          <label>💰 Who is paying the bill</label>
          <select name="" id="">
            <option value="user">You</option>
            <option value="friend">X</option>
          </select>

      <Button>Add</Button>
    </form>
  );
}

export default FormSplitBill