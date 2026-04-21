import { DashboardState, DashboardAction } from "@/types/dashboard";

const dashboardReducer = (
  state: DashboardState, 
  action: DashboardAction
): DashboardState => {
  switch (action.type) {
    case 'filters/setDateRange': {
      const newDateRange = action.payload;
      return {
        ...state, 
        filters: { ...state.filters, dateRange: newDateRange }
      };
    }
    case 'filters/setCategory': {
      const newCategory = action.payload;
      return {
        ...state,
        filters: { ...state.filters, category: newCategory }
      };
    }
    case 'filters/setChannel': {
      const newChannel = action.payload;
      return {
        ...state,
        filters: { ...state.filters, channel: newChannel }
      };
    }
    case 'widget/add': {
      const newWidget = action.payload;
      return {
        ...state,
        widgets: [ ...state.widgets, newWidget ]
      };
    }
    case 'widget/remove': {
      const id = action.payload.id;
      return {
        ...state,
        widgets: state.widgets.filter(widget => widget.id !== id)
      };
    }
    default:
      return state;
  } 
};

export default dashboardReducer;