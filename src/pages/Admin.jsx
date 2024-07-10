
import './adminForm.css';

function AdminForm() {
  return (
    <div className="form-container">
      <h1><b>ADMIN FORM</b></h1>
      <form>
        <div className="form-group">
          <label htmlFor="tenderName">Tender Name</label>
          <input type="text" id="tenderName" name="tenderName" required />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input type="date" id="startDate" name="startDate" required />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input type="date" id="endDate" name="endDate" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AdminForm;
