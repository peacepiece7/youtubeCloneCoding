import videoDB from "../fakeDB"


export const home = (req,res) => res.render("home",{pageTitle: "Home",videoDB});
export const search = (req,res) => {
    const { query: { term: searchingBy}} = req;
    // const searchingBy = query.term.term 윗 줄과 동일한 내용임!
    console.log(searchingBy)
    res.render("search",{pageTitle: "Search", searchingBy:searchingBy});
}
export const videos = (req,res) => res.render("videos",{pageTitle: "Videos"});
export const upload = (req,res) => res.render("upload",{pageTitle: "Upload"});
export const videoDetail = (req,res) => res.render("videoDetail",{pageTitle: "VideoDetail"});
export const editVideo = (req,res) => res.render("editVideo",{pageTitle: "EditVideo"});
export const deleteVideo = (req,res) => res.render("deleteVideo",{pageTitle: "DeleteVideo"});