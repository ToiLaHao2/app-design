let managers = [
    {
        account: "JD1",
        name: "John Doe",
        password: "123",
    },
];
let reports = [
    {
        reportId: "r1",
        status: "unknown",
        issue: "bad bin",
        image: "",
        description: "this is a bad bin",
    },
];
function login(account, password) {
    for (let manager of managers) {
        if (manager.account == account && manager.password == password) {
            return 1;
        }
    }
    return 0;
}
