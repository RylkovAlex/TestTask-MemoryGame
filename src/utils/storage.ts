import constants from "src/constants/constants";

class Storage {
  private storage: string;

  constructor(storageName: string) {
    this.storage = storageName;
    if (!localStorage.getItem(storageName)) {
      // ofcourse in localStorage should be just [], but ... you know ^^
      const admin = [
        {
          name: "Aleksandr Rylkov",
          results: [{ date: Date.now(), mistakes: 0, time: 5 }],
          isLogged: false,
        },
      ];
      localStorage.setItem(storageName, JSON.stringify(admin));
    }
  }

  getUser(name: string) {
    return JSON.parse(localStorage.getItem(this.storage)!).find(
      (user: UserState) => user.name === name
    );
  }

  getResults() {
    const users = this.getUsers();
    const results: Result[] = [];
    users.forEach((user) => {
      user.results.forEach((result) => {
        results.push({
          name: user.name,
          date: result.date,
          mistakes: result.mistakes,
          time: result.time,
        });
      });
    });
    return results;
  }

  getCurrentUser(name: string) {
    return JSON.parse(localStorage.getItem(this.storage)!).find(
      (user: UserState) => user.isLogged
    );
  }

  addUser(user: UserState) {
    const newData = [...this.getUsers(), user];
    this.setUsers(newData);
  }

  getUsers(): UserState[] {
    return JSON.parse(localStorage.getItem(this.storage)!);
  }

  setUsers(users: UserState[]) {
    localStorage.setItem(this.storage, JSON.stringify(users));
  }

  logIn(user: UserState) {
    const users = this.getUsers();
    const index = users.findIndex((u) => u.name === user.name);
    users[index].isLogged = true;
    this.setUsers(users);
  }

  saveNewResult(user: UserState, result: UserResult) {
    const users = this.getUsers();
    const index = users.findIndex((u) => u.name === user.name);
    users[index].results = [...users[index].results, result];
    this.setUsers(users);
  }

  logOut() {
    const users = this.getUsers().map((user) => ({ ...user, isLogged: false }));
    this.setUsers(users);
  }

  getLoggedUser() {
    return this.getUsers().find((user) => user.isLogged);
  }
}

export const storage = new Storage(constants.STORAGE_NAME);
