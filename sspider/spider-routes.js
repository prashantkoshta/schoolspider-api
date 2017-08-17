var express = require('express');
var router = express.Router();
/* GET users listing. */
var testData = {
    "title" : "Exam",
    "classes" : [ 
        {
            "class" : "1",
            "title" : "1st",
            "subjects" : [ 
                {
                    "title" : "English",
                    "topices" : [ 
                        {
                            "title" : "Topic 1",
                            "qestions" : [ 
                                {
                                    "question" : "wsdd d d d de. d",
                                    "answer" : "1",
                                    "type" : "input"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

router.get('/testapi', function(req, res) {
	res.send(200,testData);
});
// Public view page
router.get('/listofequation', function(req, res) {
	console.log("Called... /listofequation");
	var ar =[];
	for(var i =0;i<1000;i++){
		ar[i] = {"type":"Simple Interest","action":"SIMINT","pagename":"SI_Page","pageurl":"/calculator"}
	}
	/*
	[
            {"type":"Simple Interest","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Compund Interest","action":"CMPINT","pagename":"SI_Page"},
            {"type":"Yeilds","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Simple Interest","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Compund Interest","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Yeilds","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Simple Interest","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Compund Interest","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Yeilds","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Simple Interest","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Compund Interest","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Yeilds","action":"SIMINT","pagename":"SI_Page"}
	]
	*/
	res.send(200,ar);
});
router.get('/an-listofequation', function(req, res) {
	console.log("Called... /an-listofequation");
	var ar =[];
	for(var i =0;i<1000;i++){
		ar[i] = {"type":"Simple Interest","action":"SIMINT","pagename":"SI_Page","pageurl":"/calculator"}
	}
	/*
	[
            {"type":"Simple Interest","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Compund Interest","action":"CMPINT","pagename":"SI_Page"},
            {"type":"Yeilds","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Simple Interest","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Compund Interest","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Yeilds","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Simple Interest","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Compund Interest","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Yeilds","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Simple Interest","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Compund Interest","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Yeilds","action":"SIMINT","pagename":"SI_Page"}
	]
	*/

    var arr = {"listOfCals":[
        {
            "type":"Simple Interest",
            "action":"com.devcli.finance_eq.calculator.SimpleInterest",
            "descriptions":"Simple Interest Formula<br />I = Prt<br />Where:<br />P = Principal Amount <br />I = Interest Amount <br />r = Rate of Interest per year in decimal; r = R/100 <br />R = Rate of Interest per year as a percent; R = r * 100 <br />t = Time Periods involved",
            "frequency" :["Years","Quarters","Months","Weeks","Days (365/Year)","Days (360/Year)"]
        },
        {
            "type":"Compound Interest",
            "action":"com.devcli.finance_eq.calculator.CompoundInterest",
            "descriptions":"Compound Interest Equation<br />A = P(1 + r/n)nt<br />Where:<br />A = Accrued Amount (principal + interest)<br />P = Principal Amount<br />I = Interest Amount<br />R = Annual Nominal Interest Rate in percent<br />r = Annual Nominal Interest Rate as a decimal<br />r = R/100<br />t = Time Involved in years, 0.5 years is calculated as 6 months, etc.<br />n = number of compounding periods per unit at the END of each period.",
            "frequency" :["Continuously","Daily (365/Year)","Daily (360/Year)","Weekly (52/Year)","Bi-Weekly (26/Year)","Semi-Monthly (24/Year)",
            "Monthly (12/Year)","Bi-Monthly (6/Year)","Quarterly (4/Year)","Semi-Annually (2/Year)","Annually (1/Year)"],
        },
        {
            "type":"Loan Calculator",
            "action":"com.devcli.finance_eq.calculator.LoanCalculator",
            "descriptions":"Loan Calculator Equation<br />APV=PMTi[1−1(1+i)n]PV=PMTi[1−1(1+i)n] <br />Where:<PV is the loan amount<br \>PMT is the monthly payment<br \>i is the interest rate per month in decimal form (interest rate percentage divided by 12)<br \>n is the number of months (term of the loan in months)",
            "frequency" :["Months","Year"]
        }
    ]};





    res.status(200).send(arr);
});



module.exports = router;