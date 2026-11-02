let jobs = [
  { id: 1, company: "Acme", ctc: 6 },
  { id: 2, company: "Globex", ctc: 9 },
];

export const getJobs = (req, res) => res.json(jobs);

export const getJob = (req, res) => {
  const job = jobs.find((j) => j.id === Number(req.params.id));
  if (!job) return res.status(404).json({ message: "Not found" });
  res.json(job);
};

export const addJob = (req, res) => {
  const job = { id: Date.now(), ...req.body };
  jobs.push(job);
  res.status(201).json(job);
};

export const updateJob = (req, res) => {
  const i = jobs.findIndex((j) => j.id === Number(req.params.id));
  if (i === -1) return res.status(404).json({ message: "Not found" });
  jobs[i] = { ...jobs[i], ...req.body };
  res.json(jobs[i]);
};

export const deleteJob = (req, res) => {
  const id = Number(req.params.id);
  if (!jobs.some((j) => j.id === id)) return res.status(404).json({ message: "Not found" });
  jobs = jobs.filter((j) => j.id !== id);
  res.status(204).end();
};
