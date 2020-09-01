var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SolutionSchema = new Schema({
    solution: {
        type: Array,
        required: true
    },
    unused: {
        type: String,
        default: " "
    },
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    },
    neu: {
        type: Number,
        default: 0
    },
    useful: {
        type: Number,
        default: 0
    },
    counter: {
        type: Number,
        default: 0
    }
});

var Solution = mongoose.model('Solution', SolutionSchema, 'Solutions');

var SolutionAllSchema = new Schema({
    solution: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Solution'
    },
    VP_id: {
        type: String
    },
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    },
    study: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Study'
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    },
    group_name: {
        type: String
    }
},
    {
        timestamps: true
    }
);


var SolutionAll = mongoose.model('SolutionAll', SolutionAllSchema, 'All Solutions');

module.exports = {
    Solution,
    SolutionSchema,
    SolutionAll,
    SolutionAllSchema
}
