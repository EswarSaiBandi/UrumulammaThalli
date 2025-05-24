// Sample data for events, donations, and expenses
const eventsData = [
    {
        title: "Ganganamma Urumulamma Amma Vaari Jaathara",
        date: "8/6/2025",
        time: "All Day",
        location: "Vellamilli Panchayathi",
        description: "Annual traditional festival celebration with cultural programs and rituals"
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
        {"Name":"Yedavalli Venketeswara Rao Garu","Amount":20000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
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
        {"Name":"Yadagani Peddaramayya Garu","Amount":5000,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Yadagani Peddasatyanarayana Garu","Amount":6000,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Paanakala Satyanarayana Garu","Amount":2500,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Paanakala Maavullarao Garu","Amount":2500,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Challa Suryanarayana Garu","Amount":3000,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Peethala Sathubabu Garu","Amount":600,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
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
    {"Name": "Tatina Veeraraghavulu Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
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
            {"Name": "Yaganti Srinivasarao S/o paparao Garu", "Amount": 4000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
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
                        {"Name": "Karuturi Pavan kumar Garu", "Amount": null, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},


                        
                            {"Name": "Cherukuri Seshayya Garu", "Amount": 15000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Yennani Bhulivenkayya Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Vidiyal Pedhanageswararao Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
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
                            {"Name": "Yadagini Suryabrahmanandharao Garu", "Amount": 6000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Dandamudi Krishna Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Potam Krishna Garu", "Amount": 200, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Kesana Durgarao Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Seethamsetti Srinivasa Mahamkali Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Pillamgoru Bhaskarrao Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Isukupati Haribabu Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Chintha Srimmannarayana Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Singavarapu Rambabu Garu", "Amount": 2116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                            {"Name": "Kola Venkatesh Garu", "Amount": 1000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
                                            
                                    
              
                    
 
          


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
                    <p class="card-text">${event.description}</p>
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
const ITEMS_PER_PAGE = 10;
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
            <td>${donation.Collectedby}</td>
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