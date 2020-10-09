import * as LoginActions from './loginAction';
import * as EmployeeActions from './employeeAction';

const allActions = {
  ...LoginActions,
  ...EmployeeActions,
};
export default {...allActions};
