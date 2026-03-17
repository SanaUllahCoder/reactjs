import React from 'react'
import Card from './components/Card';

const App = () => {
  const jobs = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://images.icon-icons.com/1195/PNG/512/1490889698-amazon_82521.png",
    posted: "5 days ago",
    title: "Senior UI/UX Designer",
    type: "Part-Time",
    mode: "Remote",
    salary: "$120/hours",
    location: "Karachi, Pakistan"
  },
  {
    id: 2,
    company: "Google",
    logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
    posted: "2 days ago",
    title: "Frontend Developer",
    type: "Full-Time",
    mode: "Onsite",
    salary: "$150/hours",
    location: "Lahore, Pakistan"
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    posted: "1 week ago",
    title: "Backend Developer",
    type: "Full-Time",
    mode: "Remote",
    salary: "$140/hours",
    location: "Islamabad, Pakistan"
  },
  {
    id: 4,
    company: "Meta",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png",
    posted: "3 days ago",
    title: "React Developer",
    type: "Contract",
    mode: "Remote",
    salary: "$130/hours",
    location: "Karachi, Pakistan"
  },
  {
    id: 5,
    company: "Netflix",
    logo: "https://cdn-icons-png.flaticon.com/512/5977/5977590.png",
    posted: "4 days ago",
    title: "UI Designer",
    type: "Part-Time",
    mode: "Onsite",
    salary: "$110/hours",
    location: "Dubai, UAE"
  },
  {
    id: 6,
    company: "Spotify",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174872.png",
    posted: "6 days ago",
    title: "Product Designer",
    type: "Full-Time",
    mode: "Remote",
    salary: "$125/hours",
    location: "Remote"
  }
];

  return (
    <div className="parent">
      {jobs.map(job => (
        <Card key={job.id} job={job} />
      ))}
    </div>
  )
}

export default App
