function calculate_payment () {
  let loan_amount = document.getElementById("loanAmount").value;
  let lenght_months = document.getElementById("months").value;
  let interest_rate = document.getElementById("rate").value / 100;
  let monthly_interest = interest_rate / 12;

  const element = document.getElementById("out");
  if (element != null) {
    element.remove();
  }

  console.log(loan_amount);

  if (loan_amount == 0) {
    document.getElementById("subm").innerHTML +=
    "<div class = 'output' id = 'out'><h3>You left Loan amount field empty!</h3> </div>";
  } else if (lenght_months == 0) {
    document.getElementById("subm").innerHTML +=
    "<div class = 'output' id = 'out'><h3>You left Loan term field empty!</h3> </div>";
  } else if (interest_rate == 0) {
    document.getElementById("subm").innerHTML +=
    "<div class = 'output' id = 'out'><h3>You left Interest rate field empty!</h3> </div>";
  } else {
    let payments = loan_amount * ( (monthly_interest * ((1 + monthly_interest) ** lenght_months)) / (((1 + monthly_interest) ** lenght_months) - 1) );
    let total_interest = payments * lenght_months - loan_amount;
    let rounded_payments = payments.toFixed(2);
    let rounded_interest = total_interest.toFixed(2);

    document.getElementById("subm").innerHTML +=
    "<div class = 'output' id = 'out'><h3>MONTHLY PAYMENT: " + rounded_payments + "</h3> <h3>TOTAL INTEREST PAID: " + rounded_interest + "</h3> </div>";
  }

}
