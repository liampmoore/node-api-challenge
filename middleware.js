const projectDB = require('./data/helpers/projectModel');
const actionDB = require('./data/helpers/actionModel');

const validateProjectId = async (req, res, next) => {
try {
    let project = await projectDB.get(req.params.projectID);
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

const validateActionId = async (req, res, next) => {
    try {
        let action = await actionDB.get(req.params.actionID);
        if (project) {
            req.action = action
            next()
        }
        else {
            res.status(400).json({error: "No action with that id."})
        }
    }
    catch(err) {
        console.error(err)
    }
    }

module.exports = {
    validateProjectId,
    validateActionId
};