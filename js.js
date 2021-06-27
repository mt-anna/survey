Survey.StylesManager.applyTheme("modern");

var surveyJSON = {
  title: "Matchmaker",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "text",
          name: "question1",
          title: "Your Discord name (with tag)",
          isRequired: true,
        },
        {
          type: "radiogroup",
          name: "question2",
          title: "Your education level",
          isRequired: true,
          choices: [
            { value: "item1", text: "High school" },
            { value: "item2", text: "Bachelor's Degree" },
            { value: "item3", text: "Master's Degree" },
            { value: "item4", text: "PhD" },
          ],
          hasOther: true,
        },
        {
          type: "checkbox",
          name: "question3",
          title: "Preferred session length",
          isRequired: true,
          choices: [
            { value: "item1", text: "50/10" },
            { value: "item2", text: "25/5" },
          ],
          hasOther: true,
        },
        {
          type: "radiogroup",
          name: "question5",
          title: "Cams/SS?",
          isRequired: true,
          choices: [
            { value: "item1", text: "Yes" },
            { value: "item2", text: "No" },
            { value: "item3", text: "Optional" },
          ],
        },
        {
          type: "radiogroup",
          name: "question6",
          title: "Your gender",
          choices: [
            { value: "item1", text: "Female" },
            { value: "item2", text: "Male" },
            { value: "item3", text: "Other" },
          ],
        },
        {
          type: "checkbox",
          name: "question4",
          title: "Who do you want to study with?",
          choices: [
            { value: "item1", text: "Only my gender" },
            { value: "item2", text: "Members from my friend list" },
          ],
        },
      ],
    },
  ],
};

function sendDataToServer(survey) {
  // send ajax here
  alert("The results are:" + JSON.stringify(survey.data));
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
  model: survey,
  onComplete: sendDataToServer,
});
