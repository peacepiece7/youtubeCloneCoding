import routes from "../routes"
import Video from "../models/Video"


export const home = async (req, res) => {
    try {
        const videos = await Video.find({}).sort({ _id: 1 });
        res.render("home", { pageTitle: "Home", videos });
    }
    catch (error) {
        console.log(error)
        res.render("home", { pageTitle: "Home", videos: [] });
    }
}

export const search = async (req, res) => {
    const { query: { term: searchingBy } } = req;
    // const searchingBy = query.term.term 윗 줄과 동일한 내용임!
    let videos = [];
    try {
        videos = await Video.find({ title: { $regex: searchingBy, $options: "i" } })
    } catch (error) {
        console.log(error)
    }
    res.render("search", { pageTitle: "Search", searchingBy, videos });
}
export const videos = (req, res) => res.render("videos", { pageTitle: "Videos" });

export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
    const {
        body: { title, description },
        file: { path }
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
    const id = req.params.id
    // const { params: {id}} = req; 같음!
    try {
        const video = await Video.findById(id);
        console.log(video)
        res.render("videoDetail", { pageTitle: video.title, video });
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
}

export const getEditVideo = async (req, res) => {
    const id = req.params.id
    try {
        const video = await Video.findById(id);
        res.render("editVideo", { pageTitle: video.title, video })
    } catch (error) {
        res.redirect(routes.home)
    }
}
export const postEditVideo = async (req, res) => {
    console.log(req)
    const {
        params: { id },
        body: { title, description }
    } = req;
    try {
        await Video.findOneAndUpdate({ _id: id }, { title: title, description });
        res.redirect(routes.videoDetail(id))
    } catch (errer) {
        console.log(`editVideo is error`)
        res.redirct(routes.home)
    }
}
export const deleteVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        await Video.findByIdAndRemove({ _id: id })
    } catch (error) { }
    res.redirect(routes.home)
}