import { Tzoer } from 'types/tzoer';

const saveLoggedTzoer = (tzoer: Tzoer): void =>
  localStorage.setItem('loggedTzoer', JSON.stringify(tzoer));

const getLoggedTzoer = (): Tzoer => JSON.parse(localStorage.getItem('loggedTzoer') as string);

const isLoggedTzoer = (): boolean => !!localStorage.getItem('loggedTzoer');

const removeLoggedTzoer = (): void => localStorage.removeItem('loggedTzoer');

const adminPermissions = ['מנהל', 'סגל']
const editSchedulePermissions = ['מנהל', 'מהמ', 'ממש', 'סגל']
const tzoerPermissions = ['צוער',]

const auth = { saveLoggedTzoer, getLoggedTzoer, removeLoggedTzoer, isLoggedTzoer, adminPermissions, editSchedulePermissions, tzoerPermissions };


export default auth;
