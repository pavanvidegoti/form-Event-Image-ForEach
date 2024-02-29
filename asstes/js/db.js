let cl = console.log;

let playerArray = [
    {
        "name": "Virat Kohli",
        "Role": "Batter",
        "image": "/2.png",
        "Team":"RCB"
    },
    {
        "name": "MS Dhoni - (C)",
        "Role": "WK Keeper-Batter",
        "image": "/57.png",
        "captain": "C",
        "Team":"CSK"

    },
    {
        "name": "David Warner - (C)",
        "Role": "Batter",
        "image": "/214.png",
        "captain": "C",
        "Team":"DC"
    },
    {
        "name": "Shubhman Gill - (C)",
        "Role": "Batter",
        "image": "/62.png",
        "captain": "C",
        "Team":"GT"
    },
    {
        "name": "Shreyas Iyyer - (C)",
        "Role": "Batter",
        "image": "/12.png",
        "captain": "C",
        "Team":"KKR"
    },
    {
        "name": "KL Rahul - (C)",
        "Role": "WK Keeper-Batter ",
        "image": "/19.png",
        "captain": "C",
        "Team":"LSG"
    },
    {
        "name": "Rohit Sharma - (C)",
        "Role": "Batter",
        "image": "/6.png",
        "captain": "C",
        "Team":"MI"
    },
    {
        "name": "Devon Conway",
        "Role": "Batter",
        "image": "/601.png",
        "Team":"CSK"
    },
    {
        "name": "Kane Willianson",
        "Role": "Batter",
        "image": "/65.png",
        "Team":"GT"
    },
    {
        "name": "Shikhar Dhawan - (C)",
        "Role": "Batter",
        "image": "/11.png",
        "captain": "C",
        "Team":"PK"
    },
    {
        "name": "Sanju Samson - (C)",
        "Role": "WK Keeper-Batter",
        "image": "/190.png",
        "captain": "C",
        "Team":"RR"
    },
    {
        "name": "Quinton De Kock",
        "Role": "WK Keeper-Batter",
        "image": "/170.png",
        "Team":"LSG"
    },
    {
        "name": "Rinku Singh",
        "Role": "Batter",
        "image": "/152.png",
        "Team":"KKR"
    },
    {
        "name": "Prithvi Shaw",
        "Role": "Batter",
        "image": "/51.png",
        "Team":"DC"
    },
    {
        "name": "SuryaKumar Yadav",
        "Role": "Batter",
        "image": "/174.png",
        "Team":"MI"
    },
    {
        "name": "David Miller",
        "Role": "Batter",
        "image": "/128.png",
        "Team":"GT"
    },
    {
        "name": "Jitesh Sharma",
        "Role": "WK Keeper-Batter",
        "image": "/1000.png",
        "Team":"PK"
    },
    {
        "name": "Adam Markram - (C)",
        "Role": "Batter",
        "image": "/287.png",
        "captain": "C",
        "Team":"SRH"
    },
    {
        "name": "Nicholas Pooran",
        "Role": "WK Keeper-Batter",
        "image": "/136.png",
        "Team":"LSG"
    },
    {
        "name": "Jos Buttler",
        "Role": "Batter",
        "image": "/182.png",
        "Team":"RR"
    },
    {
        "name": "Rahul Tripati",
        "Role": "Batter",
        "image": "/188.png",
        "Team":"SRH"
    },
    {
        "name": "Yash Dhull",
        "Role": "Batter",
        "image": "/777.png",
        "Team":"DC"
    },
    {
        "name": "Nitish Rana",
        "Role": "Batter",
        "image": "/148.png",
        "Team":"KKR"
    },
    {
        "name": "Wridhhiman Shah",
        "Role": "WK Keeper-Batter",
        "image": "/225.png",
        "Team":"GT"
    },
    {
        "name": "Ravindra Jadeja",
        "Role": "All-Rounder",
        "image": "/46.png",
        "Team":"CSK"
    },
    {
        "name": "Krunal Pandya",
        "Role": "All-Rounder",
        "image": "/17.png",
        "Team":"LSG"
    },
    {
        "name": "Ishan Kishan",
        "Role": "WK Keeper-Batter",
        "image": "/164.png",
        "Team":"MI"
    },
    {
        "name": "Aksar Patel",
        "Role": "All-Rounder",
        "image": "/110.png",
        "Team":"DC"
    },
    {
        "name": "Jonny Bairstow",
        "Role": "Batter",
        "image": "/216.png",
        "Team":"PK"
    },
    {
        "name": "Yashasvi Jaiswal",
        "Role": "Batter",
        "image": "/533.png",
        "Team":"RR"
    },
    {
        "name": "Deepak Hooda",
        "Role": "All-Rounder",
        "image": "/215.png",
        "Team":"LSG"
    },
    {
        "name": "Sai Sudarshan",
        "Role": "Batter",
        "image": "/976.png",
        "Team":"GT"
    },
    {
        "name": "Mitchell Marsh",
        "Role": "All-Rounder",
        "image": "/40.png",
        "Team":"DC"
    },
    {
        "name": "Andre Russell",
        "Role": "All-rounder",
        "image": "/141.png",
        "Team":"KKR"
    },
    {
        "name": "Liam Livingstone",
        "Role": "All-Rounder",
        "image": "/183.png",
        "Team":"PK"
    },
    {
        "name": "Shimron Hetmyer",
        "Role": "Batter",
        "image": "/210.png",
        "Team":"RR"
    },
    {
        "name": "Henrich Klassen",
        "Role": "WK Keeper-Batter",
        "image": "/202.png",
        "Team":"SRH"
    },
    {
        "name": "Rashid Khan",
        "Role": "All-Rounder",
        "image": "/218.png",
        "Team":"GT"
    },
    {
        "name": "Marcus Stoinis",
        "Role": "All-Rounder",
        "image": "/23.png",
        "Team":"LSG"
    },
    {
        "name": "Mitchell Santner",
        "Role": "All-Rounder",
        "image": "/75.png",
        "Team":"CSK"
    },
    {
        "name": "Sam Curran",
        "Role": "All-Rounder",
        "image": "/138.png",
        "Team":"PK"
    },
    {
        "name": "Venkatesh Iyer",
        "Role": "All-Rounder",
        "image": "/584.png",
        "Team":"KKR"
    },
    {
        "name": "Anrich Nortje",
        "Role": "Bowler",
        "image": "/142.png",
        "Team":"DC"
    },
    {
        "name": "Tim David",
        "Role": "Batter",
        "image": "/636.png",
        "Team":"MI"
    },
    {
        "name": "Kagiso Rabada",
        "Role": "Bowler",
        "image": "/116.png",
        "Team":"PK"
    },
    {
        "name": "Mark Wood",
        "Role": "Bowler",
        "image": "/315.png",
        "Team":"LSG"
    },
    {
        "name": "Mohhamad Shami",
        "Role": "Bowler",
        "image": "/47.png",
        "Team":"GT"
    },
    {
        "name": "Abhishek Sharma",
        "Role": "All-Rounder",
        "image": "/212.png",
        "Team":"SRH"
    },
    {
        "name": "Dhruv Jurel",
        "Role": "WK Keeper-Batter",
        "image": "/1004.png",
        "Team":"RR"
    },
    {
        "name": "Kuldeep Yadav",
        "Role": "Bowler",
        "image": "/14.png",
        "Team":"DC"
    },
    {
        "name": "Washington Sundar",
        "Role": "All-Rounder",
        "image": "/20.png",
        "Team":"SRH"
    },
    {
        "name": "Sunil Narayane",
        "Role": "Bowler",
        "image": "/156.png",
        "Team":"KKR"
    },
    {
        "name": "Moein Ali",
        "Role": "All-Rounder",
        "image": "/206.png",
        "Team":"CSK"
    },
    {
        "name": "Tilak Verma",
        "Role": "Batter",
        "image": "/993.png",
        "Team":"MI"
    },
    {
        "name": "Sikandar Raza",
        "Role": "All-Rounder",
        "image": "/820.png",
        "Team":"PK"
    },
    {
        "name": "Riyan Parag",
        "Role": "Batter",
        "image": "/189.png",
        "Team":"RR"
    },
    {
        "name": "Varun Chakaravarthy",
        "Role": "Bowler",
        "image": "/140.png",
        "Team":"KKR"
    },
    {
        "name": "Bhuvneshwar Kumar",
        "Role": "Bowler",
        "image": "/15.png",
        "Team":"SRH"
    },
    {
        "name": "Ravichandran Ashwin",
        "Role": "All-Rounder",
        "image": "/45.png",
        "Team":"RR"
    },
    {
        "name": "Arshdeep Singh",
        "Role": "Bowler",
        "image": "/125.png",
        "Team":"PK"
    },
    {
        "name": "Umran Malik",
        "Role": "Bowler",
        "image": "/637.png",
        "Team":"SRH"
    },
    {
        "name": "Ravi Bishnoi",
        "Role": "Bowler",
        "image": "/520.png",
        "Team":"LSG"
    },
    {
        "name": "Suyash Sharma",
        "Role": "Bowler",
        "image": "/1932.png",
        "Team":"KKR"
    },
    {
        "name": "Abhinav Manohar",
        "Role": "Batter",
        "image": "/974.png",
        "Team":"GT"
    },
    {
        "name": "T Natrajan",
        "Role": "Bowler",
        "image": "/224.png",
        "Team":"SRH"
    },
    {
        "name": "Yuzvender Chahal",
        "Role": "Bowler",
        "image": "/10.png",
        "Team":"RR"
    },
    {
        "name": "Akash Madhwal",
        "Role": "Bowler",
        "image": "/20681.png",
        "Team":"MI"
    },
    {
        "name": "Harshit Rana",
        "Role": "Bowler",
        "image": "/1013.png",
        "Team":"KKR"
    },
    {
        "name": "Shivam Dubey",
        "Role": "All-Rounder",
        "image": "/211.png",
        "Team":"CSK"
    },
    {
        "name": "Fazalhaq Farooqi",
        "Role": "Bowler",
        "image": "/1011.png",
        "Team":"SRH"
    },
    {
        "name": "Trent Boult",
        "Role": "Bowler",
        "image": "/66.png",
        "Team":"RR"
    },
    {
        "name": "Marco Jansen",
        "Role": "All-Rounder",
        "image": "/586.png",
        "Team":"SRH"
    },
    {
        "name": "Navdeep Saini",
        "Role": "Bowler",
        "image": "/207.png",
        "Team":"RR"
    },
    {
        "name": "Aman Khan",
        "Role": "Batter",
        "image": "/786.png",
        "Team":"DC"
    },
    {
        "name": "Kyle Mayers",
        "Role": "All-Rounder",
        "image": "/726.png",
        "Team":"LSG"
    },
    {
        "name": "Faf Du Plessis - (C)",
        "Role": "Batter",
        "image": "/94.png",
        "Team":"RCB"
    },
    {
        "name": "Sandeep Sharma",
        "Role": "Bowler",
        "image": "/220.png",
        "Team":"RR"
    },
    {
        "name": "Dinesh Karthik",
        "Role": "WK Keeper-Batter",
        "image": "/13.png",
        "Team":"RCB"
    },
    {
        "name": "Rahul Chahar",
        "Role": "Bowler",
        "image": "/171.png",
        "Team":"PK"
    },
    {
        "name": "Glenn Maxwell",
        "Role": "All-Rounder",
        "image": "/28.png",
        "Team":"RCB"
    },
    {
        "name": "Jason Beharandrof",
        "Role": "Bowler",
        "image": "/4.png",
        "Team":"MI"
    },
    {
        "name": "Deepak Chahar",
        "Role": "Bowler",
        "image": "/91.png",
        "Team":"CSK"
    },
    {
        "name": "Joshua Little",
        "Role": "Bowler",
        "image": "/678.png",
        "Team":"GT"
    },
    {
        "name": "Ayush Badoni",
        "Role": "Batter",
        "image": "/985.png",
        "Team":"LSG"
    },
    {
        "name": "Arjun Tendulkar",
        "Role": "Bowler",
        "image": "/585.png",
        "Team":"MI"
    },
    {
        "name": "Mahammed Siraj",
        "Role": "Bowler",
        "image": "/63.png",
        "Team":"RCB"
    },
    {
        "name": "Race Topely",
        "Role": "Bowler",
        "image": "/574.png",
        "Team":"RCB"
    },
    {
        "name": "AkashDeep Singh",
        "Role": "Bowler",
        "image": "/1007.png",
        "Team":"RCB"
    },
    {
        "name": "Mukesh Kumar",
        "Role": "Bowler",
        "image": "/1462.png",
        "Team":"DC"
    },
    {
        "name": "Anuj Rawat",
        "Role": "WK Keeper-Batter",
        "image": "/534.png",
        "Team":"RCB"
    },
    {
        "name": "Rahul Tiwetia",
        "Role": "All-Rounder",
        "image": "/120.png",
        "Team":"GT"
    },
    {
        "name": "Shaikh Rasheed",
        "Role": "Batter",
        "image": "/778.png",
        "Team":"CSK"
    },
    {
        "name": "Nehal Wadera",
        "Role": "Batter",
        "image": "/1541.png",
        "Team":"MI"
    },
    {
        "name": "Prabhsimron Singh",
        "Role": "Batter",
        "image": "/137.png",
        "Team":"PK"
    },
    {
        "name": "Naveen UL Haq",
        "Role": "Bowler",
        "image": "/639.png",
        "Team":"LSG"
    },
    {
        "name": "Abhishek Porel",
        "Role": "Batter",
        "image": "/1580.png",
        "Team":"DC"
    },
    {
        "name": "Nishant Sindhu",
        "Role": "All-Rounder",
        "image": "/791.png",
        "Team":"CSK"
    },
    {
        "name": "Jason Roy",
        "Role": "Batter",
        "image": "/313.png",
        "Team":"KKR"
    },
    {
        "name": "Mahipal Lamroar",
        "Role": "All-Rounder",
        "image": "/184.png",
        "Team":"RCB"
    },
    {
        "name": "Karn Sharma",
        "Role": "All-Rounder",
        "image": "/98.png",
        "Team":"RCB"
    },
    {
        "name": "Ruturaj Gaikwad",
        "Role": "Batter",
        "image": "/102.png",
        "Team":"CSK"
    },
    {
        "name": "Piyush Chawala",
        "Role": "Bowler",
        "image": "/149.png",
        "Team":"MI"
    },
    {
        "name": "Rajan Kumar",
        "Role": "Bowler",
        "image": "/1503.png",
        "Team":"RCB"
    },
    {
        "name": "Mayank Agarwal",
        "Role": "Batter",
        "image": "/55.png",
        "Team":"SRH"
    },
    {
        "name": "Rahmanullha Gurbaz",
        "Role": "WK Kepeer-Batter",
        "image": "/641.png",
        "Team":"KKR"
    },
    {
        "name": "Atharwa Taide",
        "Role": "Batter",
        "image": "/1001.png",
        "Team":"PK"
    },
    {
        "name": "Ishant Sharma",
        "Role": "Bowler",
        "image": "/50.png",
        "Team":"DC"
    },
    {
        "name": "Kumar Kartikeya Singh",
        "Role": "Bowler",
        "image": "/1015.png",
        "Team":"MI"
    },
    {
        "name": "Mohit Sharma",
        "Role": "Bowler",
        "image": "/100.png",
        "Team":"GT"
    },
    {
        "name": "Rajwardhan Hangargekar",
        "Role": "Bowler",
        "image": "/783.png",
        "Team":"CSK"
    },

];

const pavan = document.getElementById("players");




let result = "";

playerArray.forEach(function (array) {


    result += `<div class="col-sm-3 all text-white text-center font-weight-bold ${array.Team}" >
        <img src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023${array.image}" alt="">
        <div>${array.name}</div>
        <div>${array.Role}</div>
    </div>
        `

});

pavan.innerHTML = result;







