import styles from "./user.module.css";

function User() {
  return (
    
      <div className={styles.tablecontainer}>
        <h1>
          <b>USERS</b>
        </h1>

        <table>
          <thead>
            <tr>
              <th>Tender Name</th>
              <th>Created By</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tender 1</td>
              <td>John Doe</td>
              <td>2024-07-01</td>
              <td>2024-07-15</td>
              <td>
                <button>View</button>
              </td>
            </tr>
            <tr>
              <td>Tender 2</td>
              <td>Jane Smith</td>
              <td>2024-07-05</td>
              <td>2024-07-20</td>
              <td>
                <button>View</button>
              </td>
            </tr>
            <tr>
              <td>Tender 2</td>
              <td>Jane Smith</td>
              <td>2024-07-05</td>
              <td>2024-07-20</td>
              <td>
                <button>View</button>
              </td>
            </tr>
            <tr>
              <td>Tender 2</td>
              <td>Jane Smith</td>
              <td>2024-07-05</td>
              <td>2024-07-20</td>
              <td>
                <button>View</button>
              </td>
            </tr>
            <tr>
              <td>Tender 2</td>
              <td>Jane Smith</td>
              <td>2024-07-05</td>
              <td>2024-07-20</td>
              <td>
                <button>View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
  );
}

export default User;
