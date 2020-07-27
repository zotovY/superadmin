declare module "*.svg" {
    import React = require("react");
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module "react-protected-route-component";

declare enum Role {
    King = "King",
    Admin = "admin",
    Developer = "Developer",
}

declare interface IAbilities {
    manageusers: Role[];
    submitRequests: Role[];
}

declare const Abilities: IAbilities = {
    manageusers: [Role.King],
    submitRequests: [Role.Admin, Role.King],
};

declare interface IUser {
    username: string;
    password: string;
    email: string;
    name: string;
    photoUrl: string;
    role: Role;
}
