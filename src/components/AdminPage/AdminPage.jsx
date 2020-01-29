import React from "react";
import RestaurantTable from '../RestaurantTable/RestaurantTable';

function AdminPage(props) {
  return (
    <div data-testid="admin-page">
      <RestaurantTable restaurants={props} />
    </div>
  )
}

export default AdminPage;
