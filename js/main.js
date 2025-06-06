// Sample data for events, donations, and expenses
const eventsData = [
    {
        title: "Ganganamma Urumulamma Amma Vaari Jaathara, Amma Vaariki Maha Naivedhyalu,migilina Roojulalo Bhajana Kaaryakramalu Jarugunu",
        date: "8/6/2025",
        time: "All Day",
        location: "Vellamilli Panchayathi",
    },


    {
        title: "Amma vaarini Poore gudise lo Nilabettuta",
        date: "15/5/2025",
        time: "From Evening 5:30 PM",
        location: "Vellamilli Panchayathi",
    },

    {
        title: "Puthunti,Athinti,Menamaamala Paanpulu",
        date: "17/5/2025",
        time: "From Afternoon 2 PM",
        location: "Vellamilli Panchayathi",
    },

    {
        title: "4 Graamalalo Unna Devathalandhariki Chalividi Paanakalu",
        date: "18/5/2025",
        time: "All Day",
        location: "Vellamilli Panchayathi",
    },

    {
        title: "Singaraajupalem vaariche Koolatam",
        date: "21/5/2025",
        time: "All Day",
        location: "Vellamilli Panchayathi",
    },

    {
        title: "Kalasa Puja",
        date: "24/5/2025",
        time: "All Day",
        location: "Vellamilli Panchayathi",
    },

    {
        title: "Dance Baby Dance(Surya Dance Tanuku)",
        date: "25/5/2025",
        time: "All Day",
        location: "Vellamilli Panchayathi",
    },


    {
        title: "Durgamma Kadha",
        date: "26/5/2025",
        time: "All Day",
        location: "Vellamilli Panchayathi",
    },


    {
        title: "Archestra (Meghamala Tadepalligudem)",
        date: "28/5/2025",
        time: "All Day",
        location: "Vellamilli Panchayathi",
    },

    {
        title: "Vemparala Narayanarao Gari Kumarudu Vemparala Prasad Gaariche Chandihomam",
        date: "30/5/2025",
        time: "All Day",
        location: "Vellamilli Panchayathi",
    },


    {
        title: "Suraj Dance(Vizag) - Grand Event",
        date: "01/6/2025",
        time: "All Day",
        location: "Vellamilli Panchayathi",
    },

    {
        title: "Pedda Vellamilli Gramamulo Rathripoota Kaalika Aasaadhulatho Seeva Kaaryakramam",
        date: "02/6/2025",
        time: "Night Time",
        location: "Pedda Vellamilli",
    },

    {
        title: "Chinna Vellamilli Gramamulo Rathripoota Kaalika Aasaadhulatho Seeva Kaaryakramam",
        date: "4/6/2025",
        time: "Night Time",
        location: "Chinna Vellamilli",
    },

    {
        title: "Chinthayigudem,Lambadigudem Gramaalalo Rathripoota Kaalika Aasaadhulatho Seeva Kaaryakramam",
        date: "5/6/2025",
        time: "Night time",
        location: "Chinthayigudem,Lambadigudem",
    },

    {
        title: "Policheta Thiruguta",
        date: "7/6/2025",
        time: "Night time",
        location: "Vellamilli Panchayathi",
    },

    



    

    
     
];

