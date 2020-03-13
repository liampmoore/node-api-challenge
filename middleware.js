const projectDB = require('./data/helpers/projectModel');

const validateProjectId = async (req, res, next) => {
try {
    let project = await projectDB.get(req.params.id);
    if (project) {
        req.project = project
        next()
    }
    else {
        res.status(400).json({error: "No project with that id."})
    }
}
catch(err) {
    console.error(err)
}
}

module.exports = {
    validateProjectId
};