"use strict";

/* How does this work?

  1. Lambda function is serverless.
  2. Whenever a request is sent to the API Gateway by Microsoft Flow, the lambda function is executed.
  3. The requested information is sent back by the lambda function and the information is then formatted and posted into Microsoft Teams.

*/

module.exports.getHello = (event, context, callback) => {
  var currentdate = new Date();
  var datetime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `<h1> This is a lambda function. The current date and time (in us-east-1): ${datetime} </h1> <br> <p> HTML & CSS work perfectly fine!</p> <br> <table style=\"padding: 3px;\">
      <tr style=\"padding: 3px;\">
        <th style=\"padding: 3px;\">Firstname</th>
        <th style=\"padding: 3px;\">Lastname</th>
        <th style=\"padding: 3px;\">Age</th>
      </tr>
      <tr style=\"padding: 3px;\">
        <td style=\"padding: 3px;\">Tony</td>
        <td style=\"padding: 3px;\">Kha</td>
        <td style=\"padding: 3px;\">19</td>
      </tr>
      <tr style=\"padding: 3px;\">
        <td style=\"padding: 3px;\">Test</td>
        <td style=\"padding: 3px;\">Test</td>
        <td style=\"padding: 3px;\">15</td>
      </tr>
    </table>`,
      input: event
    })
  };

  callback(null, response);
};
