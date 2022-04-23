import { Tzoer } from 'types/tzoer';

const saveLoggedTzoer = (tzoer: Tzoer): void =>
  localStorage.setItem('loggedTzoer', JSON.stringify(tzoer));

const getLoggedTzoer = (): Tzoer => JSON.parse(localStorage.getItem('loggedTzoer') as string);

const isLoggedTzoer = (): boolean => !!localStorage.getItem('loggedTzoer');

const removeLoggedTzoer = (): void => localStorage.removeItem('loggedTzoer');

const addOrDeleteTzoerPermissions = ['מנהל', 'סגל']
const editSchedulePermissions = ['מנהל', 'סמפ', 'ממש', 'קהד', 'סגל']

const auth = { saveLoggedTzoer, getLoggedTzoer, removeLoggedTzoer, isLoggedTzoer, addOrDeleteTzoerPermissions, editSchedulePermissions };


export default auth;
