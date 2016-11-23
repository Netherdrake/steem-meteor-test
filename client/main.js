import steem from 'steem';
import './main.html';

steem.broadcast.vote("5KAmawRVwhLRc41NECMeqfGCuq6Zj3xu6BK2Hj4a3rqS23GBB9Y", "barbara2",
    "steemfest", "steemfest-interview-series-xeroc", 10000, function(err, result) {
    console.log(err, result);
});
