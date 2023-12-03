export function formatNumber(number: number): string {
    const absNumber = Math.abs(number);
  
    if (absNumber < 1000) {
      // Display the number as is if it's less than 1000
      return number.toString();
    } else if (absNumber < 1e6) {
      // Display in thousands (k) format
      return (number / 1e3).toFixed(1) + 'k';
    } else if (absNumber < 1e9) {
      // Display in millions (m) format
      return (number / 1e6).toFixed(1) + 'm';
    } else {
      // Display in billions (b) format
      return (number / 1e9).toFixed(1) + 'b';
    }
  }