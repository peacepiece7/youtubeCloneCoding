import routes from "../routes"
export const users = (req,res) => res.render("users",{pageTitle: "Users"});

export const getJoin = (req,res) => res.render("join",{pageTitle: "Join"});
export const postJoin = (req,res) => {
    res.render("join",{pageTitle: "Join"});
}

export const getLogin = (req,res) => res.render("login",{pageTitle: "Log In"});
export const postLogin = (req,res) => {
    res.redirect(routes.home);
};
export const logout = (req,res) => {
    res.redirect(routes.home)
}

export const userDetail = (req,res) => res.render("userDetail",{pageTitle: "UserDetail"});
export const editProfile = (req,res) => res.render("editProfile",{pageTitle: "EditProfile"});
export const changePassword = (req,res) => res.render("changePassword",{pageTitle: "ChangePassword"});