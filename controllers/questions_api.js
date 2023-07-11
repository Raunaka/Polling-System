// import models
const Question = require('../models/question');
const Option = require('../models/option');


module.exports.createQuestion = async function(req, res){

    try {
        console.log(req.url);
        console.log(req.body);
        const { id, title } = req.body;
        if (!id || !title) {
            return res.status(400).json({ message: "id and title are required fields" });
        }
        const question = await Question.create({

            id: id,
            title: title,

        });
        console.log(question);

        if (question) {
            return res.status(200).json({
                questionCreated: question,
                message: "New Question Created Successfully!!"

            });

        } else {
            return res.status(400).json({
                message: "Unable to Create Question"
            });

        }

    } catch (err) {

        console.log('Error while creating question', err);
        return res.status(500).json({
            message: "Internal Server Error in Creating a Question!"
        });

    }

}
module.exports.createOption = async (req, res) => {

    try {

        let question = await Question.findById(req.params.id);

        if (question) {
            // create an option
            const id = question.options.length + 1;

            let option = await Option.create({

                id: id,
                question: req.params.id,
                text: req.body.text,
                votes: 0,

            });

            option.link_to_vote = "http://localhost:8000/options/" + option._id + "/addVote";

            option.save();

            question.options.push(option);
            question.save();

            return res.status(200).json({
                option,
                message: "New Option Created Successfully!!"
            });

        }

        return res.json({
            question
        });

    } catch (err) {

        console.log('error while creating option', err);

        return res.status(500).json({

            message: "Internal Server Error While Creating an Option!"

        });

    }
}


module.exports.viewQuestion = async (req, res) => {

    try {

        let displayQuestion = await Question.findById(req.params.id).populate('options');

        if (displayQuestion) {

            return res.status(200).json({
                questionDisplayed: displayQuestion,
                message: "Question displayed successfully!!"
            });

        }

    } catch (err) {

        console.log('Error while Viewing Questions', err);
        return res.status(500).json({
            message: "Internal Server Error while viewing Question!"
        });
    }


}


module.exports.deleteQuestion = async (req, res) => {

    try {

        let id = req.params.id;

        let question = await Question.findById(id).populate({
            path: 'options',
            select: 'votes',

        });

        if (question) {

            // checking if any option has some votes already
            let options = question.options;

            for (let i = 0; i < options.length; i++) {
                if (options[i].votes > 0) {

                    return res.status(404).json({
                        message: "Question cannot be deleted, it's options are voted already !"
                    });
                }
            }

            // if no any votes on any option of question
            await Option.deleteMany({ question: id });
            await Question.findByIdAndDelete(id);

            return res.status(200).json({
                message: "Question deleted Successfully!!"
            });

        } else {

            return res.status(404).json({

                message: "Question not found!"
            });
        }

    } catch (err) {

        console.log('Error while deleting question!', err);
        return res.status(500).json({

            message: "Internal Server Error in Deleting Question!"
        });

    }
}