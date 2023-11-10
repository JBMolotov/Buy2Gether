// clients
require("./clients/create");
require("./clients/update");
require("./clients/search");
require("./clients/searchAll");
require("./clients/delete");
require("./clients/offersJoined");

// company
require("./companies/create");
require("./companies/update");
require("./companies/search");
require("./companies/searchAll");
require("./companies/delete");
require("./companies/approved");
require("./companies/approvedNot");

// offer
require("./offers/create");
require("./offers/update");
require("./offers/search");
require("./offers/searchAll");
require("./offers/delete");
require("./offers/join");
require("./offers/clientsJoined");

// feedback
require("./feedbacks/create");
require("./feedbacks/update");
require("./feedbacks/searchAll");
require("./feedbacks/searchByClient");
require("./feedbacks/searchByOffer");
require("./feedbacks/delete");

// super admin
require("./superAdmin/approveCompany");