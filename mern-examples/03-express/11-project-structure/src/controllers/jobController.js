// controller: the actual logic for each route
let jobs = [{ id: 1, company: "Acme" }];

export const getJobs = (req, res) => {
  res.json(jobs);
};

export const addJob = (req, res) => {
  const job = { id: Date.now(), ...req.body };
  jobs.push(job);
  res.status(201).json(job);
};
