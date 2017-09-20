var Conversion = function() {
  this.amount;
  this.convertFrom;
  this.convertTo;

  this.convert = function(amount, convertFrom) {
    this.amount = amount;
    this.convertFrom = convertFrom;
    return this;
  };

  this.to = function(convertTo) {
    this.convertTo = convertTo;
    return this;
  };

  this.execute = function() {
    if (this.convertFrom === 'lb' && this.convertTo === 'kg') {
      return poundsToKilos(this.amount);
    } else if (this.convertFrom === 'lb' && this.convertTo === 'oz') {
      return poundsToOunces(this.amount)
    } else if (this.convertFrom === 'ft' && this.convertTo === 'in') {
      return feetToInches(this.amount)
    } else if (this.convertFrom === 'ft' && this.convertTo === 'm'){
      return feetToMeters(this.amount)
    } else if (this.convertFrom === 'pt' && this.convertTo === 'fl oz') {
      return pintToFluidOunces(this.amount)
    } else {
      throw 'Please ensure you using a valid conversion and you have used the correct symbols ("lb" = pound, "kg" = kilogram, "oz" = ounce, "ft" = feet, "in" = inch, "m" = meter, "pt" = pint, "fl oz" = fluid ounce).'
    }
  };
};

var conversion = new Conversion()
  .convert(1, 'pt')
  .to('fl oz')
  .execute();

console.log(conversion);

function poundsToKilos(pounds) {
  const amount = pounds / 2.2;
  return amount.toFixed(2);
}

function poundsToOunces(pounds) {
  const amount = pounds * 16;
  return amount.toFixed(2);
}

function feetToInches(feet) {
  const amount = feet * 12;
  return amount.toFixed(2);
}

function feetToMeters(feet) {
  const amount = feet * 0.3;
  return amount.toFixed(2);
}

function pintToFluidOunces(pint) {
  const amount = pint * 16;
  return amount.toFixed(2);
}
