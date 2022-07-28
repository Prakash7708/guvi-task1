//Find all the topics and tasks which are thought in the month of October
db.zenclass.findOne({},{"Topics.Oct":1})
db.zenclass.findOne({},{"Tasks.Oct":1})


//Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.zenclass.find({$or:[{"CompanyDrives.date":{$gt:"15-10-2020"}},{"CompanyDrives.date":{$lt:"31-10-2020"}}]},{"CompanyDrives.name":1})


//Find all the company drives and students who are appeared for the placement.
db.zenclass.find({},{"CompanyDrives.Placement":1})


//Find the number of problems solved by the user in codekata
db.zenclass.findOne({},{"codeKata-solvedpbms.user1":1}) //for one student
db.zenclass.find({},{"codeKata-solvedpbms":1}) //for all students


//Find all the mentors with who has the mentee's count more than 15
db.zenclass.find({"mentors.students":{$gt:15}},{"mentors.name":1})


//Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.zenclass.find({$or:[{"users.BendingTasks.Oct":{$gt:"15-10-2020"}},{"users.BendingTasks.Oct":{$lt:"31-10-2020"}}]},{"users.name":1})
db.zenclass.find({$or:[{"attendance.Absentdates.Oct":{$gt:"15-10-2020"}},{"attendance.Absentdates.Oct":{$lt:"31-10-2020"}}]},{"attendance.users":1})