const donationsData = [

        {"Name":"Mallareddy Seshagiri Rao Garu","Amount":101116,"Village":"Peddavellamilli","Date":"12-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Bandi Veerabhadram Garu","Amount":50000,"Village":"Peddavellamilli","Date":"12-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Devini Satyanarayana Garu","Amount":5000,"Village":"Peddavellamilli","Date":"12-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Akula Srinivasa Rao Garu","Amount":5000,"Village":"Peddavellamilli","Date":"12-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Pillamgoru Nageswara Rao Garu","Amount":3000,"Village":"Peddavellamilli","Date":"12-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Akula Suryavathi Garu","Amount":2000,"Village":"Peddavellamilli","Date":"12-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Vidiyala Srinivasa Rao Garu","Amount":5000,"Village":"Peddavellamilli","Date":"14-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Vidiyala Malleswararao Garu","Amount":5000,"Village":"Peddavellamilli","Date":"14-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Vidiyala Suryachandra Rao Garu","Amount":5000,"Village":"Peddavellamilli","Date":"14-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Maram Paparao Garu","Amount":10116,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Rayudu Venkateswara Rao Garu","Amount":15000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Nakka Chinna Satyanarayana Garu","Amount":3000,"Village":"Peddavellamilli","Date":"14-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Chittimani Annamraju Garu","Amount":2000,"Village":"Peddavellamilli","Date":"14-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Jujjavarapu Venkata Krishna Garu","Amount":5000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Kambhampati Veerraju Garu","Amount":3000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Nandyala Nageswara Rao Garu","Amount":4000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Gandikota Chinna Subbarao Garu","Amount":5000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Paathuri Mohan Rao Garu","Amount":2000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Jelugumalli Vaasthavulu Garu","Amount":500,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Vemuri Muthyalarao Garu","Amount":10116,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Kagithala Yedukondalu Garu","Amount":1000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Devadula Rambabu Garu","Amount":1116,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Bethina Ramakrishna Garu","Amount":2011,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Gadde Rambabu Garu","Amount":15000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Yedavalli Koteswara Rao Garu","Amount":20000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Karingala Somaraju Garu","Amount":5000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Paathuri Prabhakar Rao Garu","Amount":5000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Paathuri Hari Babu Garu","Amount":5016,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Manepalli Naga Pandu Garu","Amount":2116,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Kaati Krishna Garu","Amount":2000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Tappetla Bodemma Garu","Amount":5000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Kosanam Pothuraju Garu","Amount":5000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Tappetla Lakshman Rao Garu","Amount":2000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Pandraka Pedha Rayappa Garu","Amount":2000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Vaska Gangaraju Garu","Amount":7500,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Tappetla Chinna Jaggarao Garu","Amount":2000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Achanta Srihari Garu","Amount":4002,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Akula Suryachandrarao Garu","Amount":4000,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Manubothula Jagadeesh Garu","Amount":10000,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Vemuri Tatarao Garu","Amount":6001,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Dandamudi SrinivasaRao S/O Tatalu Garu","Amount":2000,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Karuturi Venkatrao Garu","Amount":10000,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Yadagani Peddaramayya Garu","Amount":10000,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Yadagani Peddasatyanarayana Garu","Amount":6000,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Paanakala Satyanarayana Garu","Amount":2500,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Paanakala Maavullarao Garu","Amount":2500,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Challa Suryanarayana Garu","Amount":3000,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Peethala Sathibabu Garu","Amount":600,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Parimi Satyanarayana Garu","Amount":20000,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},          
                  
            
  {"Name": "Bandi Nageswararao Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Prathipati Subbarao Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Vidiyala Ramu Garu", "Amount": 10116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Nachugunta Chalam Garu", "Amount": 500, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Pasupuleti Venkeswararao Garu", "Amount": 4000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Manubothulu Kaasi Viswanadham Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Yadagani Srinivasarao S/O GangaRaaju Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Nandhigani Veeravenkayya Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Marni Srinivasarao Garu", "Amount": 10111, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Akula Nageswararao Garu", "Amount": 9000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Nuthalapati Venkatesh Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Yadagani Veera Venkata Satyanarayana Garu S/O Ramarao", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Karuturi Madhubabu Garu", "Amount": 20116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Gandham Ramesh Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Kadiyam Suryanarayana Garu", "Amount": 5500, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Seethamsetti Gandhi Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Vidiyala Ramakrishna Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Ramavarapu Srihari Garu", "Amount": 5116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Bunga Raju(Dr.Raju) Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Mullapudi Venkateswararao Garu", "Amount": 15000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Simhadri Bhaskarrao Garu", "Amount": 5011, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Athinti Raju Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Ricemill Eswar Rao Garu", "Amount": 1000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Kalakonda Preetham Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Vepuri Sagar(Bhadram Gaari Alludu) Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Kalakonda TrilokanadhaRao Garu", "Amount": 50000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Isukapati Pedhajarji Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Yadagani Venkataratnam Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Mullapudi Seshagirirao Garu", "Amount": 6010, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Bollina Srinivasa Rao Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Yennani Prasadrao Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Vallabhani Ramarao Garu", "Amount": 500, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Yaganti Mohan Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Yadagani Krishna Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Paladugula Ramavatharam Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Kukkanda Brahmam Garu", "Amount": 1000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Gandikota Pedhasubbarao Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Devina Venkateswararao Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Pillamgoru Pothuraju Garu", "Amount": 4000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Kolla Srinu Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Marni Sivaji Ganesh Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Marni Gangadhara Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Bandi Ramakrishna Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Srigiri Krishna Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Manubothula Krishna Garu", "Amount": 10116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Injavarapu Venkataramana Garu", "Amount": 5116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Kasukurthi Sriramulu Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Vidiyala Visalakshmi Garu", "Amount": 1111, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Akula Pedha Veerraju Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Manepalli Suribabu Garu", "Amount": 4000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},

  
    {"Name": "Gundavarapu Srinu Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Kambhampati Kondalrao Garu", "Amount": 5001, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Addala Sivarao Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Manepalli Venkateswararao Garu", "Amount": 2016, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Kambhampati Srinivasarao s/o Venkatrao Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Parimi Krishna Garu", "Amount": 20000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Lakhshmisetti Raghavalu Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Mimdyala Mangayya Garu", "Amount": 2500, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Gajjela Venkateswararao Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Dhanukonda paadhalu Garu", "Amount": 1500, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Thalliboina Naresh(Maranaatha gaaru) Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Karnati Swami Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Kesana Gangaraju Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Chenna Parvathi Garu", "Amount": 1000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Tatini Veeraraghavulu Garu", "Amount": 25000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Adabala Venkateswararao(Venkanna) Garu", "Amount": 101116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Boina ramarao Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Dandamudi venkata Jalamayya Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Mullapudi Krishna Garu", "Amount": 2116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Parimi Gangaraju Garu", "Amount": 30000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Vemuri Neelagiri Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Srigiri Satyanarayana Garu", "Amount": 10116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Srigiri Srinivasarao Garu", "Amount": 5052, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Akula Srinivasa rao s/o venkatarao Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    {"Name": "Pitta Raju Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},


        {"Name": "Kukkonda Gangachaaryulu Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Yadigini Anitha Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Sunkavalli Narendra Chakravarthy Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Mullapudi Satyanarayana Garu", "Amount": 6001, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Rayudu Suryarao Garu", "Amount": 2501, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Yendamuri Apparao Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Rayudu Paparao Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Allam Lakshmi Garu", "Amount": 500, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Pillamgoru Srinivasu Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Dandaboina Venkatrao Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Kundheti Srinu Garu", "Amount": 5100, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Yaganti Rajendraprasad Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Vanka Veerabhadram Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Vanka Srinivasarao Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Vidiyala Satyanarayana(Dasu) Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Yaganti Chinnahanumanthu Garu", "Amount": 25000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Vallabhani Krishna Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Chintha Syamalrao Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Bandi Pedhasubbarao Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Kagithala Veerabaabu Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Kambhampati Bhargavi Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Kaaringula Somagiri gaari kumarulu Garu", "Amount": 10116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Kundheti Veeranageswararao Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Chavvakula Satyanarayana Garu", "Amount": 1111, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
        {"Name": "Panduri Satyanarayana Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
    

        
            {"Name": "Gannavarapu Subbarao Garu", "Amount": 1116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Vidiyala Devaprasad Garu", "Amount": 15000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Koyyalamudi Veeraraghavulu Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Alluri Nageswararao(Eluru) Garu", "Amount": 1116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Yadagini Venkateswararao(Chowdary) Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Veeramaneni Satyanarayana Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Indukuri Vijaya Kumar(Hyderabad) Garu", "Amount": 7000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Vedhantham Purna Bharathi(Eluru) Garu", "Amount": 1000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Vemuri Venkateswararao(Abbulu) Garu", "Amount": 4000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Yaganti Veeravenkata Satyanarayana S/O Ramarao Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Pothula Krishnamurthy(Vizag) Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Gelam Sivaprasad(Rajamundry) Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Mudhana Satyanarayana(Collector) Garu", "Amount": 5116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Bethini Satheesh S/O paparao Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Yaganti Srinivasarao S/o Ramarao Garu", "Amount": 4000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Tadisetti Kesava Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Vaddi Lakshmanarao Garu", "Amount": 1500, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Akula Chinnavenkatarao s/o tatarao Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Akula Gopalam Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Akula Nageswaramma Garu", "Amount": 6000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Reddy Lakshmayya(Dubacharla) Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Pakalapati Srinivasarao Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Yaganti Venkatarao Garu", "Amount": 20000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Akula Rambabu Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
            {"Name": "Perabathula Subramanyam Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},

            
                {"Name": "Barothu Somulu Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "Chintha Satyanarayana Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "Vemuri Kondalrao Garu", "Amount": 4000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "Vidiyala Srinivasarao Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "Dandamudi Srinivasarao Garu", "Amount": 15000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "Kambhampati Ramesh Naidu Garu", "Amount": 3116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "Jarapala Krishna murthy Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "Dandamudi Suribabu Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "Kundheti Raghavulu Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "Parimi Gayathri(Velivenu) Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "Isukupati Subbarao Garu", "Amount": 4000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "Akula Nageswararao Garu", "Amount": 2100, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "Barothu Buddhu Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "Karuturi Venkatratnam Garu", "Amount": 40000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "Banothu Ramoji Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "Usurumarthi Arjunarao Garu", "Amount": 2500, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "Banothu Chandrarao Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "Revadi Yakobu Garu", "Amount": 1000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "Gandikota Srinu Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "Pandraka Sahadev Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "Rapolu Apparao Garu", "Amount": 5116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "Uttukuri Srinu Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "Kasukurthy Anandharao Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "G A R Lenin(Gollagudem) Garu", "Amount": 500, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                {"Name": "Usuluri Srinivas Garu", "Amount": 500, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},


                
                    {"Name": "Nekkalapudi Bhaskarrao Garu", "Amount": 500, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Pandraka Srinivasarao(Suryachandrarao) Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Vaska Veerraju Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Koturi Veerayya Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Kandhigotla Divya Jyothi Garu", "Amount": 1000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Geddam Venkatrao Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Punjugarla Pedhintlu Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Tokiri Mohanarao Garu", "Amount": 500, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Pandraka Balayya Garu", "Amount": 500, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Urla Shankaram garu Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Isukapati Achamma Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Isukapati Bhushanam Garu", "Amount": 1000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Pandraka Swamidasu Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Yadigini Venkanna Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Indheti Seethayya Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Mimdyala Vijay Kumar Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Karnati Ramu Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Yaganti Achamma Garu", "Amount": 500, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Bandi Vasantharao S/o Krishna Rao Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Bethini Satyanarayana Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Akula Varaalu Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Panduri Durgarao Garu", "Amount": 2500, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Medi Sattamma Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Karuturi Srinivasarao Garu", "Amount": 15000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                    {"Name": "Yadagini Lakshmi Srinivas Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},

                
                        {"Name": "Bandi Somaraju Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Kotam Gangadhar Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Kosalamanda Yedukondalu Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Isukupati Pedhachandrarao Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Tappetla Seshagiri Rao Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Geddam Kutumbharao Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Nuthalapati Peddiraju Garu", "Amount": 1000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Isukupati Nageswararao Garu", "Amount": 1000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Pamula Satyanarana Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Gotham Srinu Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Kommu Dhaanamma Garu", "Amount": 1000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Karuturi Sahadevudi kumarudu Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Indheti Benerjee Garu", "Amount": 500, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Kutam Tirupathayya Garu", "Amount": 1000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Sidhabathula Shyam babu Garu", "Amount": 1000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Jalla Satyanarayana(Kaikaram) Garu", "Amount": 1116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Parimi Srinivasarao s/o nagabhushanam Garu", "Amount": 50000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Chenna Raghavulu Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Alapati Ramarao Garu", "Amount": 500, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Bagothu Sivalingam Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Bhukhya Rambabu Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Kesana Nageswararao Garu", "Amount": 2500, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Kesana Venkateswararao(Buriyya) Garu", "Amount": 2500, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Madhiboina Satyanarayana Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                        {"Name": "Karuturi Pavan kumar Garu", "Amount": 1000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},


                        
                            {"Name": "Cherukuri Seshayya Garu", "Amount": 15000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Yennani Bhulivenkayya Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Vidiyala Pedhanageswararao Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Bollina Madhavarao Garu", "Amount": 10116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Vemuri Venkatarao Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Maddipati Seshagirirao Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Nalli Vijaykumar Brothers Garu", "Amount": 10500, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Edara Raadha krishna Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Penubothula Srinu (Kadakatla) Garu", "Amount": 1001, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Tamalapati ganga Ratnam Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Koduri Suribabu Garu", "Amount": 1116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Vadithe Laalu Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Cherukuri Sivaramakrishna Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Yadagini Satyanarayana S/O subbarao Garu", "Amount": 6000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Yaganti Suryabrahmanandharao Garu", "Amount": 6000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Dandamudi Krishna Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Potam Krishna Garu", "Amount": 200, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Kesana Durgarao Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Seethamsetti Srinivasa Mahamkali Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Pillamgoru Bhaskarrao Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Isukupati Haribabu Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Chintha Srimmannarayana Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Singavarapu Rambabu Garu", "Amount": 2116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Kola Venkatesh Garu", "Amount": 1000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            

                            {
                              "Name": "Swargiya Marni Pedda Veranna Dampthulu",
                              "Amount": 20000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Indeti Dasu Garu",
                              "Amount": 2000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Dharmaravu Garu,Verraju Garu S/O Akula Ram Avathram Garu",
                              "Amount": 30000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Kadithala Venkateshu Garu",
                              "Amount": 2000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Kambhampati Annavaram Garu",
                              "Amount": 2000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Potla Subbarao Garu",
                              "Amount": 3000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Karuturi Veera Raghuvalu Garu",
                              "Amount": 15000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Vaska Bhimaraju Garu",
                              "Amount": 3000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Kadavakollu Nageswararao Garu",
                              "Amount": 3000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Gandi Yedukondalu Garu",
                              "Amount": 2000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Singavarapu Nageswararao Garu",
                              "Amount": 5116,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Bethina Chinnaravu Garu",
                              "Amount": 5000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Ganji Krishna Garu",
                              "Amount": 5000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Middha Prakasam Garu",
                              "Amount": 2000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Veeramalla Nagaraju Garu",
                              "Amount": 5001,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Kambampati Bhaskararao Garu",
                              "Amount": 3000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Vidiyala Chinna Venkatarao Garu",
                              "Amount": 1000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Aalapati Pushpavathi Garu",
                              "Amount": 500,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Kambampati Subbarao Gari Kumarulu",
                              "Amount": 15000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Uppu Satyanarayana Garu (Mani Convent)",
                              "Amount": 12000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Alam Renuka Devi Garu",
                              "Amount": 5000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Rayudu Krishna Garu",
                              "Amount": 5000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Kanigolla Satyanaryana Garu",
                              "Amount": 3000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Parimi Naga Bushanam Garu",
                              "Amount": 5000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Duggirala Mohana Ranga Garu(padalagunta)",
                              "Amount": 20000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Nandigani Satynarayana Garu",
                              "Amount": 3000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Manubothula Sommayya Garu",
                              "Amount": 5000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Kotum Venkateswararao Garu",
                              "Amount": 1500,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Pillamgoru Sasi Garu",
                              "Amount": 2500,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Maganti Govindu Garu",
                              "Amount": 2000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Rapolu Rangarao Garu",
                              "Amount": 1500,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Uppuniti Nagaraju Garu",
                              "Amount": 1500,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Maram Suryachandrarao Garu",
                              "Amount": 20116,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Gobbella Padma Garu (Tadepalligudem)",
                              "Amount": 1116,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "korasikha Danayya Garu",
                              "Amount": 5100,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Tatina Krishnamurthy Garu(Unguturu)",
                              "Amount": 1000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Vidiyala Bulliya Garu kutumba sabyulu",
                              "Amount": 12000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Thota China Satyanarayana Garu",
                              "Amount": 5000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Kadavakollu Peda Muthyalarao Garu",
                              "Amount": 10000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Oka Bakthudu(Badampudi)",
                              "Amount": 500,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Goli Veera Venkata Satyanarayana Murthy Garu[Hyderabad]",
                              "Amount": 2116,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Udatha Anjani Kumar Garu(Gollala Mamidi)",
                              "Amount": 2116,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Vankina Sai Pavan Garu",
                              "Amount": 5000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Kondru Rambabu Garu",
                              "Amount": 2000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Vallabani Veera Raghavulu Garu",
                              "Amount": 10000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Rayudu Subbarao Garu",
                              "Amount": 20000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Muliki Rambabu Garu",
                              "Amount": 2000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Gandikota Mangayya Garu",
                              "Amount": 2000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Kondru Musalayya Garu(Masam Pandu)",
                              "Amount": 2000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Kosanam Pedda Nageshu Garu",
                              "Amount": 3000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Usurumarthi Bhimaraju Garu",
                              "Amount": 2000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Thalliboyina Verayya Garu",
                              "Amount": 2000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Devina Narsimha Murthy Garu",
                              "Amount": 10000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Abburi Gangaratnam Garu",
                              "Amount": 20000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Bayar crop Science(P.N.R)",
                              "Amount": 10232,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Paladugula Durgarao Garu",
                              "Amount": 20000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Parimi Siva Ram Krishna Garu S/O Nagabushanam Garu",
                              "Amount": 50116,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Karuturi Satyanarayana Garu",
                              "Amount": 10005,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Badithi Srinu Garu S/O Nagulu Garu",
                              "Amount": 2000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Badithi Mangayya Garu S/O Nagulu Garu",
                              "Amount": 2000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Dandamudi Satyanarayana Garu",
                              "Amount": 3000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Jujjavarapu Satyavathamma Garu",
                              "Amount": 2000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Medavankala Balu Garu",
                              "Amount": 1000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Manubothula Pullarao Garu",
                              "Amount": 2000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "S Suryanaryana Garu",
                              "Amount": 2000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Pothula Ramarao Garu",
                              "Amount": 1100,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Kambhampati Nageswararao Garu(shamiyana)",
                              "Amount": 10000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Mullapudi Sunil Garu(Krishnapuram)",
                              "Amount": 1500,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Karnati Apparao Garu(Vaishnavi electricals and home needs)",
                              "Amount": 10116,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Karnati Verayya Garu",
                              "Amount": 3116,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Karnati Yerra Venkatesu Garu",
                              "Amount": 1001,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Dandru Gurayya Garu",
                              "Amount": 1001,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Grandhi Tanushka Garu(Durga SBI TPG)",
                              "Amount": 2001,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Yadavalli Rambabu Garu",
                              "Amount": 5001,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Marni Kasi gari alludu Nalla Rambabu Garu(Ramanagudem)",
                              "Amount": 5000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Bantumilli Suvarnaraju Garu",
                              "Amount": 2000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Bandi Subbarao Garu(hotel)",
                              "Amount": 2000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Karingula Suribabu Garu",
                              "Amount": 10000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Gundapati Narasimha rao Garu",
                              "Amount": 3000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Bandhamsetti Nageswararao Garu",
                              "Amount": 10000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Bandhamsetti Suryarao Garu",
                              "Amount": 10000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Bandhamsetti Muneswararao Garu",
                              "Amount": 10000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Yenigalla Vasantha Rayudu Garu",
                              "Amount": 15000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Marni Namasvini Garu",
                              "Amount": 5000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Rachakonda Satish Garu(Palakollu)",
                              "Amount": 500,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Vidiyala Satyanarayana Garu",
                              "Amount": 5000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Akula Harishchandra Prasad Garu",
                              "Amount": 5000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Simhadri Srinivasarao Garu",
                              "Amount": 5000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Rayudu Annapuranamma gari Manavadu Tatina Umamaheswararao Garu",
                              "Amount": 10000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Korapati Venkatesu Garu",
                              "Amount": 2000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Eluri Sasirekha Garu",
                              "Amount": 5000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Banothu Chittibabu Garu",
                              "Amount": 516,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Gannina Rambabu Garu",
                              "Amount": 500,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Marni Apparao Garu",
                              "Amount": 3116,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Akula Subbarao Garu",
                              "Amount": 2500,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Muddhana Rajkumar Garu",
                              "Amount": 2202,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },
                          {
                              "Name": "Oka Bhaktudu",
                              "Amount": 1000,
                              "Village": "Peddavellamilli",
                              "Date": "31-05-2025",
                              "Collectedby": "Vidiyala Suryachandrarao Garu"
                          },








                           //Chinna Vellamilli Maadiga Peta Yandrapati Naga Raju



                            {
                                "Name": "Kommu Nageswararao Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Dulapalli Veerraju Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Kokkiripati Chinna Nagaraju  (rammurthy) Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Bhimadole Bhaskar rao Garu",
                                "Amount": 800,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Jaliparthi Srinu Garu",
                                "Amount": 500,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Kokkiripati Pedda Nagaraju Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Jaliparthi Rambabu Garu",
                                "Amount": 1000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Sheik Nagoor sayibu Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Jaladi Subbarao Garu",
                                "Amount": 5000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Kandilli Rambabu Garu",
                                "Amount": 1000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Kokkiripati Satyanarayana Garu(auto chinna)",
                                "Amount": 1000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Yantrapati Pedda Gangaraju Garu",
                                "Amount": 500,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Yantrapati Madhubabu Garu",
                                "Amount": 500,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Tadigadapa Prasadu Garu S/O Gothiyya Garu",
                                "Amount": 1000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Gampala Chinnaravu Garu",
                                "Amount": 500,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Tadigadapa Veerapandu Garu",
                                "Amount": 500,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Kokkiripati Mariyya Garu S/O Sathiyya Garu",
                                "Amount": 1000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Kokkiripati Ramu Garu S/O Rangayya Garu",
                                "Amount": 1000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Manelli Sesharavu Garu",
                                "Amount": 1000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Pedapata Venkateswararao Garu",
                                "Amount": 1000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Meripo Yashoda Garu",
                                "Amount": 1000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Kunapamu Umamaheshwararao Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Manelli Samlu Garu",
                                "Amount": 1000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Chetti Prasadu Garu",
                                "Amount": 500,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Tadigadapa Peddiraju Garu S/O Gangayya Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Manelli Srinu Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Muppidi Varalakshmi Garu",
                                "Amount": 1000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Manelli Nageswara rao Garu S/O Venkata narasayya Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Manelli Venkata Krishna rao Garu S/O Venkata narasayya Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Jaliparthi Raju Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Yantrapati Nagaraju Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Kokkiripati V.V.S. Murthy Garu",
                                "Amount": 1000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Kodavati Pushpa Garu",
                                "Amount": 500,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Tadigadapa Bujiyya Garu S/O Kottu Subbarao Garu",
                                "Amount": 5000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Tadigadapa Seethayya Garu",
                                "Amount": 1000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Bathhina Imanuel Garu",
                                "Amount": 1000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                              {
                                "Name": "Kokkiripati Srinu Garu S/O nagaratnam Garu",
                                "Amount": 1000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Yandrapati Naga Raju Garu"
                              },
                                    

                              //Chinna Vellamilli OC Peta ,Pagadala Prasad
              


                              {
                                "Name": "Vakacharla Yedukondalu Garu",
                                "Amount": 5000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Nallaganti Venketswararao Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Adapa Venkateswararao Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Adapa Nagaratnam Garu ",
                                "Amount": 500,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Polisetti Raju Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Adapa Nageswararao Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Adapa Gangaratnam Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Adapa Srinu Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Nayudu Srinu Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Nallaganti Nageswararao Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Nallaganti Krishna Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Bandreddi Nageswararao Garu",
                                "Amount": 2500,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Vemparala Narayana rao Garu",
                                "Amount": 10500,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Sodabatthula Satyanarayana Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Chinnamsetti Gangaraju Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Reddy Ramarao Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Kikkisetti Naresh Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Kikkisetti Rambabu Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Allamsetti Yugandhar nayudu Garu",
                                "Amount": 2500,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Maddirala Seshu Garu",
                                "Amount": 3116,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Kikkisetti Sivanarayana Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Kikkisetti Venkanna Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Gundabathula Lakshmanrao Garu",
                                "Amount": 5000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Reddy Venkateswararao Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Chenna Pedda Rangayya Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Vakacharla Yaswanth Garu",
                                "Amount": 4000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Thommidella Suryachandrarao Garu",
                                "Amount": 5000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Sheik Meera Saheb Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Marisetti Rangamma Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Bandhamsetti Srinu Garu",
                                "Amount": 5000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Bandaru Kalikrishna Garu",
                                "Amount": 5000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Bandaru Venkataratnam Garu",
                                "Amount": 4000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Nallaganti Venkatarao Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Thommidella Thrimurthulu Garu",
                                "Amount": 5116,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Nelam Kondayya Garu",
                                "Amount": 5000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Bayisetti Lakshmi Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Adabala Pentayya(Raju) Garu",
                                "Amount": 5000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Shankabathula Reddiyya Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Adapa Vishnu Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Nallaganti Adi Narayana Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Kovvuri Satynarayana Garu",
                                "Amount": 500,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Chilaka Subbayya Garu",
                                "Amount": 3011,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Gadi Peda Ramarao Garu",
                                "Amount": 1000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Posamsetti Venkateswaramma Garu",
                                "Amount": 2500,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Posamsetti Sathiyya Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Posamsetti Peda Nageswararao Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Posamsetti Nageswaramma Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Pandiripalli Ganesh Garu",
                                "Amount": 1000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Chenna Abbullu Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Yalubandi Swami Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Gundabathula Bhadrayyya Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Athmakuri Abbullu Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Chilaka Satyanarayana Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Marisetti Satyanarayana Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Dagarapu Veera Nageswararao Garu",
                                "Amount": 5000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Rudra Ramudu Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Posamsetti China Nageswararao Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Vemparala Subramanya Sharma Garu",
                                "Amount": 6000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Putta Rambabu Garu",
                                "Amount": 5000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Pulupu Sarrayya Garu ",
                                "Amount": 3116,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Chenna Kantharavu Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Chenna Mani Garu S/O Krishna Garu",
                                "Amount": 5116,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Chenna Vaddilu Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Pagadala Srinivasu Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Chenna Durga Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Yelubanti Sathiyya Garu",
                                "Amount": 2500,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Kikkisetti Nagu Garu",
                                "Amount": 2500,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Kikkisetti Balaji Garu",
                                "Amount": 2500,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Bejawada Srinivas Garu",
                                "Amount": 2500,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Nalli Nageswararao Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Thota Jagggayya Garu",
                                "Amount": 1000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Chenna Venkateswararao Garu",
                                "Amount": 2500,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Paati Ramana Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              
                              {
                                "Name": "Vakacharla Vasu Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Vakacharla V V S Gupta Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Guthapalli Subramanyam Garu",
                                "Amount": 500,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Tummalapalli Rambabu Garu",
                                "Amount": 500,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Kollepara Nagababu Garu",
                                "Amount": 500,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Vakacharla Sai Ranjith Garu",
                                "Amount": 2116,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Koduri Naga Narayana Garu",
                                "Amount": 3120,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Kokkisetti Suryanarayana Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Adabala Satyanarayana Garu",
                                "Amount": 4000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Buddhana Srinu Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Bandreddi Rambabu Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Gadhi Peda Manikyalarao Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Ramisetti Nageswararao Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Vemparala Bhaskararao Garu ",
                                "Amount": 8000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Lingam Kesava Garu",
                                "Amount": 5116,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Pagadala Satyanarayana Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Pagadala Subbayya Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Pagadala Venkata Ramarao Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Gundabathula Venkanna Babu Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Chenna Pedda Lakshmanarao Garu",
                                "Amount": 2500,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Marisetti Balaji Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Kikkisetti Durgavara Prasad Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Pandiripalli Venkateswararao Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Chenna Ramu Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Chenna Annavaram Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Chenna  Gangadharam Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Reddy Nageswararao Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Thula Yedukondalu Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Veera Narasimha murthy Garu",
                                "Amount": 1000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Nalli Satyanaryana Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Chenna Chinna Rangayya Garu",
                                "Amount": 5000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Kikkisetti Srinivasa Rao Garu",
                                "Amount": 5116,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Adapa Satyavathi Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Gundabathula Balaji Garu",
                                "Amount": 4000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Kikkisetti Venkateswararao Garu S/O Srirammurthy Garu",
                                "Amount": 5000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Reddy Nageswararao Garu S/O Rathayya Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Vakacharla Devi Veeranjaneyulu Garu",
                                "Amount": 3116,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Chenna China Krishna Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Chenna Mariyya Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Gadi China Ramarao Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Kotipalli Peda Kaniki Murthy Garu",
                                "Amount": 4000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Reddy Venkata Rao Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Veerabathula Sriramulu Garu",
                                "Amount": 5000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Pulupu Chinna Venkatarao Garu",
                                "Amount": 4000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Allamsetti Satynarayana Garu",
                                "Amount": 5000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Kotipalli China Kaniki Murthy Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Pagadala Chinna Satyanarayana Garu",
                                "Amount": 2500,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Kikkisetti Ramu Garu",
                                "Amount": 5000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Chenna Pedda Krishna Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Yelubandi Appanna Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Chenna Satyanarayana Garu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },
                              {
                                "Name": "Baddhela Thrimurthulu Garu ",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },

                              {
                                "Name": "Challa Mahankali Garu ",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },

                              
                              {
                                "Name": "Nallaganti Yedukondalu Garu",
                                "Amount":3000 ,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },

                              {
                                "Name": "Adapa Chinna VenkateswaraRao Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },

                              {
                                "Name": "Gaadi Srinivasrao Garu",
                                "Amount": 2000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },

                              {
                                "Name": "Gaadi Lakshmanrao Gaari Kumarulu",
                                "Amount": 3000,
                                "Village": "Chinna Vellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Pagadala Prasad Garu"
                              },

                              //LIC Kishore - Padmasali Sangam
                              {
                                "Name": "Velagaleti Rama Rao & Smt. Jaya Lakshmi Garu",
                                "Amount": 20000,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },
                              {
                                "Name": "Akurathi Suryanarayana Garu & Sons",
                                "Amount": 15000,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },

                              {
                                "Name": "Vaddi Annavaram Garu S/o Narayanarao Garu",
                                "Amount": 10000,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },
                              {
                                "Name": "Gundavarapu Bhanu Garu S/o Apparao Garu",
                                "Amount": 5516,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },
                              {
                                "Name": "Tadepalli Srinivasa Garu S/o Rayudu Garu",
                                "Amount": 5016,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },
                              {
                                "Name": "Velagaleti Pentayya Garu & Family",
                                "Amount": 5016,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },
                              {
                                "Name": "Tammisetti Srinu Garu",
                                "Amount": 5000,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },
                              {
                                "Name": "Velagaleti Ammiraju Garu",
                                "Amount": 5000,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },
                              {
                                "Name": "Muggulla Satyanarayana Garu",
                                "Amount": 5000,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },
                              {
                                "Name": "Punnam Rathayya Garu(Medical Shop)",
                                "Amount": 5000,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },
                              {
                                "Name": "Nakka Nageswararao Garu",
                                "Amount": 5000,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },
                              {
                                "Name": "Tadepalli Manikyalarao Garu & Sons",
                                "Amount": 5000,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },
                              {
                                "Name": "Tadepalli Giri Babu Garu S/o Satyanarayana Garu",
                                "Amount": 5000,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },
                              {
                                "Name": "Velagaleti Adinarayana Garu",
                                "Amount": 5000,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },
                              {
                                "Name": "Gopi Narasimha Murthy Garu",
                                "Amount": 3000,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },
                              {
                                "Name": "Chikka Narasimha Murthy Garu",
                                "Amount": 3000,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },
                              {
                                "Name": "Nakka Chinna Satyanarayana Garu",
                                "Amount": 3000,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },
                              {
                                "Name": "Velagaleti Rama Rao Garu & Ratnakar rao Garu",
                                "Amount": 3000,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },
                              {
                                "Name": "Tadepalli Durgaratnam Garu S/O Rayudu Garu",
                                "Amount": 3000,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },
                              {
                                "Name": "Tadepalli Achyuta Rao Garu S/o Pothuraju Garu",
                                "Amount": 3000,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },
                              {
                                "Name": "Vaddi Chandrashekar Garu,Jyoti Garu(Tanuku)",
                                "Amount": 3000,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },
                              {
                                "Name": "Moturi Mangatayaru Garu(Tanuku)",
                                "Amount": 3000,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },
                              {
                                "Name": "Velagaleti Srinivasa Rao Garu S/o Pedapullayya Garu",
                                "Amount": 3000,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },
                              {
                                "Name": "Lakum Durga Prasad Garu, Naga Devi Garu (Eluru)",
                                "Amount": 2500,
                                "Village": "Peddavellamilli",
                                "Date": "31-05-2025",
                                "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                              },

                              
                                {
                                  "Name": "Pappu Lavanya Garu W/O Balaji Garu",
                                  "Amount": 2000,
                                  "Village": "Peddavellamilli",
                                  "Date": "31-05-2025",
                                  "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                                },
                                {
                                  "Name": "Muggulla Thrimurthulu Garu",
                                  "Amount": 2000,
                                  "Village": "Peddavellamilli",
                                  "Date": "31-05-2025",
                                  "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                                },
                                {
                                  "Name": "Kokkirala Srirammurthy Garu",
                                  "Amount": 2000,
                                  "Village": "Peddavellamilli",
                                  "Date": "31-05-2025",
                                  "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                                },
                                {
                                  "Name": "Kotipalli Srinu Garu",
                                  "Amount": 2000,
                                  "Village": "Peddavellamilli",
                                  "Date": "31-05-2025",
                                  "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                                },
                                {
                                  "Name": "Madem Veeranjaneyulu Garu",
                                  "Amount": 2000,
                                  "Village": "Peddavellamilli",
                                  "Date": "31-05-2025",
                                  "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                                },
                                {
                                  "Name": "Tadepalli Nageswararao Garu",
                                  "Amount": 2000,
                                  "Village": "Peddavellamilli",
                                  "Date": "31-05-2025",
                                  "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                                },
                                {
                                  "Name": "Tadepalli Suresh Garu S/O Srinu Garu",
                                  "Amount": 2000,
                                  "Village": "Peddavellamilli",
                                  "Date": "31-05-2025",
                                  "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                                },
                                {
                                  "Name": "Madem Mangababu Garu",
                                  "Amount": 2000,
                                  "Village": "Peddavellamilli",
                                  "Date": "31-05-2025",
                                  "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                                },
                                {
                                  "Name": "Tadepalli Satyanarayana Garu S/O Peddiraju Garu",
                                  "Amount": 2000,
                                  "Village": "Peddavellamilli",
                                  "Date": "31-05-2025",
                                  "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                                },
                                {
                                  "Name": "Tadepalli Pothuraju Garu S/O Rayudu Garu",
                                  "Amount": 2000,
                                  "Village": "Peddavellamilli",
                                  "Date": "31-05-2025",
                                  "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                                },
                                {
                                  "Name": "Rasabathula Siva Sai Garu S/O Gangaratnam Garu",
                                  "Amount": 2000,
                                  "Village": "Peddavellamilli",
                                  "Date": "31-05-2025",
                                  "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                                },
                                {
                                  "Name": "Manchinasetti Venkataratna Garu,Durga Bhavani Garu(pedatadepalli)",
                                  "Amount": 2000,
                                  "Village": "Peddavellamilli",
                                  "Date": "31-05-2025",
                                  "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                                },
                                {
                                  "Name": "Vatturi Mounika Garu(Nuzivedu)",
                                  "Amount": 1116,
                                  "Village": "Peddavellamilli",
                                  "Date": "31-05-2025",
                                  "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                                },
                                {
                                  "Name": "Chikka Tirumala Satya Shekar Garu,Lakshmi Prabhavathi Garu(Mallipudi)",
                                  "Amount": 1116,
                                  "Village": "Peddavellamilli",
                                  "Date": "31-05-2025",
                                  "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                                },
                                {
                                  "Name": "Velidindi Subbarao Garu S/O Bojjayya Garu",
                                  "Amount": 1116,
                                  "Village": "Peddavellamilli",
                                  "Date": "31-05-2025",
                                  "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                                },
                                {
                                  "Name": "Rapolu Prasad Garu , Sarala Garu(Gantavarigudem)",
                                  "Amount": 1116,
                                  "Village": "Peddavellamilli",
                                  "Date": "31-05-2025",
                                  "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                                },
                                {
                                  "Name": "Vayaleti Bablu Garu(Hukumpeta,Rjy)",
                                  "Amount": 1116,
                                  "Village": "Peddavellamilli",
                                  "Date": "31-05-2025",
                                  "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                                },
                                {
                                  "Name": "Kanduri Anand Garu,Geetha Garu (Potavaram)",
                                  "Amount": 1116,
                                  "Village": "Peddavellamilli",
                                  "Date": "31-05-2025",
                                  "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                                },
                                {
                                  "Name": "Immandhi Shankararao Garu,Kanaka Durga Garu(Kasa Pentapadu)",
                                  "Amount": 1116,
                                  "Village": "Peddavellamilli",
                                  "Date": "31-05-2025",
                                  "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                                },
                                {
                                  "Name": "Parvatham Prasad Garu, Jahnavi Garu(Undrajavaram)",
                                  "Amount": 1116,
                                  "Village": "Peddavellamilli",
                                  "Date": "31-05-2025",
                                  "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                                },
                                {
                                  "Name": "Lolla Radhakrishna Garu,Padma Garu(Badhampudi)",
                                  "Amount": 1116,
                                  "Village": "Peddavellamilli",
                                  "Date": "31-05-2025",
                                  "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                                },
                                {
                                  "Name": "Rapolu Suresh Garu,Bhavani Garu(Konala)",
                                  "Amount": 1116,
                                  "Village": "Peddavellamilli",
                                  "Date": "31-05-2025",
                                  "Collectedby": "Padmasali Sangam (Akurathi Kishore Garu)"
                                },             
                                

                                //gudisetti venkatarao
                                  {
                                    "Name": "Bandi Krishnamurthy Garu",
                                    "Amount": 5000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Bandi Danayya Garu",
                                    "Amount": 2000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Bandi Venkatarao Garu",
                                    "Amount": 2000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Yerukala Danaraju Garu",
                                    "Amount": 3000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Yerukala Peddiraju Garu",
                                    "Amount": 2000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Botta Venkata Durgarao Garu",
                                    "Amount": 10000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Botta Surya Chandra Rao Garu",
                                    "Amount": 3000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Botta Pedda Srinu Garu",
                                    "Amount": 5000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Botta Veeraswamy Garu",
                                    "Amount": 5000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Gonuri Sai Kumar Garu",
                                    "Amount": 2000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Gonuri Pochibabu Garu",
                                    "Amount": 5116,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Pothineni Chinna Garu",
                                    "Amount": 2000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Bayyo Manikanta Garu",
                                    "Amount": 3000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Bayyo Gantayya Garu",
                                    "Amount": 1000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Gonuri Dhanalakshmi Garu",
                                    "Amount": 1000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Boyina Radhakrishna Garu",
                                    "Amount": 2000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Yerra Gangaraju Garu S/O Sheshayya Garu",
                                    "Amount": 1116,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Yerra Thammayya Gari Kumarulu",
                                    "Amount": 13000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Yerra Subbarao Garu S/O Seshayya Garu",
                                    "Amount": 10000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Gudisetti Siddayya Gari Kumarulu",
                                    "Amount": 10000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Nelapala Perrayya Gari Kumarulu",
                                    "Amount": 10000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Yerra Ramkrishna Garu S/O Pedda Venkatarao Garu",
                                    "Amount": 3000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Yerra Sai Durga Garu",
                                    "Amount": 2000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Katumenu Lakshman Rao Garu",
                                    "Amount": 5000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Yerra Ramesh Babu Garu",
                                    "Amount": 5000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Yerra VenkataRao Garu S/O Peramma Garu",
                                    "Amount": 3116,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Nelapala Srinu Garu S/O Gothiyya Garu",
                                    "Amount": 2000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Mummidi Pedda Venkatrao Gari Kumarulu",
                                    "Amount": 7000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },
                                  {
                                    "Name": "Yerra Ramakrishna Garu S/O Venkatarao Garu",
                                    "Amount": 2000,
                                    "Village": "Chinna Vellamilli",
                                    "Date": "31-05-2025",
                                    "Collectedby": "Gudisetti Venkatarao Garu"
                                  },

                                  
                                    {
                                      "Name": "Yerra Satyanarayana Gari Tandri Perayya Garu",
                                      "Amount": 2000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Yerra Satyanaryana Garu S/O Venkatarao Garu",
                                      "Amount": 2000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Kareti Rambabu Garu",
                                      "Amount": 2000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Yerra Venkayya Garu",
                                      "Amount": 3000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Yerakala Subbarao Garu",
                                      "Amount": 2000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Yerra Pochibabu Garu",
                                      "Amount": 5000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Yerra Satynarayana S/O Pullayya",
                                      "Amount": 2000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Yerra Rambabu Garu S/O Sathiyya Garu",
                                      "Amount": 3000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Yerra Bagayya Garu S/O Sathiyya Garu",
                                      "Amount": 2000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Nelapala Srinu Garu S/O Nageswararao Garu",
                                      "Amount": 5000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Nelapala Nagarjuna Garu S/O Krishna Garu",
                                      "Amount": 4000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Nelapala Nageswararo Garu S/O Kambayya Garu",
                                      "Amount": 2000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Nelapala Gangaraju Garu S/O Kambayya Garu",
                                      "Amount": 3000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Nelapala Srinu Garu S/O Krishnamurthy Garu",
                                      "Amount": 2000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Yerra Seshadri Garu S/O Venkatarao Garu",
                                      "Amount": 3000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Nelapala Veera Venkatarao Garu",
                                      "Amount": 3000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Nelapala Vasu Garu S/O Nageswarao Garu",
                                      "Amount": 4000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Nelapala Veera Swamy Garu",
                                      "Amount": 2000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Nelapala Yesu Garu S/O Subbarao Garu",
                                      "Amount": 5116,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Yerra Tatarao Garu",
                                      "Amount": 2000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Yerra Somayya Garu S/O Narayya Garu",
                                      "Amount": 2000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Mummidi Rama Rao Garu",
                                      "Amount": 3000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Kadali Suresh Garu",
                                      "Amount": 3000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Nelapala Nageswararao Garu S/O Musalayya Garu",
                                      "Amount": 2000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Nelapala Subbarao Garu S/O Musalayya Garu",
                                      "Amount": 3000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Nelapala Nageswararao Garu S/O Somulu Garu",
                                      "Amount": 2000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    {
                                      "Name": "Chundru Veera Swamy Garu",
                                      "Amount": 2000,
                                      "Village": "Chinna Vellamilli",
                                      "Date": "31-05-2025",
                                      "Collectedby": "Gudisetti Venkatarao Garu"
                                    },
                                    
                                    //Komati Srinivas
                                    
                                    
                                      {
                                        "Name": "Komati Gangadhara Satyanarayana Garu(Bosu)",
                                        "Amount": 10116,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },
                                      {
                                        "Name": "Komati Peddiraju Garu S/O Venakataratnam Garu",
                                        "Amount": 10116,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },
                                      {
                                        "Name": "Komati Satyanaryana Garu & Sons",
                                        "Amount": 6000,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },
                                      {
                                        "Name": "Dasari Chinna Venkatarao Garu",
                                        "Amount": 6000,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },
                                      {
                                        "Name": "Komati Madhubabu Garu",
                                        "Amount": 10116,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },
                                      {
                                        "Name": "Komati Chinna Subbarao Garu S/O Chinna Swami Garu",
                                        "Amount": 5116,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },
                                      {
                                        "Name": "Komati Nageswararao Garu S/O Rammurthy Garu",
                                        "Amount": 5116,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },
                                      {
                                        "Name": "Komati Gangaraju Garu S/O Venkataratnam Garu",
                                        "Amount": 5000,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },
                                      {
                                        "Name": "Komati Venkataeswararao Garu S/O Rangaravu Garu",
                                        "Amount": 5000,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },
                                      {
                                        "Name": "Komati Pedda Subbarao Gari Kumarulu",
                                        "Amount": 5000,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },
                                      {
                                        "Name": "Matta Nagaraju Garu",
                                        "Amount": 4000,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },
                                      {
                                        "Name": "Matta Venkata Rao Garu",
                                        "Amount": 4000,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },
                                      {
                                        "Name": "Dasari Chinna Subbarao Garu",
                                        "Amount": 4000,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },
                                      {
                                        "Name": "Komati Venkateswara rao Garu S/O Koteswararao Garu",
                                        "Amount": 4000,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },
                                      {
                                        "Name": "Komati Satyanarayana Garu S/O Peddaswamy Garu",
                                        "Amount": 3000,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },
                                      {
                                        "Name": "Komati Srinivasa Rao Garu S/O Peddaswamy Garu",
                                        "Amount": 3000,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },
                                      {
                                        "Name": "Borra Ramshekhar Garu",
                                        "Amount": 3000,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },
                                      {
                                        "Name": "Thonta Veeraraju Garu",
                                        "Amount": 3000,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },
                                      {
                                        "Name": "Thonta Nagaraju Garu",
                                        "Amount": 3000,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },
                                      {
                                        "Name": "Katta Daneshwara rao Garu",
                                        "Amount": 3000,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },
                                      {
                                        "Name": "Komati Subbarao Garu S/O Venkataratnam Garu",
                                        "Amount": 3000,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },
                                      {
                                        "Name": "Thonta Venkateswararao Garu S/O Goppayya Garu",
                                        "Amount": 3000,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },
                                      {
                                        "Name": "Relangi Ramkrishna Garu",
                                        "Amount": 3000,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },
                                      {
                                        "Name": "Komati Daneswara rao Garu",
                                        "Amount": 3000,
                                        "Village": "Chinna Vellamilli",
                                        "Date": "31-05-2025",
                                        "Collectedby": "Komati Srinivas Garu"
                                      },

                                      
                                        {
                                          "Name": "Komati Paparavu Garu",
                                          "Amount": 3000,
                                          "Village": "Chinna Vellamilli",
                                          "Date": "31-05-2025",
                                          "Collectedby": "Komati Srinivas Garu"
                                        },
                                        {
                                          "Name": "Komati Laxmanrao Garu",
                                          "Amount": 3000,
                                          "Village": "Chinna Vellamilli",
                                          "Date": "31-05-2025",
                                          "Collectedby": "Komati Srinivas Garu"
                                        },
                                        {
                                          "Name": "Matta Krishnamurthy Garu",
                                          "Amount": 3000,
                                          "Village": "Chinna Vellamilli",
                                          "Date": "31-05-2025",
                                          "Collectedby": "Komati Srinivas Garu"
                                        },
                                        {
                                          "Name": "Komati Nagababu Garu",
                                          "Amount": 2000,
                                          "Village": "Chinna Vellamilli",
                                          "Date": "31-05-2025",
                                          "Collectedby": "Komati Srinivas Garu"
                                        },
                                        {
                                          "Name": "Komati Ravi Garu",
                                          "Amount": 2500,
                                          "Village": "Chinna Vellamilli",
                                          "Date": "31-05-2025",
                                          "Collectedby": "Komati Srinivas Garu"
                                        },
                                        {
                                          "Name": "Thonta Venkateswararao Garu S/O Venkatarao Garu",
                                          "Amount": 2500,
                                          "Village": "Chinna Vellamilli",
                                          "Date": "31-05-2025",
                                          "Collectedby": "Komati Srinivas Garu"
                                        },
                                        {
                                          "Name": "Thonta Gopi Garu",
                                          "Amount": 2500,
                                          "Village": "Chinna Vellamilli",
                                          "Date": "31-05-2025",
                                          "Collectedby": "Komati Srinivas Garu"
                                        },
                                        {
                                          "Name": "Thonta Venkata Rao Garu",
                                          "Amount": 2000,
                                          "Village": "Chinna Vellamilli",
                                          "Date": "31-05-2025",
                                          "Collectedby": "Komati Srinivas Garu"
                                        },
                                        {
                                          "Name": "Thonta Venkateswararao Garu S/O Manikyam Garu",
                                          "Amount": 2000,
                                          "Village": "Chinna Vellamilli",
                                          "Date": "31-05-2025",
                                          "Collectedby": "Komati Srinivas Garu"
                                        },
                                        {
                                          "Name": "Thonta Bhasakar Rao Garu",
                                          "Amount": 2000,
                                          "Village": "Chinna Vellamilli",
                                          "Date": "31-05-2025",
                                          "Collectedby": "Komati Srinivas Garu"
                                        },
                                        {
                                          "Name": "Relangi Jogayya Garu",
                                          "Amount": 2000,
                                          "Village": "Chinna Vellamilli",
                                          "Date": "31-05-2025",
                                          "Collectedby": "Komati Srinivas Garu"
                                        },
                                        {
                                          "Name": "Komati Srinu Garu S/O Ramarao Garu",
                                          "Amount": 2000,
                                          "Village": "Chinna Vellamilli",
                                          "Date": "31-05-2025",
                                          "Collectedby": "Komati Srinivas Garu"
                                        },
                                        {
                                          "Name": "Gudavalli Gopi Krishna Garu",
                                          "Amount": 2000,
                                          "Village": "Chinna Vellamilli",
                                          "Date": "31-05-2025",
                                          "Collectedby": "Komati Srinivas Garu"
                                        },
                                        {
                                          "Name": "Marisetti Durgaravu Garu",
                                          "Amount": 2000,
                                          "Village": "Chinna Vellamilli",
                                          "Date": "31-05-2025",
                                          "Collectedby": "Komati Srinivas Garu"
                                        },
                                        {
                                          "Name": "Komati Saraswathi Garu",
                                          "Amount": 2000,
                                          "Village": "Chinna Vellamilli",
                                          "Date": "31-05-2025",
                                          "Collectedby": "Komati Srinivas Garu"
                                        },
                                        {
                                          "Name": "Dasari Bulli Venkatarao Garu",
                                          "Amount": 2000,
                                          "Village": "Chinna Vellamilli",
                                          "Date": "31-05-2025",
                                          "Collectedby": "Komati Srinivas Garu"
                                        },
                                        {
                                          "Name": "Komati Gangaraju Garu S/O Bullabbayi Garu",
                                          "Amount": 2000,
                                          "Village": "Chinna Vellamilli",
                                          "Date": "31-05-2025",
                                          "Collectedby": "Komati Srinivas Garu"
                                        },
                                        {
                                          "Name": "Marisetti Venkatarao Garu",
                                          "Amount": 2000,
                                          "Village": "Chinna Vellamilli",
                                          "Date": "31-05-2025",
                                          "Collectedby": "Komati Srinivas Garu"
                                        },                                      
                                                                        
                              

                                              

                              


                    
 
          


];

const expensesData = [
    {
        item: "Expense1",
        amount: "₹",
        date: "01-04-2025",
        description: ""
    },
    
];

// Function to load events
function loadEvents() {
    const eventsContainer = document.getElementById('events-container');
    eventsContainer.innerHTML = '';

    eventsData.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'col-md-4 mb-4 fade-in';
        eventCard.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${event.title}</h5>
                    <p class="card-text">
                        <i class="fas fa-calendar-alt"></i> ${event.date}<br>
                        <i class="fas fa-clock"></i> ${event.time}<br>
                        <i class="fas fa-map-marker-alt"></i> ${event.location}
                    </p>

                </div>
            </div>
        `;
        eventsContainer.appendChild(eventCard);
    });
   
}

// Function to populate filter options
function populateFilters() {
    const villageFilter = document.getElementById('village-filter');
    villageFilter.innerHTML = '<option value="">All Villages</option>';
    const villages = [...new Set(donationsData.map(d => d.Village))];
    villages.forEach(village => {
        const option = document.createElement('option');
        option.value = village;
        option.textContent = village;
        villageFilter.appendChild(option);
    });
}

function calculateTotalDonations(donations) {
    return donations.reduce((total, donation) => {
        const amount = parseFloat(donation.Amount);
        return total + (isNaN(amount) ? 0 : amount);
    }, 0);
}

function updateTotalDonations(donations) {
    const total = calculateTotalDonations(donations);
    const formattedTotal = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(total);
    document.getElementById('total-donations').innerHTML = `
        <h3 class="text-primary">Total Donations: ${formattedTotal}</h3>
    `;
}

function updateCollectorDonations(donations) {
    const collectorTotals = {};
    donations.forEach(donation => {
        const collector = donation.Collectedby;
        const amount = parseFloat(donation.Amount);
        if (!collectorTotals[collector]) collectorTotals[collector] = 0;
        collectorTotals[collector] += isNaN(amount) ? 0 : amount;
    });
    let html = '<h4 class="text-primary">Total donations collected by:</h4>';
    Object.entries(collectorTotals).forEach(([collector, total]) => {
        const formatted = new Intl.NumberFormat('en-IN', {
            style: 'currency', currency: 'INR', maximumFractionDigits: 0
        }).format(total);
        html += `<p class="mb-1"><strong>${collector}:</strong> ${formatted}</p>`;
    });
    document.getElementById('collector-donations').innerHTML = html;
}

// Pagination settings
const ITEMS_PER_PAGE = 100;
let currentPage = 1;
let currentDonations = [];

function loadDonations(donations = donationsData) {
    currentDonations = donations;
    currentPage = 1;
    displayDonations();
    updatePagination();
    updateTotalDonations(donations);
    updateCollectorDonations(donations);
}

function displayDonations() {
    const tableBody = document.getElementById('donations-table');
    tableBody.innerHTML = '';
    
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const pageDonations = currentDonations.slice(startIndex, endIndex);
    
    pageDonations.forEach((donation, index) => {
        const formattedAmount = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(donation.Amount);
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${startIndex + index + 1}</td>
            <td>${donation.Name}</td>
            <td>${formattedAmount}</td>
            <td>${donation.Village}</td>
            <td>${donation.Date}</td> 
              <!-- <td>${donation.Collectedby}</td> -->
        `;
        tableBody.appendChild(row);
    });
}

function updatePagination() {
    const totalPages = Math.ceil(currentDonations.length / ITEMS_PER_PAGE);
    const pagination = document.getElementById('donations-pagination');
    pagination.innerHTML = '';
    
    // Previous button
    const prevLi = document.createElement('li');
    prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
    prevLi.innerHTML = `
        <a class="page-link" href="javascript:void(0)" aria-label="Previous" onclick="changePage(${currentPage - 1})">
            <span aria-hidden="true">&laquo;</span>
        </a>
    `;
    pagination.appendChild(prevLi);
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${currentPage === i ? 'active' : ''}`;
        li.innerHTML = `
            <a class="page-link" href="javascript:void(0)" onclick="changePage(${i})">${i}</a>
        `;
        pagination.appendChild(li);
    }
    
    // Next button
    const nextLi = document.createElement('li');
    nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
    nextLi.innerHTML = `
        <a class="page-link" href="javascript:void(0)" aria-label="Next" onclick="changePage(${currentPage + 1})">
            <span aria-hidden="true">&raquo;</span>
        </a>
    `;
    pagination.appendChild(nextLi);
}

function changePage(page) {
    const totalPages = Math.ceil(currentDonations.length / ITEMS_PER_PAGE);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        displayDonations();
        updatePagination();
    }
}

function filterDonations() {
    const searchTerm = document.getElementById('donation-search').value.toLowerCase();
    const villageFilter = document.getElementById('village-filter').value;
    const filteredDonations = donationsData.filter(donation => {
        const matchesSearch = (donation.Name || '').toLowerCase().includes(searchTerm) ||
                            (donation.Collectedby || '').toLowerCase().includes(searchTerm) ||
                            (donation.Village || '').toLowerCase().includes(searchTerm);
        const matchesVillage = !villageFilter || donation.Village === villageFilter;
        return matchesSearch && matchesVillage;
    });
    loadDonations(filteredDonations);
}

// Function to load expenses
function loadExpenses() {
    const expensesTable = document.getElementById('expenses-table').getElementsByTagName('tbody')[0];
    expensesTable.innerHTML = '';

    expensesData.forEach(expense => {
        const row = expensesTable.insertRow();
        row.innerHTML = `
            <td>${expense.item}</td>
            <td class="text-end">${expense.amount}</td>
            <td>${expense.date}</td>
            <td>${expense.description}</td>
        `;
    });
}

// Function to handle contact form submission
function handleContactForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // Here you would typically send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Load all data
    loadEvents();
    populateFilters();
    loadDonations();
    loadExpenses();

    // Add event listeners for filters
    document.getElementById('donation-search').addEventListener('input', filterDonations);
    document.getElementById('village-filter').addEventListener('change', filterDonations);

    // Add event listener for contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 
