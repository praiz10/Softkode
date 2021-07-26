fetch("https://covidnigeria.herokuapp.com/api")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    document.getElementById("Samples_Tested").innerHTML =
      data.data.totalSamplesTested;
    document.getElementById("Confirmed_Cases").innerHTML =
      data.data.totalConfirmedCases;
    document.getElementById("Active_Cases").innerHTML =
      data.data.totalActiveCases;
    document.getElementById("Discharged").innerHTML = data.data.discharged;
    document.getElementById("Death").innerHTML = data.data.death;
  });

var myArray = [
  {
    state: "Lagos",
    id: "iiBRN5umt",
    confirmedCases: 61122,
    casesOnAdmission: 2151,
    discharged: 58515,
    death: 456,
  },
  {
    state: "FCT",
    id: "fZAN8hXM6L",
    confirmedCases: 19927,
    casesOnAdmission: 40,
    discharged: 19719,
    death: 168,
  },
  {
    state: "Kaduna",
    id: "vzzIAAhHFk",
    confirmedCases: 9127,
    casesOnAdmission: 4,
    discharged: 9058,
    death: 65,
  },
  {
    state: "Plateau",
    id: "vpS3kPowp",
    confirmedCases: 9068,
    casesOnAdmission: 3,
    discharged: 9008,
    death: 57,
  },
  {
    state: "Rivers",
    id: "9TsCdsf2TZ",
    confirmedCases: 7415,
    casesOnAdmission: 71,
    discharged: 7243,
    death: 101,
  },
  {
    state: "Oyo",
    id: "x22i6DYDzi",
    confirmedCases: 6910,
    casesOnAdmission: 43,
    discharged: 6739,
    death: 128,
  },
  {
    state: "Edo",
    id: "qMS_-XuSqs",
    confirmedCases: 4914,
    casesOnAdmission: 4,
    discharged: 4725,
    death: 185,
  },
  {
    state: "Ogun",
    id: "o4qkFSA_uW",
    confirmedCases: 4723,
    casesOnAdmission: 25,
    discharged: 4645,
    death: 53,
  },
  {
    state: "Kano",
    id: "_H2WzDquvQ",
    confirmedCases: 4006,
    casesOnAdmission: 3,
    discharged: 3893,
    death: 110,
  },
  {
    state: "Ondo",
    id: "UsQx1lfnzU",
    confirmedCases: 3497,
    casesOnAdmission: 19,
    discharged: 3413,
    death: 65,
  },
  {
    state: "Kwara",
    id: "p93Priu61j",
    confirmedCases: 3160,
    casesOnAdmission: 37,
    discharged: 3068,
    death: 55,
  },
  {
    state: "Delta",
    id: "1fHIFCAxAn",
    confirmedCases: 2654,
    casesOnAdmission: 26,
    discharged: 2556,
    death: 72,
  },
  {
    state: "Osun",
    id: "M3ITgwCAO7",
    confirmedCases: 2578,
    casesOnAdmission: 6,
    discharged: 2520,
    death: 52,
  },
  {
    state: "Enugu",
    id: "Qi9ab0jrET",
    confirmedCases: 2482,
    casesOnAdmission: 18,
    discharged: 2435,
    death: 29,
  },
  {
    state: "Nasarawa",
    id: "sKWWOZtDe4",
    confirmedCases: 2385,
    casesOnAdmission: 1,
    discharged: 2345,
    death: 39,
  },
  {
    state: "Gombe",
    id: "KaVp6XUq1u",
    confirmedCases: 2117,
    casesOnAdmission: 12,
    discharged: 2061,
    death: 44,
  },
  {
    state: "Katsina",
    id: "KESSzjtcEs1",
    confirmedCases: 2112,
    casesOnAdmission: 23,
    discharged: 2055,
    death: 34,
  },
  {
    state: "Ebonyi",
    id: "QSiKFhiQvF-",
    confirmedCases: 2039,
    casesOnAdmission: 5,
    discharged: 2002,
    death: 32,
  },
  {
    state: "AkwaIbom",
    id: "nORp4ac3BqN",
    confirmedCases: 1989,
    casesOnAdmission: 54,
    discharged: 1917,
    death: 18,
  },
  {
    state: "Anambra",
    id: "Z-Sy-x1UzPK",
    confirmedCases: 1909,
    casesOnAdmission: 64,
    discharged: 1826,
    death: 19,
  },
  {
    state: "Abia",
    id: "x8Ug1gHTnG9",
    confirmedCases: 1693,
    casesOnAdmission: -2,
    discharged: 1673,
    death: 22,
  },
  {
    state: "Imo",
    id: "3po4hzjLJoe",
    confirmedCases: 1661,
    casesOnAdmission: 0,
    discharged: 1624,
    death: 37,
  },
  {
    state: "Bauchi",
    id: "aHVnWhJqDJI",
    confirmedCases: 1549,
    casesOnAdmission: 0,
    discharged: 1532,
    death: 17,
  },
  {
    state: "Benue",
    id: "NeOTNxNNkL3",
    confirmedCases: 1366,
    casesOnAdmission: 15,
    discharged: 1327,
    death: 24,
  },
  {
    state: "Borno",
    id: "Yl-CZ0dWCnI",
    confirmedCases: 1344,
    casesOnAdmission: 1,
    discharged: 1305,
    death: 38,
  },
  {
    state: "Adamawa",
    id: "aY8qTpbJRv1",
    confirmedCases: 1134,
    casesOnAdmission: 4,
    discharged: 1098,
    death: 32,
  },
  {
    state: "Taraba",
    id: "h41HcBshCe5",
    confirmedCases: 1001,
    casesOnAdmission: 0,
    discharged: 977,
    death: 24,
  },
  {
    state: "Niger",
    id: "0LV-PopYEBP",
    confirmedCases: 935,
    casesOnAdmission: 5,
    discharged: 913,
    death: 17,
  },
  {
    state: "Bayelsa",
    id: "mHM7zSS5VUg",
    confirmedCases: 907,
    casesOnAdmission: 2,
    discharged: 879,
    death: 26,
  },
  {
    state: "Ekiti",
    id: "JlXBvZYZrKh",
    confirmedCases: 897,
    casesOnAdmission: 19,
    discharged: 867,
    death: 11,
  },
  {
    state: "Sokoto",
    id: "9WYRbPDpLWK",
    confirmedCases: 775,
    casesOnAdmission: 0,
    discharged: 747,
    death: 28,
  },
  {
    state: "Jigawa",
    id: "8vb6Mo-mK2l",
    confirmedCases: 536,
    casesOnAdmission: 8,
    discharged: 512,
    death: 16,
  },
  {
    state: "Yobe",
    id: "cq5qTEKyLB6",
    confirmedCases: 499,
    casesOnAdmission: 0,
    discharged: 490,
    death: 9,
  },
  {
    state: "Kebbi",
    id: "DK7CU2LdfVU",
    confirmedCases: 450,
    casesOnAdmission: 42,
    discharged: 392,
    death: 16,
  },
  {
    state: "CrossRiver",
    id: "hquAp92i_hi",
    confirmedCases: 402,
    casesOnAdmission: 0,
    discharged: 384,
    death: 18,
  },
  {
    state: "Zamfara",
    id: "vhEOrQJ61yJ",
    confirmedCases: 244,
    casesOnAdmission: 3,
    discharged: 233,
    death: 8,
  },
  {
    state: "Kogi",
    id: "PqiwjWY_Dvu",
    confirmedCases: 5,
    casesOnAdmission: 0,
    discharged: 3,
    death: 2,
  },
];

buildTable(myArray);

function buildTable(data) {
  var table = document.getElementById("mytable");

  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
            <td>${data[i].state}</td>
            <td>${data[i].id}</td>
            <td>${data[i].confirmedCases}</td>
            <td>${data[i].casesOnAdmission}</td>
            <td>${data[i].discharged}</td>
            <td>${data[i].death}</td></tr>`;
    table.innerHTML += row;
  }
}

function searchFun() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("mytable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
