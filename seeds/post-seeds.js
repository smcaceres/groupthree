const { Post } = require('../models');

const postData = [{
        title: 'Gone with the',
        content: 'The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time. (Tom Cargill) Software is like sex: It’s better when it’s free. (Linus Torvalds) I think there’s a world market for about 5 computers. (Thomas J. Watson, Chairman of the Board, IBM, circa 1948) Deleted code is debugged code. (Jeff Sickel) Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. (Martin Golding)',
        user_id: 1

    },
    {
        title: 'Technology',
        content: 'For a long time it puzzled me how something so expensive, so leading edge, could be so useless. And then it occurred to me that a computer is a stupid machine with the ability to do incredibly smart things, while computer programmers are smart people with the ability to do incredibly stupid things. They are, in short, a perfect match. (Bill Bryson) True innovation often comes from the small startup who is lean enough to launch a market but lacks the heft to own it. (Timm Martin) Considering the current sad state of our computer programs, software development is clearly still a black art, and cannot yet be called an engineering discipline. (Bill Clinton) The cheapest, fastest, and most reliable components are those that aren’t there. (Gordon Bell) Optimism is an occupational hazard of programming; feedback is the treatment. (Kent Beck)',
        user_id: 2
    },
    {
        title: 'Beta Testing',
        content: 'Software undergoes beta testing shortly before it’s released. Beta is Latin for “still doesn’t work”. (Anonymous) Writing code has a place in the human hierarchy worth somewhere above grave robbing and beneath managing. (Gerald Weinberg) There are only two kinds of programming languages: those people always bitch about and those nobody uses. (Bjarne Stroustrup) Writing in C or C++ is like running a chain saw with all the safety guards removed. (Bob Gray) A good programmer is someone who always looks both ways before crossing a one-way street. (Doug Linder)',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;