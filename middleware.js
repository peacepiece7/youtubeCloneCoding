import routes from "./routes"

export const localMiddleware = (req, res, next) =>{
    res.locals.siteName = "weTube";
    res.locals.routes = routes;
    next();
}; 