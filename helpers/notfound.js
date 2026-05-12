const notFound = (req,res) => {
    res.status(404).json({ success: false, message: "Page not found" });
}

module.exports = notFound;