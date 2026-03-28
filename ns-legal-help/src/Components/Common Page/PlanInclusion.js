const planInclusions = {
  'Private Limited Company': {
    essential: [
     "2 Digital Signature Certificates.",
      "2 Director Identification Numbers.",
      "1 Name Approval Application under SPICe Plus.",
      "Stamp duty on INR 1 Lakh Authorized Capital.",
      "Company Incorporation using SPICe Plus. ",
      "Copy of e-MOA.",
      "Copy of e- AOA.",
      "e-PAN.",
      "e-TAN. ",
      "2 e-copies of Share Certificates*.",
      "ESIC Registration through SPICe Plus*.",
      "PF Registration through SPICe Plus *",
      "Bank Account opening (feature) through SPICe Plus*. "
    ],
    enhanced: [
      "2 Digital Signature Certificates.",
      "2 Director Identification Numbers.",
      "1 Name Approval Application under SPICe Plus.",
      "Stamp duty on INR 1 Lakh Authorized Capital.",
      "Company Incorporation using SPICe Plus. ",
      "Copy of e-MOA.",
      "Copy of e- AOA.",
      "e-PAN.",
      "e-TAN. ",
      "2 e-copies of Share Certificates*.",
      "ESIC Registration through SPICe Plus*.",
      "PF Registration through SPICe Plus *",
      "Bank Account opening (feature) through SPICe Plus*. ",
      "INC 20A.",
      "GST Registration.",
      // "MSME Registration",
    ]
  },
  'Limited Liabilty Partnership': {
    essential: [
      "2 Digital Signature Certificates.",
      "Name Approval via RUN-LLP.",
      "FiLLiP filing with MCA.",
      "LLP Agreement Drafting.",
      "Certificate of Incorporation with PAN & TAN"
    ],
    enhanced: [
      "2 DSCs.",
      "2 DPINs.",
      "Name approval (RUN-LLP).",
      "FiLLiP filing with MCA.",
      "LLP Agreement Drafting.",
      "Certificate of Incorporation with PAN & TAN.",
      "GST Registration.",
      "First LLP Agreement Filing (Form 3)",
      "MSME Registration"
    ]
  },
  'Sole Proprietorship': {
    essential: [
      "SSI/MSME Registration.",
    ],
    enhanced: [
      "SSI/MSME Registration.",
      "GST registration.",
    ]
  },
  'One Person Company (OPC)': {
    essential: [
      "Digital Signature Certificate of Director.",
      "Digital Signature Certificate of Nominee",
      "Director Identification Number",
      "1 Name Approval Application",
      "Stamp duty on INR 1 Lakh Authorized Capital",
      "Company Incorporation using SPICe+",
      "Copy of e-MOA & e-AOA",
      "E-PAN & E-TAN",
      "1 Share Certificates (e-copy)",
      "ESIC Registration through SPICe Plus",
      "PF Registration through SPICe Plus",
      "Bank Account opening (feature) through SPICe Plus"

    ],
    enhanced: [
      "Digital Signature Certificate of Director.",
      "Digital Signature Certificate of Nominee",
      "Director Identification Number",
      "1 Name Approval Application",
      "Stamp duty on INR 1 Lakh Authorized Capital",
      "Company Incorporation using SPICe+",
      "Copy of e-MOA & e-AOA",
      "E-PAN & E-TAN",
      "1 Share Certificates (e-copy)",
      "ESIC Registration through SPICe Plus",
      "PF Registration through SPICe Plus",
      "Bank Account opening (feature) through SPICe Plus",
      "GST Registration",
      "INC-20A Filing"
    ]
  },
  'Hindu Undivided Family,HUF Deed': {
    essential: [
      "Drafting of HUF Deed",
      "PAN Application for HUF"

    ],
    enhanced: [
      "Drafting of HUF Deed",
      "PAN Application for HUF",
      "GST Registration",

    ]
  },
  'Partnership': {
    essential: [
      "Drafting of Partnership Deed.",
      "PAN Application.",
      "TAN Application.",
      "Consultation with compliance expert"

    ],
    enhanced: [
      "Drafting of Partnership Deed.",
      "PAN Application.",
      "TAN Application.",
      "GST Registration.",
      "Consultation with compliance expert"
    ]
  },
  'E-Commerce Business': {
    essential: [
      "Business structure consultation.",
      "GST registration.",
      "Proprietorship Registration.",
      "PAN Application "

    ],
    enhanced: [
      "2 Digital Signature Certificates.",
      "2 Director Identification Numbers.",
      "1 Name Approval Application under RUN.",
      "Stamp duty on INR 1 Lakh Authorized Capital.",
      "Private Limited Company Incorporation using SPICe.",
      "MOA & AOA.",
      "PAN Application.",
      "TAN Application.",
      "GST Registration.",
      "SSI MSME Registration.",
      "Trademark application (1 class)"

    ]
  }, 'Non Profit Organization': {
    essential: [
      "Name approval.",
      "DSC for 2 Directors.",
      "2 Director Identification Numbers.",
      "Stamp duty on INR 1 Lakh Authorized Capital.",
      "Company Incorporation using SPICe+.",
      "Copy of e-MOA & e-AOA.",
      "e-PAN.",
      "e-TAN.",
      "ESIC Registration through SPICe Plus.",
      "PF Registration through SPICe Plus.",
      "Bank Account opening (feature) through SPICe Plus.",
      "Section 8 License Application (INC-12).",
    ],
    enhanced: [
      "2 Digital Signature Certificates.",
      "2 Director Identification Numbers.",
      "Section 8 Licence.",
      "Name Approval.",
      "Stamp duty on INR 1 Lakh Authorized Capital.",
      "Company Incorporation using SPICe+.",
      "Copy of e-MOA & e-AOA.",
      "e-PAN.",
      "e-TAN.",
      "ESIC Registration through SPICe Plus.",
      "PF Registration through SPICe Plus.",
      "Section 8 License.",
      "Trademark Application (1 Application 1 Class)."
    ]
  }, 'IEC Registration': {
    essential: [
      "IEC application filing.",
    ],
    enhanced: [
      "IEC application filing.",
      "DSC Digital Signature Class 3 Individual having 2 Years Validity.",
    ]
  },
  'GST Return': {
    essential: [
      " Covers Single Return",
      " 1 GST Return under GSTR - 3B or GSTR 1 ",
    ],
    enhanced: [
      " Covers Montly Return",
      " 1 GST Return under GSTR - 3B and GSTR 1  ",
    ]
  },
  'TDS Return': {
    essential: [
      "2 Digital Signature Certificates.",
      // "2 DPINs.",
      // "Name Approval via RUN-LLP.",
      // "LLP Agreement Drafting.",
      // "Filing of Form FiLLiP.",
      // "Stamp Duty on Agreement.",
      // "PAN & TAN Application.",
      // "Certificate of Incorporation."
    ],
    enhanced: [
      "Everything in Essential Plan.",
      // "GST Registration.",
      // "Preparation of LLP Deed.",
      // "Filing of Form 3.",
      // "MSME Registration.",
      // "Free Consultation with Legal Expert.",
      // "Annual Filing Support for 1 Year.",
      // "Startup India Registration."
    ]
  },
  'Income Tex Return': {
    essential: [
      "2 Digital Signature Certificates.",
      // "2 DPINs.",
      // "Name Approval via RUN-LLP.",
      // "LLP Agreement Drafting.",
      // "Filing of Form FiLLiP.",
      // "Stamp Duty on Agreement.",
      // "PAN & TAN Application.",
      // "Certificate of Incorporation."
    ],
    enhanced: [
      "Everything in Essential Plan.",
      // "GST Registration.",
      // "Preparation of LLP Deed.",
      // "Filing of Form 3.",
      // "MSME Registration.",
      // "Free Consultation with Legal Expert.",
      // "Annual Filing Support for 1 Year.",
      // "Startup India Registration."
    ]
  },
  'Private Limited Comapny Annual Filling': {
    essential: [
      "Authorized Capital of ₹1 Lakh & Turnover up to ₹20 Lakhs.",
      "AOC-4 Filing.",
      "MGT-7 Filing.",
      "ADT-1 Filing.",
      "2 DIR-3 KYC.",
    ],
    enhanced: [
      "Accounting & Book-keeping(for upto 100 accounting transactions)",
      "Financial Statement Preparation.",
      "Drafting of Notice & Director’s Report",
      "AOC-4 Filing.",
      "MGT-7 Filing.",
      "ADT-1 Filing.",
      "Annual Filings (upto authorized Capital of ₹1 Lakh and upto ₹20 Lakhs turnover)",
      "One Year Income Tax Return Filing (upto ₹20 Lakhs turnover).",
      "2 DIR-3 KYC.",
    ]
  }, 'OPC Annual Filling': {
    essential: [
      "AOC-4 Filing.",
      "MGT-7 Filing.",
      "ADT-1 Filing.",
      "2 DIR-3 KYC.",
    ],
    enhanced: [
      "Accounting & Book-keeping(for upto 100 accounting transactions)",
      "Financial Statement Preparation.",
      "Drafting of Notice & Director’s Report",
      "AOC-4 Filing.",
      "MGT-7 Filing.",
      "ADT-1 Filing.",
      "Annual Filings (upto authorized Capital of ₹1 Lakh and upto ₹20 Lakhs turnover)",
      "One Year Income Tax Return Filing (upto ₹20 Lakhs turnover).",
      "2 DIR-3 KYC.",
    ]
  }, 'LLP Annual Filling': {
    essential: [
      "Form 8 Filing.",
    ],
    enhanced: [
      "Form 11.",
      "Form 8.",
      "DIR 3 KYC.",
      "Accounting and bookkeeping (upto 50 transaction).",
      "ITR-5 Filing (Income Tax Return).",
    ]
  },
  'Nidhi Company Annual Filling': {
    essential: [
      "Annual filings for companies having Authorized Capital up to ₹10 Lakhs and turnover up to ₹20 Lakhs.",
      "AOC-4 Filing.",
      "MGT-7 Filing.",
      "ADT-1 Filing.",
      "2 DIR-3 KYC.",
      "Filing of NDH-1.",
      "Filing of 2 NDH-3 returns (half-yearly).",
      "Professional certification on MGT-7 & AOC-4."
    ],
    enhanced: [
      "Accounting & Book-keeping.",
      "Financial Statement Preparation.",
      "Drafting of Notice & Director’s Report.",
      "AOC-4 Filing.",
      "MGT-7 Filing.",
      "ADT-1 Filing.",
      "Filing of NDH-1.",
      "Filing of 2 NDH-3 returns (half-yearly).",
      "Annual Filings (upto authorized Capital of ₹1 Lakh and upto ₹20 Lakhs turnover).",
      "One Year Income Tax Return Filing (upto ₹20 Lakhs turnover).",
      "3 DIR-3 KYC filings (for up to 3 Directors).",
      "Professional certification on MGT-7 & AOC-4."
    ]
  },
  'NPO/Section-8 Comapny Annual Filling': {
    essential: [
      "Authorized Capital up to ₹1 Lakh, turnover up to ₹20 Lakhs.",
      "AOC-4 Filing.",
      "MGT-7 Filing.",
      "ADT-1 Filing.",
    ],
    enhanced: [
      "Accounting & Book-keeping.",
      "Financial Statement Preparation.",
      "Drafting of Notice & Director’s Report.",
      "AOC-4 Filing.",
      "MGT-7 Filing.",
      "ADT-1 Filing.",
      "Annual filings for companies with authorized capital up to ₹1 Lakh, turnover up to ₹20 Lakhs, and up to 100 accounting transactions",
      "One Year Income Tax Return Filing (upto ₹20 Lakhs turnover).",
      "2 DIR-3 KYC.",
      "Professional certification on AOC 4."
    ]
  },
  'GST Registation': {
    essential: [
      "GST registration application for Proprietorship or Partnership or LLP or Private Limited Company.",
    ],
    enhanced: [
      "GST registration application for Proprietorship or Partnership or LLP or Private Limited Company.",
      "GST Returns for first three months (upto 10 entries).",
    ]
  },
  // Add more business types here with similar structure
};

export default planInclusions;