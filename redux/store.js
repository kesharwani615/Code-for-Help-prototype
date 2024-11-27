import { configureStore } from "@reduxjs/toolkit";
import proccessContentManagementSlice from './features/ProcessContentManagement';
import auth from './features/authUser'
import CounterSlice from './features/DashboardCounter'

const store = configureStore({
  reducer: {
    proccessContentManagement:proccessContentManagementSlice,
    authUser:auth,
    Counter:CounterSlice
    },
  });
  
  export default store;