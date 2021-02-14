import multer from "multer"
import routes from "./routes"

const multerVideo = multer({ dest: "uploads/videos/" });

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "weTube";
    res.locals.routes = routes;
    res.locals.user = req.user || null;
    //passport에서 알아서 인증하고 아이디 부여하고 하니까 필요 없음!
    //{isAuthenticated: false,
    //id: 1}
    next();
};
export const uploadVideo = multerVideo.single("videoFile");