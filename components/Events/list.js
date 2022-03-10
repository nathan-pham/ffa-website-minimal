const colors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-purple-500",
];

const list = [
    {
        name: "Welcome Back BBQ Jamboree",
        date: "August 13",
    },
    {
        name: "Gold Country Fair",
        date: "September 8",
    },
    {
        name: "Greenhand Leadership Conference",
        date: "September 21",
    },
    {
        name: "Homecoming",
        date: "October 18",
    },
    {
        name: "Harvest Festival & Trunk or Treat",
        date: "October 31",
    },
    {
        name: "National FFA Convention",
        date: "October 27",
    },
    {
        name: "Sectional Project Competition",
        date: "October 0",
    },
    {
        name: "Opening/Closing Ceremonies Contest",
        date: "November 17",
    },
    {
        name: "Tri-Tip Dinner To-Go Fundraiser",
        date: "November 18",
    },
    {
        name: "Fall Sectional Leadership Contests",
        date: "December 9",
    },
    {
        name: "MFE/ALA Leadership Conferences",
        date: "January 14",
    },
    {
        name: "Placer County Fair",
        date: "January 23",
    },
    {
        name: "Sierra Buttes Section Leadership Contests",
        date: "January 29",
    },
    {
        name: "Arbuckle CDE Field Day",
        date: "February 5",
    },
    {
        name: "Future 9th Grade Night",
        date: "February 12",
    },
    {
        name: "Superior Region FFA Leadership Contest",
        date: "February 18",
    },
    {
        name: "National FFA Week",
        date: "February 19",
    },
    {
        name: "UC Davis CDE Field Day",
        date: "March 5",
    },
    {
        name: "Tri Tip To-Go Dinner",
        date: "March 10",
    },
    {
        name: "Superior Region FFA Leadership Contests",
        date: "March 18",
    },
    {
        name: "93rd State FFA Leadership Conference",
        date: "March 26",
    },
    {
        name: "Gold Country Fair",
        date: "April 0",
    },
    {
        name: "Ag Expo",
        date: "April 23",
    },
    {
        name: "Chapter Awards Banquet",
        date: "April 0",
    },
    {
        name: "Placer County Fair",
        date: "April 0",
    },
].map((e, i) => ({
    ...e,
    color: colors[new Date(e.date).getMonth() % colors.length],
}));

export default list;
