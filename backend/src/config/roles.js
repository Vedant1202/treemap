const roles = ['user', 'admin'];

const roleRights = new Map();
roleRights.set(roles[0], ['getUsers', 'manageUsers', 'getTrees']);
roleRights.set(roles[1], ['getUsers', 'manageUsers', 'getTrees']);

module.exports = {
  roles,
  roleRights,
};
