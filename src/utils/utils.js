export function formatDate (date, format)  {
    const map = {
      dd: date.getDate().toString().padStart(2, '0'),
      mm: (date.getMonth() + 1).toString().padStart(2, '0'),
      yy: date.getFullYear().toString().slice(-2),
      yyyy: date.getFullYear(),
    };
  
    return format.replace(/dd|mm|yy|yyyy/gi, (matched) => map[matched]);
  };