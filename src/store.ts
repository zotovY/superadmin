import { observable } from "mobx";

class UserServices {
    @observable username: string = "zotovY";
    @observable password: string = "";
    @observable uid: string = "";
    @observable redirectTo: string = "/admin/";

    isLogin = (): boolean => {
        if (this.uid) {
            return [12, 24].includes(this.uid.length);
        }

        const uid = localStorage.getItem("uid");

        if (!uid) return false;

        return true;
    };

    checkUser = (username: string, password: string): boolean => {
        return true;
    };
}

export default new UserServices();
