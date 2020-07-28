import { observable, action } from "mobx";

class UserServices {
    constructor() {
        const setup = action(() => {
            const isLogin: boolean = this.isLogin();

            if (isLogin) {
                this.accessToken = localStorage.getItem("accessToken") ?? "";
                this.refreshToken = localStorage.getItem("refreshToken") ?? "";
            }
        });
        setup();
    }

    @observable username: string = "zotovY";
    @observable uid: string = "";
    @observable redirectTo: string = "/admin/login";
    @observable accessToken: string = "";
    @observable refreshToken: string = "";

    isLogin = (): boolean => {
        if (this.uid) {
            return [12, 24].includes(this.uid.length);
        }

        const uid = localStorage.getItem("uid");

        if (!uid) return false;

        return true;
    };

    saveUser = () => {};

    login = async (username: string, password: string) => {
        const response = await {
            success: true,
            accessToken: "some-access-Token",
            refreshToken: "some-refresh-Token",
            uid: "123",
        };

        console.log(123);

        if (response.success) {
            this.uid = response.uid;
            localStorage.setItem("uid", response.uid);
            localStorage.setItem("accessToken", response.accessToken);
            localStorage.setItem("refreshToken", response.refreshToken);
            this.redirectTo = "/admin";
            console.log("redirected!");
        }
    };

    @action logout = () => {
        localStorage.removeItem("uid");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        this.accessToken = "";
        this.refreshToken = "";
        this.username = "";
        this.redirectTo = "/admin";
    };

    redirect = (route: string) => (this.redirectTo = route);
}

export default new UserServices();
