const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const { getCompliment, getFortune, getAllGoals, createGoal, deleteGoal, getThrow, getMadLib } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get(`/api/fortune`, getFortune);
app.get(`/api/goals`, getAllGoals);
app.post(`/api/goals`, createGoal);
// app.delete(`/api/goals/:id`, deleteGoal); //delete method not working, getting a 405. It's modeled identically to the delete method in our backend-2 lab from frontend to backend (double-checked numerous times), and I can't figure out why it's failing after looking around for hours. Google/stack exchange thinks it might be a cors issue, but I can't figure it out
app.post(`/api/rockpaperscissors`, getThrow)
app.post(`/api/madlib`, getMadLib);

app.listen(4000, () => console.log("Server running on 4000"));